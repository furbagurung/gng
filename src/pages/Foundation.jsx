import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/foundation/foundation1.webp";
import i2 from "../assets/foundation/foundation2.webp";
import i3 from "../assets/foundation/foundation3.webp";
import i4 from "../assets/foundation/foundation4.webp";
import i5 from "../assets/foundation/foundation5.webp";

function Foundation() {
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
        title="Foundation"
        description={description()}
        price={15}
        features={list}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Foundation;
