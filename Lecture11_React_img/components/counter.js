import { useState } from "react"
import styles from './Counter.module.css'

const Counter = ({children}) => {
    // console.log(useState());
    // const myStateArray = useState(0)
    // const count = myStateArray[0]
    // const setCount = myStateArray[1]

    console.log(children)

    const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: "center"}}>
        <h1 className={styles.textXl}>{count}</h1>
        <button 
            className={styles.button}
            onClick={() => {
            setCount(count + 1)
            console.log(count)
        }}>Increase Count</button>
        {children}
    </div>
  )
}

export default Counter