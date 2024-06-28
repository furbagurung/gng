import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/faceprimer/faceprimer.webp";
import i2 from "../assets/faceprimer/faceprimer2.webp";
import i3 from "../assets/faceprimer/faceprimer3.webp";
import i4 from "../assets/faceprimer/faceprimer4.webp";
import i5 from "../assets/faceprimer/faceprimer5.webp";

function Faceprimer() {
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
        title="Face Primer"
        description={description()}
        price={15}
        features={list}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Faceprimer;
