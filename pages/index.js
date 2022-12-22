import { getProducts } from "../lib/products";

import ProductCard from "../components/ProductCard";
import Page from "../components/Page";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}

export default function HomePage({ products }) {
  return (
    <Page>
      <main className="p-4">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 place-items-center">
          {products.map((product) => {
            return (
              <div key={product.id} className="py-4">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </main>
    </Page>
  );
}
