import styles from "./Todofilter.module.css"

function Todofilter() {
    return (
        <div>
            <input className={styles.button} type="button" value="Todas" />
            <input className={styles.button} type="button" value="Completas" />
            <input className={styles.button} type="button" value="Incompletas" />
        </div>
    );
}
export default Todofilter