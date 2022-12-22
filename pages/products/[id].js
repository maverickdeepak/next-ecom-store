import Image from "next/image";
import { getProducts, getProduct } from "../../lib/products";
import Page from "../../components/Page";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),

    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (error) {
    return { notFound: true };
  }
}

function SingleProductPage({ product }) {
  return (
    <Page title={product.title}>
      <main className="px-6 py-4">
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={640}
              height={480}
            />
          </div>
          <div className="flex-1 lg:ml-4">
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        </div>
      </main>
    </Page>
  );
}

export default SingleProductPage;
