// import MobileHeader from "./pages/MobileHeader";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./pages/Header.jsx";

import Gallery from "./pages/Gallery.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Privacy from "./pages/Privacy.jsx";

import Tnc from "@/pages/Tnc.jsx";
import Cushionfoundation from "@/pages/catalog/cushionfoundation.jsx";
import Foundation from "@/pages/catalog/Foundation.jsx";
// import Primer from "@/pages/catalog/Primer.jsx";
import Facepowder from "@/pages/catalog/Facepowder.jsx";
import Blusher from "@/pages/catalog/Blusher.jsx";
import Bronzer from "@/pages/catalog/Bronzer.jsx";
import Colorcorrectingpalette from "@/pages/catalog/Colorcorrectingpalette.jsx";
import Concealer from "@/pages/catalog/Concealer.jsx";
import Contour from "@/pages/catalog/Contour.jsx";
import Eyebrow from "@/pages/catalog/Eyebrow.jsx";
import Eyelash from "@/pages/catalog/Eyelash.jsx";
import Eyepalletes from "@/pages/catalog/Eyepalletes.jsx";
import Eyeliner from "@/pages/catalog/Eyeliner.jsx";
import Faceprimer from "@/pages/catalog/Faceprimer.jsx";
import Gossipevents from "@/pages/catalog/Gossipevents.jsx";
import Gossipmemories from "@/pages/catalog/Gossipmemories.jsx";
import Highlighter from "@/pages/catalog/Highlighter.jsx";
import Lipbalm from "@/pages/catalog/Lipbalm.jsx";
import Lipgloss from "@/pages/catalog/Lipgloss.jsx";
import Lipliner from "@/pages/catalog/Lipliner.jsx";
import Lipoil from "@/pages/catalog/Lipoil.jsx";
import Lipplumper from "@/pages/catalog/Lipplumper.jsx";
import Lipstick from "@/pages/catalog/Lipstick.jsx";
import Mascara from "@/pages/catalog/Mascara.jsx";
import SettingSpray from "@/pages/catalog/Settingspray.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog">
          <Route path="cushionfoundation" element={<Cushionfoundation />} />
          <Route path="foundation" element={<Foundation />} />
          {/* <Route path="primer" element={<Primer />} /> */}
          <Route path="facepowder" element={<Facepowder />} />
          <Route path="faceprimer" element={<Faceprimer />} />
          <Route path="settingspray" element={<SettingSpray />} />
          <Route
            path="colorcorrectingpalette"
            element={<Colorcorrectingpalette />}
          />
          <Route path="contour" element={<Contour />} />
          <Route path="concealer" element={<Concealer />} />
          <Route path="blusher" element={<Blusher />} />
          <Route path="bronzer" element={<Bronzer />} />
          <Route path="highlighter" element={<Highlighter />} />
          <Route path="eyepalletes" element={<Eyepalletes />} />
          <Route path="eyeliner" element={<Eyeliner />} />
          <Route path="eyelash" element={<Eyelash />} />
          <Route path="mascara" element={<Mascara />} />
          <Route path="eyebrow" element={<Eyebrow />} />
          <Route path="lipoil" element={<Lipoil />} />
          <Route path="lipbalm" element={<Lipbalm />} />
          <Route path="lipstick" element={<Lipstick />} />
          <Route path="lipgloss" element={<Lipgloss />} />
          <Route path="lipliner" element={<Lipliner />} />
          <Route path="lipplumper" element={<Lipplumper />} />
          <Route path="gossipevents" element={<Gossipevents />} />
          <Route path="gossipmemories" element={<Gossipmemories />} />
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
