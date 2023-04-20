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

      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <header>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '4rem',
              alignItems: 'center',
              backgroundColor: 'white',
              color: 'black',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontWeight: 'bold',
              }}
            >
              DOLPHIN
            </Link>
            <div className="">
              <Link href="/cart" style={{ padding: '1rem' }}>
                Cart
              </Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main
          style={{
            width: '100%',
            margin: 'auto',
            marginTop: '2rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          {children}
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}
