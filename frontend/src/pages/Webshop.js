import WebshopItem from "../components/WebshopItem";

const Webshop = ({ handleItems, webshopItemz }) => {
  return (
    <div className="webshop-wrapper">
      <h1>Kitten Webshop</h1>
      <div className="webshop-items-wrapper">
        {webshopItemz.map((item) => (
          <WebshopItem handleItems={handleItems} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Webshop;
