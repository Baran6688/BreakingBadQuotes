import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import About from "./components/pages/About";
import Generate from "./components/pages/Generator";
import Home from "./components/pages/home";
import Favourites from "./components/pages/favourites";
import Login from "./components/pages/Login";
import { SignUP } from "./components/pages/SignUp";
import { UseAuthContext } from "./components/utils/UseAuthContex";






function App() {
  const { user } = UseAuthContext()


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/generator" element={<Generate />} />
        <Route path="/generator" element={<Generate />} />
        <Route path="/favourites" element={user ? < Favourites /> : <Login Message="You Should First Login to have Favourites" />} />
        <Route path="/SignUP" element={!user ? <SignUP /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;
