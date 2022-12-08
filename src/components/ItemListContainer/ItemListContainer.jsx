import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import products from "./products";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    if (categoryId) {
      getData.then((res) =>
        setData(res.filter((product) => product.category === categoryId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoryId]);

  return (
    <>
      <div className="greetingContainer">
        <div>
          <p className="pGreeting">{greeting}</p>
        </div>
        <div className="greetingContainer">
          <ItemList data={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
