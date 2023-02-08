import "./Info.css"
import styles from "./Info.module.css"

console.log(styles)

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <h2>Heading on the Info component</h2>
      <button className="myButton">I am button in the info component</button>
      <button className={styles.myOtherButton}>
        Button with local CSS styles
      </button>
    </div>
  )
}

export default Info
