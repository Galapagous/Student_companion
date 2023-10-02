import React from 'react'
import Art from '../../assets/comute.jpg'
import './register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register_container'>
        <h1>Register</h1>
        <div className="register_area">
          <div className="register_left">
            <form onSubmit={()=>{alert('submission triggered')}}>
              <input placeholder='Username' type='text'/>
              <input placeholder='Email' type='email'/>
              <input placeholder='Password' type='password'/>
              <input placeholder='Occupation' type='text'/>
              <p>Already a member? login <Link to = '/login'>here</Link></p>
              <button>Submit</button>
            </form>
          </div>
          <div className="register_right">
            <img src={Art} alt='register'/>
            <div className="words">
              <h3>Join Our Community of Knowledge Seekers and Critical Thinkers</h3>
              <p>Unlock a world of enlightening discussions, superior arguments, and a lifelong pursuit of reason</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register