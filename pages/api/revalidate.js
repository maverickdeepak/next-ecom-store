// this code is for on-demand revalidate - means when any data changed at server end it will raise a request to backend and provide the latest/updated data

async function handleRevalidate(req, res) {
  //   console.log("/api/revalidate recieved", req.body);
  const event = req.body;

  if (event.model === "product") {
    const id = event.entry.id;
    await Promise.all([res.revalidate("/"), res.revalidate(`/products/${id}`)]);
    console.log(`revelidated products ${id}`);
  }
  res.status(204).end();
}

export default handleRevalidate;
