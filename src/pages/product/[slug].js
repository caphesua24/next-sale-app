import { useRouter } from 'next/router';
import data from '../../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext } from 'react';
import Layout from '../../../components/Layout';

import { Store } from '../../../utils/Store';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { router } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="back">
        <Link href="/">Back to products</Link>
      </div>
      <div className=" detail-1 md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.images}
            alt={product.name}
            width={640}
            height={640}
            layout="reponsive"
          ></Image>
        </div>
        <div className="detail-2">
          <ul>
            <li>
              <h1 className="text-lg text-center">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReview} reviews
            </li>
            {/* <li>Description: {product.description}</li> */}
          </ul>
        </div>
      </div>
      <div className="card detail-3 p-5">
        <p>Description: {product.description}</p>
      </div>
      <div className="card p-5">
        <div className="mb-2 flex justify-between">
          <div className="font-bold">Price</div>
          <div>${product.price}</div>
        </div>
        <div className="mb-2 flex justify-between">
          <div className="font-bold">Status</div>
          <div>{product.countInStock > 0 ? 'In Stock' : 'Unvailable'}</div>
        </div>
        <button className="primary-button w-full" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </Layout>
  );
}
