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
// import {
//   Cushionfoundation,
//   Foundation,
//   // Primer, // commented out since it's not being used
//   Facepowder,
//   Blusher,
//   Bronzer,
//   Colorcorrectingpalette,
//   Concealer,
//   Contour,
//   Eyebrow,
//   Eyelash,
//   Eyepalletes,
//   Eyeliner,
//   Faceprimer,
//   Gossipevents,
//   Mascara,
//   Gossipmemories,
//   Highlighter,
//   SettingSpray,
//   Lipoil,
//   Lipstick,
//   Lipgloss,
//   Lipliner,
//   Lipbalm,
//   Lipplumper,
// } from "@/pages/catalog";
import Cushionfoundation from "./pages/Cushionfoundation.jsx";
import Foundation from "./pages/Foundation.jsx";
import Primer from "@/pages/Primer.jsx";
import Facepowder from "@/pages/Facepowder.jsx";
import Blusher from "@/pages/Blusher.jsx";
import Bronzer from "@/pages/Bronzer.jsx";
import Colorcorrectingpalette from "@/pages/Colorcorrectingpalette.jsx";
import Concealer from "@/pages/Concealer.jsx";
import Contour from "@/pages/Contour.jsx";
import Eyebrow from "@/pages/Eyebrow.jsx";
import Eyelash from "@/pages/Eyelash.jsx";
import Eyepalletes from "@/pages/Eyepalletes.jsx";
import Eyeliner from "@/pages/Eyeliner.jsx";
import Faceprimer from "@/pages/Faceprimer.jsx";
import Gossipevents from "@/pages/Gossipevents.jsx";
import Gossipmemories from "@/pages/Gossipmemories.jsx";
import Highlighter from "@/pages/Highlighter.jsx";
import Lipbalm from "@/pages/Lipbalm.jsx";
import Lipgloss from "@/pages/Lipgloss.jsx";
import Lipliner from "@/pages/Lipliner.jsx";
import Lipoil from "@/pages/Lipoil.jsx";
import Lipplumper from "@/pages/Lipplumper.jsx";
import Lipstick from "@/pages/Lipstick.jsx";
import Mascara from "@/pages/Mascara.jsx";
import SettingSpray from "@/pages/Settingspray.jsx";
import Thankyou from "./pages/thankyou.jsx";
// import RouteLayout from "./layouts/RouteLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />

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
        <Route path="lipsticks" element={<Lipstick />} />
        <Route path="lipgloss" element={<Lipgloss />} />
        <Route path="lipliner" element={<Lipliner />} />
        <Route path="lipplumper" element={<Lipplumper />} />
        <Route path="gossipevents" element={<Gossipevents />} />
        <Route path="gossipmemories" element={<Gossipmemories />} />
        <Route path="thankyou" element={<Thankyou />} />

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
