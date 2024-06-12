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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header /> */}
      {/* <Home />
      <Footer /> */}
    </>
  );
}

export default App;
