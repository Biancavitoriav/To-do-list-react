import styles from "./Todolist.module.css";
import TodoItem from "../todoitem/TodoItem.jsx"
function Todolist({ tasks, toggleComplete, removeTask, editTask }) {
    return (
        <ul className={styles.list}>
            {/* percorre o array de tarefas e renderiza um TodoItem para cada item */}
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    removeTask={removeTask}
                    editTask={editTask}
                />
            ))}
        </ul>
    );
}

export default Todolist;
