import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/blusher/blusher.webp";
import i2 from "../assets/blusher/blusher2.webp";
import i3 from "../assets/blusher/blusher3.webp";
import i4 from "../assets/blusher/blusher4.webp";
import i5 from "../assets/blusher/blusher5.webp";

function Blusher() {
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
  const direction = () => {
    return (
      <>
        <p>
          For a fresh, glowing complexion with the Gossip and Giggles Liquid
          Blush, start with moisturized skin. Shake well, apply a small amount
          to cheeks, and blend using fingertips or a sponge for a dewy or matte
          finish. Build up as needed for desired color intensity. Let dry
          briefly for a lasting, natural flush that brightens your complexion
          effortlessly.
        </p>
      </>
    );
  };

  const list = [
    "Highly Pigmented",
    "Blends effortlessly",
    "Gives cheeks a healthy glow that's so soft and radiant",
    "It's refreshing sheer hue brightens your complexion and gives cheeks a natural, delicate gleam",
  ];

  return (
    <>
      <CatalogLayout
        title="Liquid Blush"
        description={description()}
        direction={direction()}
        price={15}
        netwt="15ml/0.5 Oz.e"
        features={list}
        img={[i1, i2, i3, i4, i5]}
        shades={1}
        shade1="Pink Peony"
        shade2="Peachy Pink"
        shade3="Sweet Rose"
        shade4="Coral Rose"
        shade5="Berry"
        shade6="Soft Nude"
      />
    </>
  );
}

export default Blusher;
