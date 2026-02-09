//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function demonstrateVariableScopes() {
    var varVariable = "I'm a var";
    let letVariable = "I'm a let";
    const constVariable = "I'm a const";

    if (true) {
        var varInBlock = "var in block";
        let letInBlock = "let in block";
        const constInBlock = "const in block";

        console.log("Inside block:");
        console.log(varInBlock);
        console.log(letInBlock);
        console.log(constInBlock);
    }

    console.log("\nOutside block:");
    console.log(varInBlock);

    var varVariable = "Redeclared var";

    varVariable = "Updated var";
    letVariable = "Updated let";

    const obj = { name: "John" };
    obj.name = "Jane";

    const arr = [1, 2, 3];
    arr.push(4);
}

demonstrateVariableScopes();
