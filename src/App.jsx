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

import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

import Tnc from "./pages/Tnc";
import Cushionfoundation from "@/pages/catalog/cushionfoundation";
import Foundation from "./pages/catalog/Foundation";
import Primer from "./pages/catalog/Primer";
import Facepowder from "./pages/catalog/Facepowder";
import Blusher from "./pages/catalog/Blusher";
import Bronzer from "./pages/catalog/Bronzer";
import Colorcorrectingpalette from "./pages/catalog/Colorcorrectingpalette";
import Concealer from "./pages/catalog/Concealer";
import Contour from "./pages/catalog/Contour";
import Eyebrow from "./pages/catalog/Eyebrow";
import Eyelash from "./pages/catalog/Eyelash";
import Eyepalletes from "./pages/catalog/Eyepalletes";
import Eyeliner from "./pages/catalog/Eyeliner";
import Faceprimer from "./pages/catalog/Faceprimer";
import Gossipevents from "./pages/catalog/Gossipevents";
import Gossipmemories from "./pages/catalog/Gossipmemories";
import Highlighter from "./pages/catalog/Highlighter";
import Lipbalm from "./pages/catalog/Lipbalm";
import Lipgloss from "./pages/catalog/Lipgloss";
import Lipliner from "./pages/catalog/Lipliner";
import Lipoil from "./pages/catalog/Lipoil";
import Lipplumper from "./pages/catalog/Lipplumper";
import Lipstick from "./pages/catalog/Lipstick";
import Mascara from "./pages/catalog/Mascara";

import SettingSpray from "./pages/catalog/Settingspray";

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
          <Route path="primer" element={<Primer />} />
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
