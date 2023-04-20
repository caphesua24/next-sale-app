/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + ' - Sales App' : 'Sales App'}</title>
        <meta name="description" content="Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className=" flex h-12 items-center justify-between shadow-md">
            <Link className="text-lg font-bold" href="/">
              DOLPHIN
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                CART
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login" className="p-2">
                LOGIN
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 ">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          CÔNG TY CỔ PHẦN TẬP ĐOÀN AURA
        </footer>
      </div>
    </>
  );
}
