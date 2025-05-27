import React from 'react'
import styles from "../Css/SignUp.module.css"

const SignUp = () => {
  return (
    <div className={styles.containerSignup}>
      <div className={styles.login_form}>
        <div>
        <h1>Login Account</h1>
      </div>
      <form>
        <input type="text" name="usename" placeholder='User Name or E-mail' />
        <input type="password" name="usename" placeholder='Password' />
      </form>
      <div>Forget password ?</div>
      <div>
        <button>Log in</button>
      </div>
        </div>
      <div>
        <div>
          <h1>Already have an account ?</h1>
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
