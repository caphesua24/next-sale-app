/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
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
