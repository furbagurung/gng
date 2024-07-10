import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/cushion/cushion1.webp";
import i2 from "../assets/cushion/cushion2.webp";
import i3 from "../assets/cushion/cushion3.webp";
import i4 from "../assets/cushion/cushion4.webp";
import i5 from "../assets/cushion/cushion5.webp";

function Cushionfoundation() {
  const description = () => {
    return (
      <>
        <p>
          Gossip and Giggles skin perfecting 24hr long-wear high perfection BB
          cushion with buildable matte finish in just one stamp application.
        </p>

        <p>
          Flawless buildable coverage: Get 24hrs non-stop, luminous matte finish
          for a smooth and healthier looking skin.
        </p>

        <p>
          Long wear obsession: It’s lightweight texture blends into the skin
          providing a fresh’ radiant and moisturizing sensation.
        </p>

        <p>
          Skin perfection: It’s unique formulation helps cover skin blemishes
          giving 24hrs matte blurring effect for effortless touch up on the go.
          Non-comedogenic.
        </p>
      </>
    );
  };
  const direction = () => {
    return (
      <>
        <p>
          Dab the puff onto the cushion and pat it on your skin evenly. Repeat
          until you get the desired coverage.
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
        title="Cushion Foundation"
        description={description()}
        price={15}
        features={list}
        img={[i1, i2, i3, i4, i5]}
        shades={1}
        netwt="0.42 OZ  e 12gm"
        shade1="No 12 : Natural "
        shade2="No 15 : Warm Beige"
        shade3="No 20 : Wheat"
        direction={direction()}
      />
    </>
  );
}

export default Cushionfoundation;
