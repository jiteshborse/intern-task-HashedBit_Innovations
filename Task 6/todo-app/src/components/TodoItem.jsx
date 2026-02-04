import { useState } from 'react';

const TodoItem = ({ value, index, deleteRow }) => {
    const [status, setStatus] = useState(false);

    const checkStatus = () => {
        setStatus(!status);
    };

    return (
        <li
            onClick={checkStatus}
            className={status ? 'complete-todo' : ''}
        >
            {index + 1}. {value}
            <span
                onClick={() => deleteRow(index)}
                className="close-icon"
            >
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
