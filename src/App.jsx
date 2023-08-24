import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import About from "./components/pages/About";
import Generate from "./components/pages/Generator";
import Home from "./components/pages/Home";
import Favourites from "./components/pages/favourites";
import Login from "./components/pages/Login";
import { SignUP } from "./components/pages/SignUp";
import { UseAuthContext } from "./components/utils/UseAuthContex";
import Posts from "./components/pages/posts";







function App() {
  const { user } = UseAuthContext()


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/generator" element={<Generate />} />
        <Route path="/favourites" element={user ? < Favourites /> : <Login Message="You Should First Login to have Favourites" />} />
        <Route path="/SignUP" element={!user ? <SignUP /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;
