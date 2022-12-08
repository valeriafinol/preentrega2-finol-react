import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to The Clothing Store" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer  />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
