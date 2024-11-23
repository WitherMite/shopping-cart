import PropTypes from "prop-types";

const USDFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

ItemCard.propTypes = {
  handleClick: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default function ItemCard({
  image,
  title,
  description,
  price,
  handleClick,
}) {
  return (
    <button onClick={() => handleClick(1)}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{USDFormatter.format(price)}</p>
    </button>
  );
}
