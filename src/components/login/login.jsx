import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styles from './login.module.css'

const Login = ({ authService }) => {

  const history = useHistory();

  const goToNote = (userId) => {
    history.push({
      pathname: '/note',
      state: { id: userId}
    })
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goToNote(data.user.uid));
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToNote(user.uid);
    })
  })


  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.text} >Note Login</h1>
        <ul className={styles.ulbox}>
          <li className={styles.libox} >
            <button className={styles.google} onClick={onLogin}>Google</button>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Login
