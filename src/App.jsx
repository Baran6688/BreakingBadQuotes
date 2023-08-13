import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import About from "./components/pages/About";
import Generate from "./components/pages/Generator";
import Home from "./components/pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/generator" element={<Generate />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
