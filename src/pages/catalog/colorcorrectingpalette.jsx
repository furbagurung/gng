import CatalogLayout from "../../layouts/CatalogLayout";

import i1 from "../../assets/contour/contour.webp";
import i2 from "../../assets/contour/contour2.webp";
import i3 from "../../assets/contour/contour3.jpg";
import i4 from "../../assets/contour/contour4.webp";
import i5 from "../../assets/contour/contour5.webp";

function Colorcorrectingpalette() {
  const description = () => {
    return (
      <>
        <p>
          Lipstick, a beloved cosmetic product, adds color and moisture to the
          lips, enhancing their natural beauty. Available in a wide range of
          shades and finishes, lipsticks offer endless possibilities for
          creating different looks and styles. They come in creamy, matte,
          satin, and glossy formulas, providing options for various preferences
          and occasions. Lipsticks are known for their pigmentation, smooth
          application, and long-lasting wear. With a single swipe, they can
          transform the lips, adding a touch of glamour and completing any
          makeup look. From bold and vibrant to subtle and natural, lipsticks
          are a staple in every makeup collection, allowing individuals to
          express their personal style and boost their confidence.
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
        title="color correcting palette"
        description={description()}
        price={13}
        features={list}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Colorcorrectingpalette;
