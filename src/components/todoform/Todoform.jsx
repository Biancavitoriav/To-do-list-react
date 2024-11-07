import { useState } from "react";
import styles from "./Todoform.module.css";

function Todoform({ adicionarTarefa }) {
    const [pessoa, setPessoa] = useState("");

    const handleInputChange = (e) => {
        setPessoa(e.target.value);
    };

    const handleAddClick = () => {
        if (pessoa.trim()) {
            adicionarTarefa(pessoa); 
            setPessoa("");
        }
    };

    return (
        <ol>
            <li>
                <div>
                    <input
                        type="text"
                        value={pessoa}
                        onChange={handleInputChange}
                    />
                    <input
                        className={styles.button}
                        type="button"
                        value="Adicionar"
                        onClick={handleAddClick} 
                    />
                </div>
            </li>
        </ol>
    );
}

export default Todoform;
