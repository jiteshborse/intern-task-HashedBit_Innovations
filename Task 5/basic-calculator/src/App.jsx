import { useState } from 'react'
import './App.css'

function App() {
  const [currentValue, setCurrentValue] = useState("0")
  const [previousValue, setPreviousValue] = useState("")
  const [operation, setOperation] = useState(undefined)

  const clearDisplay = () => {
    setCurrentValue("0")
    setPreviousValue("")
    setOperation(undefined)
  }

  const deleteDigit = () => {
    if (currentValue === "0") return
    if (currentValue.length === 1) {
      setCurrentValue("0")
    } else {
      setCurrentValue(currentValue.slice(0, -1))
    }
  }

  const appendNumber = (num) => {
    if (num === "." && currentValue.includes(".")) return
    if (currentValue === "0" && num !== ".") {
      setCurrentValue(num)
    } else {
      setCurrentValue(currentValue + num)
    }
  }

  const chooseOperation = (op) => {
    if (currentValue === "") return
    if (previousValue !== "") {
      compute()
    }
    setOperation(op)
    setPreviousValue(currentValue)
    setCurrentValue("")
  }

  const compute = () => {
    let computation
    const prev = parseFloat(previousValue)
    const current = parseFloat(currentValue)
    if (isNaN(prev) || isNaN(current)) return

    switch (operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "×":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break
      default:
        return
    }

    setCurrentValue(computation.toString())
    setOperation(undefined)
    setPreviousValue("")
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousValue} {operation}
        </div>
        <div className="current-operand">{currentValue}</div>
      </div>
      <button className="span-two operator" onClick={clearDisplay}>AC</button>
      <button className="operator" onClick={deleteDigit}>DEL</button>
      <button className="operator" onClick={() => chooseOperation("÷")}>÷</button>
      <button onClick={() => appendNumber("1")}>1</button>
      <button onClick={() => appendNumber("2")}>2</button>
      <button onClick={() => appendNumber("3")}>3</button>
      <button className="operator" onClick={() => chooseOperation("×")}>×</button>
      <button onClick={() => appendNumber("4")}>4</button>
      <button onClick={() => appendNumber("5")}>5</button>
      <button onClick={() => appendNumber("6")}>6</button>
      <button className="operator" onClick={() => chooseOperation("+")}>+</button>
      <button onClick={() => appendNumber("7")}>7</button>
      <button onClick={() => appendNumber("8")}>8</button>
      <button onClick={() => appendNumber("9")}>9</button>
      <button className="operator" onClick={() => chooseOperation("-")}>-</button>
      <button onClick={() => appendNumber(".")}>.</button>
      <button onClick={() => appendNumber("0")}>0</button>
      <button className="span-two operator" onClick={compute}>=</button>
    </div>
  )
}

export default App
