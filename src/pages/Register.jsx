import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/UseAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import "../pages/styles/register.css"

const Register = () => {

  const {register, handleSubmit, reset} = useForm()

const { createNewUser } = useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
  }

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
    </article>

  )
}

export default Register