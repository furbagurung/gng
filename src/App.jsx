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
import CushionFoundation from "./pages/catalog/cushionfoundation";
import Foundation from "./pages/catalog/foundation";
import Primer from "./pages/catalog/primer";
import Powder from "./pages/catalog/powder";
import Blusher from "./pages/catalog/blusher";
import Bronzer from "./pages/catalog/bronzer";
import Colorcorrectingpalette from "./pages/catalog/colorcorrectingpalette";
import Concealer from "./pages/catalog/concealer";
import Contour from "./pages/catalog/contour";
import Eyebrow from "./pages/catalog/eyebrow";
import Eyelash from "./pages/catalog/eyelash";
import Eyepalletes from "./pages/catalog/eyepalletes";
import Eyeliner from "./pages/catalog/eyeliner";
import Faceprimer from "./pages/catalog/faceprimer";
import Gossipevents from "./pages/catalog/gossipevents";
import Gossipmemories from "./pages/catalog/gossipmemories";
import Highlighter from "./pages/catalog/highlighter";
import Lipbalm from "./pages/catalog/lipbalm";
import Lipgloss from "./pages/catalog/lipgloss";
import Lipliner from "./pages/catalog/lipliner";
import Lipoil from "./pages/catalog/lipoil";
import Lipplumper from "./pages/catalog/lipplumper";
import Lipstick from "./pages/catalog/lipstick";
import Mascara from "./pages/catalog/mascara";

import SettingSpray from "./pages/catalog/settingspray";

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
          <Route path="powder" element={<Powder />} />
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
