
import useAuthentication from '../hooks/UseAuthentication'
import '../pages/styles/login.css'



const Login = () => {

const { loginUser } = useAuthentication()


const handleLogin = e => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value

const data = {email, password};
loginUser(data)


}


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
  </div>

  )
}

export default Login