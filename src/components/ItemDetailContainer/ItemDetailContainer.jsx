import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../ItemListContainer/products";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const { itemId } = useParams();

  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    if (itemId) {
      getData.then((res) =>
        setData(res.find((product) => product.id === parseInt(itemId)))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
