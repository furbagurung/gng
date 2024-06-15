// import MobileHeader from "./pages/MobileHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Catalog from "./pages/Catalog";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

import Tnc from "./pages/Tnc";
import CushionFoundation from "./pages/catalog/cushionfoundation";
import Foundation from "./pages/catalog/foundation";
import Primer from "./pages/catalog/primer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog">
          <Route path="cushionfoundation" element={<CushionFoundation />} />
          <Route path="foundation" element={<Foundation />} />
          <Route path="primer" element={<Primer />} />
          <Route path="powder" element={<Primer />} />
          <Route path="faceprimer" element={<Primer />} />
          <Route path="settingspray" element={<Primer />} />
          <Route path="primer" element={<Primer />} />
          <Route path="colorcorrectingpalette" element={<Primer />} />
          <Route path="contour" element={<Primer />} />
          <Route path="concealer" element={<Primer />} />
          <Route path="blusher" element={<Primer />} />
          <Route path="bronzer" element={<Primer />} />
          <Route path="highlighter" element={<Primer />} />
          <Route path="eyepalettes" element={<Primer />} />
          <Route path="eyeliner" element={<Primer />} />
          <Route path="mascara" element={<Primer />} />
          <Route path="eyebrow" element={<Primer />} />
          <Route path="lipoil" element={<Primer />} />
          <Route path="lipsticks" element={<Primer />} />
          <Route path="lipgloss" element={<Primer />} />
          <Route path="lipliner" element={<Primer />} />
          <Route path="lipplumper" element={<Primer />} />
          <Route path="gossipevents" element={<Primer />} />
          <Route path="gossipmemories" element={<Primer />} />
        </Route>
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
