import CatalogLayout from "../../layouts/CatalogLayout";

function blusher() {
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

  const features = () => {
    return (
      <>
        <li> Highly Pigmented</li>
        <li> Blends effortlessly</li>
        <li> Gives cheeks a healthy glow that&apos;s so soft and radiant</li>
        <li>
          It&apos;s refreshing sheer hue brightens your complexion and gives
          cheeks a natural, delicate gleam
        </li>
      </>
    );
  };
  return (
    <>
      <CatalogLayout
        title="Blusher"
        description={description()}
        price={15}
        features={features()}
      />
    </>
  );
}

export default blusher;
