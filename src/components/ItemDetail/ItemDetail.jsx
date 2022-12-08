import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ data }) => {
  const onAdd = (quantity) => {
    console.log(`You have ${quantity} units in your cart`);
  };

  return (
    <>
      <h1 className="h1Detail">Detail</h1>
      <div className="itemDetailContainer">
        <div className="cardItemDetail">
          <img src={data.image} alt={data.title} className="imageDetail" />
          <div>
            <div>
              <h5 className="centerText bolderText textItemDetail">
                {data.title}
              </h5>
              <p className="centerText textItemDetail">{data.description}</p>
              <p className="centerText textItemDetail">${data.price}</p>
              <div>
                <ItemCount stock={10} initial={0} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
