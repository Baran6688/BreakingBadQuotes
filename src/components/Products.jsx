import { Link, useLoaderData, useParams } from "react-router-dom";

function Products() {
  const ProductLoader = useLoaderData();
  const { products } = ProductLoader;
  const id = useParams();

  return (
    <div className="App">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} <Link to={product.id.toString()}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

export const ProductLoader = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw Error("Could not found Fetch!");
  }

  return res.json();
};
