/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };
  return (
    <div className="card ">
      <Link href={`/product/${product.slug}`}>
        <img
          className="rounded shadow h-72"
          src={product.images}
          alt={product.name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
