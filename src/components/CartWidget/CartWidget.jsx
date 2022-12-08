import "./cartWidget.css";

const CartWidget = ({ src }, { alt }) => {
  return (
    <div className="cartContainer">
      <img className="cartIcon" src={src} alt={alt}></img>
      <div className="pCartContainer">
        <p className="pCart">3</p>
      </div>
    </div>
  );
};

export default CartWidget;
