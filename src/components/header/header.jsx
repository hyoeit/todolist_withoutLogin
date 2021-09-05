import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
  
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const monthName = monthNames[month]

  // const onLogout = () => {
  //   authService.logout();
  // }

  // const history = useHistory();

  // useEffect(() => {
  //   authService.onAuthChange(user => {
  //     if (!user) {
  //       history.push('/')
  //     }
  //   })
  // })

  return (
  <section className={styles.container}> 
    <section className={styles.date}>
      <p className={styles.year}> {year}</p>
      <p className={styles.day}>{day}</p>
      <p className={styles.month}>{monthName}</p>
    </section>
    <div>
      <h1>Better than yesterday</h1>
    </div>
  </section>  
  )
}

export default Header
