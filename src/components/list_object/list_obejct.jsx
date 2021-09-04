import React from 'react'
import styles from './list_object.module.css'
import { IoIosCloseCircleOutline, IoIosStarOutline, IoIosStar  } from "react-icons/io";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";


const List_object = ({todo, textDelete, onCheck, onStar}) => {

  const {id, text, checked, star} = todo;

  return (
    <div className={styles.list} >
      <button className={styles.check} onClick={()=>onCheck(id)} >
        {checked === true ? <MdCheckBoxOutlineBlank /> : <MdCheckBox className={styles.checked} /> } 
      </button>
      <p className={styles.text} >{text}</p>
      <button className={styles.star} onClick={()=>onStar(id)} >
        {star === false ? <IoIosStarOutline /> : <IoIosStar className={styles.stared} />}
      </button>
      <button className={styles.plus} onClick={()=>textDelete(id)}><IoIosCloseCircleOutline /></button>
    </div>
  )
}

export default List_object
