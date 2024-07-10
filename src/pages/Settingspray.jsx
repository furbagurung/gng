import CatalogLayout from "../layouts/CatalogLayout";

import i1 from "../assets/settingspray/settingspray3.jpg";
import i2 from "../assets/settingspray/settingspray2.jpg";
import i3 from "../assets/settingspray/settingspray2.jpg";
import i4 from "../assets/settingspray/settingspray4.jpg";
import i5 from "../assets/settingspray/settingspray5.jpg";

function Settingspray() {
  const description = () => {
    return (
      <>
        <p>
          Hydrating fixer setting spray; get hydrated and dewy skin while fixing
          your makeup all day.
        </p>

        <p>
          Long-lasting and lightweight formulation that quickly melts into your
          skin.
        </p>

        <p>
          Receive 16hrs of wear, our setting spray delivers waterproof,
          sweatproof results you can count on to lock in your look.
        </p>

        <p>
          Quick drying and easy fixing. Refreshes your skin while providing glow
          to your skin.
        </p>
      </>
    );
  };
  const direction = () => {
    return (
      <>
        <p>
          Shake it up and down, let it sit for 3 seconds before use. <br />
          Hold bottle 12 inches away from face and close eyes. Spray it in “ X”
          and “T” directions repeatedly (about 3 to 5 times) until your face is
          fully wet.
        </p>
      </>
    );
  };
  const list = [
    "Hydrating Dewy Finish: Keeps skin hydrated with a dewy look.",
    "Long-lasting: Provides 16 hours of wear.",
    "Waterproof: Provides waterproof, sweatproof results you can count on to",
    "Quick Drying: Sets makeup fast for easy application.",
    "Refreshing Glow: Refreshes and enhances skin's natural glow.",
  ];

  return (
    <>
      <CatalogLayout
        title="Set It Now Setting Spray"
        description={description()}
        netwt="100 ML / 3.38 fl.oz"
        price={13}
        features={list}
        img={[i1, i2, i3, i4, i5]}
        direction={direction()}
        shades={false}
      />
    </>
  );
}

export default Settingspray;
