// this code is only for demo purpose not used in production

import { getProducts } from "../../lib/products";

async function handler(req, res) {
  const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
