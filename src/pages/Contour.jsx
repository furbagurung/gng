import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/contour/contour.webp";
import i2 from "../assets/contour/contour2.webp";
import i3 from "../assets/contour/contour3.jpg";
import i4 from "../assets/contour/contour4.webp";
import i5 from "../assets/contour/contour5.webp";

function Contour() {
  const description = () => {
    return (
      <>
        <p>
          A weightless, long-lasting liquid blush that blends and builds
          beautifully for a soft, healthy flush. Available in both matte and
          dewy finishes.
        </p>
      </>
    );
  };

  const list = [
    "Highly Pigmented",
    "Blends effortlessly",
    "Gives cheeks a healthy glow that&apos;s so soft and radiant",
    "It's refreshing sheer hue brightens your complexion and gives cheeks a natural, delicate gleam",
  ];

  return (
    <>
      <CatalogLayout
        title="Contour"
        description={description()}
        price={15}
        features={list}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Contour;
