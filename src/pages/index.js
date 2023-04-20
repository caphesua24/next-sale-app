import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import data from '../../utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div
        // style={{
        //   display: 'grid',
        //   gridColumnGap: '10px',
        //   gridTemplateColumns: 'auto auto auto auto',
        //   gridRowGap: '25px',
        //   gap: '1rem',
        // }}
        className="all-cart md:grid-cols-3 lg:grid-cols-4"
      >
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
