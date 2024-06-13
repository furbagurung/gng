// import MobileHeader from "./pages/MobileHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Catalog from "./pages/Catalog";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

import Tnc from "./pages/Tnc";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="tnc" element={<Tnc />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header /> */}
      {/* <Home />
      <Footer
       /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
