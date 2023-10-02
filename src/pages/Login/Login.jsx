import React from 'react'
import Art from '../../assets/learn1.jpg'
import './login.scss'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login_container'>
        <h1>Login</h1>
        <div className="login_area">
          <div className="login_left">
            <form onSubmit={()=>{alert('submission triggered')}}>
              <input placeholder='Email' type='email'/>
              <input placeholder='Password' type='password'/>
              <p>Not yet a memeber? register <Link to = '/register'>here</Link></p>
              <button>Submit</button>
            </form>
          </div>
          <div className="login_right">
            <img src={Art} alt='login'/>
            <div className="words">
              <h3>Welcome To Our Community</h3>
              <p>Login to connect, enagage and learn</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login