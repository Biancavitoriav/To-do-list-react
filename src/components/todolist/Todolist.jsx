import styles from "./Todolist.module.css";

function Todolist({ tarefas }) {
    return (
        <div className={styles.flexContainer}>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li className={styles.list} key={index}>{tarefa}
                    <button type="button" className={styles.bt}>Editar</button>
                    <button type="button" className={styles.btRemover}>Remover</button>
                    </li>
                ))}
            </ul>
        
        </div>
    );
}

export default Todolist;