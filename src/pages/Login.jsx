import { useEffect, useState } from 'react'
import useAuthentication from '../hooks/UseAuthentication'
import '../pages/styles/login.css'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import bmologin from "/public/bmologin.gif"
import { Link } from 'react-router-dom'


const Login = () => {
  const { loginUser } = useAuthentication();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const data = { email, password };
    try {
      const response = await loginUser(data);

    
      if (response.status === 200) {
        setSuccessMessage('User logged in, you can now make purchases');
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.error === 401);
        setErrorMessage('Invalid email or password. Please try again.')
        setSuccessMessage('');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid email or password. Please try again.');
        setSuccessMessage('');
      } else if (error.response && error.response.status === 404) {
        setErrorMessage('You need to register first.');
        setSuccessMessage('');
      } else {
        setErrorMessage('');
        setSuccessMessage('');
      }
    }
  
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        setModalVisible(false);
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
    }
  }, [modalVisible]);

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
          {successMessage && <p className="debug-message">Success: {successMessage}</p>}
{errorMessage && <p className="debug-message">Error: {errorMessage}</p>}
            <img className='bmo' src={bmologin} alt="" />
            <Link to='/'>
              <button className='close-button' onClick={() => setModalVisible(false)}>Close</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login;
