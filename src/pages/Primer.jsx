import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/Primer/primer1.webp";
import i2 from "../assets/Primer/primer2.webp";
import i3 from "../assets/Primer/primer3.webp";
import i4 from "../assets/Primer/primer4.webp";
import i5 from "../assets/Primer/primer5.webp";

function Primer() {
  const description = () => {
    return (
      <>
        <p>
          <b>Great for:</b> oily, dry and combination skin <br />
          <br />
          Gel face primer for long-lasting makeup What it is: A gel-based,
          <br />
          hydrating face primer that smooths skin while gripping your makeup.
        </p>
      </>
    );
  };
  const direction = () => {
    return (
      <>
        <p>
          For best results with the Gossip and Giggles Poreless Hydrating
          Primer, apply a small amount onto clean, moisturized skin. Gently
          blend over your face, focusing on areas prone to makeup fading or
          visible pores. Let it absorb before applying makeup for a smooth,
          long-lasting finish. Ideal for all skin tones, this primer ensures
          your makeup stays fresh and dewy throughout the day, suitable for
          oily, dry, and combination skin types.
        </p>
      </>
    );
  };
  const list = [
    "Gel primer formula grips makeup ",
    "Gives skin a long-lasting, naturally dewy finish",
    "Translucent finish gel primer works on all skin tones",
    "Non-comedogenic",
  ];

  return (
    <>
      <CatalogLayout
        title="Poreless Hydrating Primer"
        description={description()}
        netwt="75 ML"
        price={15}
        features={list}
        direction={direction()}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Primer;
