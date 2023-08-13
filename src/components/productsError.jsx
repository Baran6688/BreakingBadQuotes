import { Link, useRouteError } from "react-router-dom";

export default function ProductsError() {
  const error = useRouteError;
  console.log(error.call());

  return (
    <div className="products-error">
      <h2>Error PAGE!!</h2>
      <p>{error.call().toString()}</p>

      <Link to="/products">Back to HomePage</Link>
    </div>
  );
}
