function ProductItem({ id, name, price, imageUrl }) {
  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Precio:</strong> ${price}</p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  width: "200px",
  textAlign: "center",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px"
};

export default ProductItem;
