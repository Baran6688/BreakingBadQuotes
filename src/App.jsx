import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Help from "./components/help";
import Contacts from "./components/Contact";
import Faq from "./components/faq";
import RootLayout from "./components/layouts/RootLayouts";
import ErrorPage from "./components/ErrorPage";
import Movies, { MoviesLoader } from "./components/movies";
import MovieDetails from "./components/movieDetails";
import Products, { ProductLoader } from "./components/Products";
import ProductDetails, {
  ProductDetailLoader,
} from "./components/productDetails";
import ProductsError from "./components/productsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home name=" Barham" />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="faq" element={<Faq />} />
      </Route>

      <Route path="movies">
        <Route index element={<Movies />} loader={MoviesLoader} />
        <Route path=":id" element={<MovieDetails />} loader={MoviesLoader} />
      </Route>

      <Route path="products" errorElement={<ProductsError />}>
        <Route index element={<Products />} loader={ProductLoader} />
        <Route
          path=":id"
          element={<ProductDetails />}
          loader={ProductDetailLoader}
        />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
