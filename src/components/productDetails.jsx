import { useLoaderData, useParams } from "react-router-dom";

function ProductDetails() {
  const ProductDetail = useLoaderData();

  return (
    <div>
      <h1>here is product {ProductDetail.title}</h1>{" "}
      <p>{ProductDetail.description}</p>
      <h4>Price: {ProductDetail.price}$ </h4>
    </div>
  );
}
export default ProductDetails;

export const ProductDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw Error("Could not found this product!");
  }
  return res.json();
};
