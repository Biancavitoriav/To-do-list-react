import { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ task, editTask, toggleComplete, removeTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <li className={styles.list} key={task.id}>
            {}
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className={styles.input}
                    />
                    <button
                        onClick={handleSave}
                        className={styles.saveButton}
                    >
                        Salvar
                    </button>
                </>
            ) : (
                <>
                    {/* Mostra o texto da tarefa - caso completa, risca */}
                    <span
                        className={task.completed ? styles.completed : ""}
                        // Muda o status de completa ou incompleta
                        onClick={() => toggleComplete(task.id)}
                    >
                        {task.text}
                    </span>
                    <button
                        onClick={handleEdit}
                        className={styles.bt}

                    >
                        Editar
                    </button>
                    <button
                        onClick={() => removeTask(task.id)}
                        className={styles.btRemover}
                    >
                        Remover
                    </button>
                </>
            )}
        </li>
    );
}

export default TodoItem;
