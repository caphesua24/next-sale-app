import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Layout title="Login">
      <form className="form-login" onSubmit={handleSubmit(submitHandler)}>
        <h1>Login</h1>
        <div className="form-login_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zAS_Z0-9-.]+$/i,
                message: 'Please enter vaild email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        <div className="form-login_password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 chars' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>
        <div className="form-login_button">
          <button className="primary-button">Login</button>
        </div>
        <div className="form-login_register">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
