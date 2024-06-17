import CatalogLayout from "../../layouts/CatalogLayout";
const Contact = () => {
  const description =
    "Lipstick, a beloved cosmetic product, adds color and moisture to the lips, enhancing their natural beauty.  Available in a wide range of shades and finishes, lipsticks offer endless possibilities for creating different looks and styles.  They come in creamy, matte, satin, and glossy formulas, providing options for various preferences and occasions.  Lipsticks are known for their pigmentation, smooth application, and long-lasting wear.  With a single swipe, they can transform the lips, adding a touch of glamour and completing any makeup look.  From bold and vibrant to subtle and natural, lipsticks are a staple in every makeup collection, allowing individuals to express their personal style and boost their confidence.";
  return (
    <>
      <CatalogLayout title="Primer" description={description} />
    </>
  );
};

export default Contact;
