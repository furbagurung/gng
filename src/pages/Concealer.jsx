import CatalogLayout from "../layouts/CatalogLayout";
// import img from "../../assets/blusher";
import i1 from "../assets/concealer/concealer1.webp";
import i2 from "../assets/concealer/concealer2.webp";
import i3 from "../assets/concealer/concealer3.webp";
import i4 from "../assets/concealer/concealer4.webp";
import i5 from "../assets/concealer/concealer5.webp";

function Concealer() {
  const description = () => {
    return (
      <>
        <p>
          A multipurpose concealer that brightens, corrects, and perfects for up
          to 16 hours with a creamy medium-to-buildable coverage.
        </p>
        <p>
          Gossip & Giggles High Coverage Liquid Concealer: A versatile formula
          that brightens and corrects with a natural matte finish. Easy to
          apply, blend, and long-lasting for up to 16 hours of flawless wear.
          Vegan and cruelty-free.
        </p>
      </>
    );
  };
  const direction = () => {
    return (
      <>
        <p>
          Apply Gossip & Giggles High Coverage Liquid Concealer directly onto
          areas needing coverage or brightness using the applicator wand. Blend
          gently with fingertips, a sponge, or a brush until seamlessly blended
          into skin. For best results, set with powder. Enjoy up to 16 hours of
          flawless wear with a natural matte finish.
        </p>
      </>
    );
  };

  const list = [
    "Full-coverage formula with natural matte finish",
    "Smooths & brightens for an instant eye lift",
    "Crease-proof formula won’t cake or settle with 16 hrs of flawless weart",
    "Applies easily and blends easily",
    "Vegan & cruelty-free",
  ];

  return (
    <>
      <CatalogLayout
        title="High Coverage Liquid Concealer"
        description={description()}
        direction={direction()}
        netwt="6 gm"
        price={15}
        features={list}
        img={[i1, i2, i3, i4, i5]}
      />
    </>
  );
}

export default Concealer;
