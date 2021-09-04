import React, {useState, useRef} from 'react'
import styles from './add.module.css'
import { IoIosMusicalNotes } from "react-icons/io";

const Add = ({textAdd}) => {
  const [value, setValue] = useState('');
  const addRef = useRef();
  const formRef =useRef();

  const onClick = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      text: addRef.current.value,
      checked: true,
      star: false,
    }
    textAdd(todo)
    formRef.current.reset();
  }

  return (
    <form className={styles.container} ref={formRef}>
      <input className={styles.text} ref={addRef} type="text" placeholder="Write! What you shoud do." />
      <button className={styles.btn} type="submit" onClick={onClick} ><IoIosMusicalNotes />
      </button>
    </form>
  )
}

export default Add
