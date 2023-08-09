
import { useEffect, useState } from 'react'
import useAuthentication from '../hooks/UseAuthentication'
import '../pages/styles/login.css'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import bmologin from "/public/bmologin.gif"
import { Link } from 'react-router-dom'




const Login = () => {

const { loginUser } = useAuthentication()
const [successMessage, setSuccessMessage] = useState('')
const [modalVisible, setModalVisible] = useState(false)


const handleLogin = e => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value

const data = {email, password};
try{ 
loginUser(data)
setSuccessMessage('User logged in, you can now make purchases')
setModalVisible(true)
reset(defaultRegisterValues);
} catch(error){

}
};

useEffect(() => {
if(modalVisible){
  setTimeout(() => {
    setModalVisible(false)
    setSuccessMessage('')
  }, 50000);
}
}, [modalVisible])



  return (

  <div className='user_login'>
        <form className='form_user' onSubmit={handleLogin}>
      <div className='input_class'>
      <i className='bx bxs-user'></i>
      <h2 className='tittle'>Login</h2>
      <label className='label_one' htmlFor="email">Email</label>
      <input className='label_two' type="email" id='email' />
      <label htmlFor="password">Password</label>
      <input type="password" id='password' />
      <button className='btn_1 btn_register'>Login In</button>
      </div>
    </form>
          {modalVisible && (
        <div className={`modalrr ${modalVisible ? 'visible' : ''}`}>
          <div className='modal_content'>
            <p>{successMessage}</p>
            <img className='bmo' src={bmologin} alt="" />
            <Link to='/' >
            <button className='close-button' onClick={() => setModalVisible(false)}>Close</button>
            </Link>
            
          </div>
        </div>

      )}
  </div>

  )
}

export default Login