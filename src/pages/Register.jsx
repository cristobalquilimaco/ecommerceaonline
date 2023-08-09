import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from '../hooks/UseAuthentication';
import defaultRegisterValues from '../utils/defaultRegisterValues';
import "../pages/styles/register.css";
import bmo from "/public/bmo.gif"
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createNewUser } = useAuthentication();

  const [successMessage, setSuccessMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false)

  const submit = async data => {
    try {
      await createNewUser(data);
      setSuccessMessage('Welcome to our website! You are already registered correctly');
      setModalVisible(true)
      reset(defaultRegisterValues);
    } catch (error) {
    }
  };

  useEffect(() => {
if(modalVisible) {
  setTimeout(() => {
    setModalVisible(false);
    setSuccessMessage('')
  }, 50000);
}

  }, [modalVisible])
  


  return (
    <article className='form_name'>
      <form className='register_form' onSubmit={handleSubmit(submit)}>
        <h2>Create new User</h2>
        <section className='space_text_area'>
          <label className='text_area' htmlFor="firstName">First name</label>
          <input className='enter_text' {...register('firstName')} type="text" id='firstName' />

          <label className='text_area' htmlFor="LastName">last name</label>
          <input className='enter_text' {...register('lastName')} type="text" id='lastName' />

          <label className='text_area' htmlFor="email">Email</label>
          <input className='enter_text' {...register('email')} type="email" id='email' />

          <label className='text_area' htmlFor="password">Password</label>
          <input className='enter_text' {...register('password')} type="password" id='password' />

          <label className='text_area' htmlFor="phone">Phone</label>
          <input className='enter_text' {...register('phone')} type="tel" id='phone' />
        </section>
        <button className='btn_1 btn_register'>Register</button>
      </form>
      {modalVisible && (
        <div className={`modalrr ${modalVisible ? 'visible' : ''}`}>
          <div className='modal_content'>
            <p>{successMessage}</p>
            <img className='bmo' src={bmo} alt="" />
            <Link to='/' >
            <button className='close-button' onClick={() => setModalVisible(false)}>Close</button>
            </Link>
            
          </div>
        </div>

      )}
    </article>
  );
};

export default Register;