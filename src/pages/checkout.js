import React from 'react';
import Layout from '../../components/Layout';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function CheckOutScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email }) => {
    console.log(email);
  };
  return (
    <Layout title="Checkout">
      <form
        action="/"
        method="POST"
        className="form-customer-information"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1>Form fill in customer information</h1>
        <div className="form-customer-information_name">
          <label htmlFor="name">Full Name</label>
          <input
            className="w-full"
            type="text"
            autoFocus
            {...register('name', {
              required: 'Please enter full name !',
              pattern: 'Please enter vaild name',
            })}
          ></input>
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        <div className="form-customer-information_phone">
          <label htmlFor="number">Phone Number</label>
          <input
            className="w-full"
            autoFocus
            {...register('number', {
              required: 'Please enter phone number !',
              pattern: 'Please enter vaild phone number',
            })}
          ></input>
          {errors.number && (
            <div className="error">{errors.number.message}</div>
          )}
        </div>
        <div className="form-customer-information_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter email !',
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
        <div className="form-customer-information_address">
          <label htmlFor="address">Delivery address</label>
          <input
            className="w-full"
            type="text"
            autoFocus
            {...register('address', {
              required: 'Please enter address !',
              pattern: 'Please enter vaild address',
            })}
          ></input>
          {errors.address && (
            <div className="error">{errors.address.message}</div>
          )}
        </div>
        <div className="form-customer-information_button">
          <button
            className="primary-button"
            type="submit"
            value="submit"
            onclick="event.preventDefault();this.closest('form').submit();"
          >
            <a
              href=""
              onclick="event.preventDefault();this.closest('form').submit();"
            >
              Submit
            </a>
          </button>
        </div>
      </form>
    </Layout>
  );
}
