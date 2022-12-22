import { fetchJson } from "./api";

const CMS_URL = process.env.CMS_URL;

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(productFields);
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return productFields(product);
}

function productFields(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: CMS_URL + product.picture.url,
  };
}
