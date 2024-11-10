import { useState } from "react";
import styles from "./Todoform.module.css";

function Todoform({ addTask }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className={styles.flexContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input}
                />
                <input
                    className={styles.button}
                    type="submit"
                    value="Adicionar"
                />
            </form>
        </div>
    );
}

export default Todoform;
