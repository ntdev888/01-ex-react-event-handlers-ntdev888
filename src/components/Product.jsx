const Product = ({ image, name, description }) => {
  return (
    <li className="product-grid-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Buy now</button>
    </li>
  );
};

export default Product;
