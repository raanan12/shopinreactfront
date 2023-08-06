import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import ListProduct from './component/ListProduct';
import Cart from './component/Cart';

function App() {
  // State variables
  const [pages, setPages] = useState(1); // Variable for page navigation
  const [arrProduct, setArrProduct] = useState([
    { nameProduct: 'laptop', price: 2000 },
    { nameProduct: 'table', price: 2200 }
  ]); // Variable for the list of products
  const [selectedProduct, setSelectedProduct] = useState([]); // Variable for selected products
  const [totalPrice, setTotalPrice] = useState(0); // Variable for the total selected price
  const [numProduct, setNumProduct] = useState(0); // Variable for the total number of products

  // Function to select a product
  const selectProduct = (product) => {
    setSelectedProduct([...selectedProduct, product]);
  }

  // Function to delete a product from the selected list
  const deleteProduct = (index) => {
    const newSelectedProduct = selectedProduct.filter((_, i) => i !== index);
    setSelectedProduct(newSelectedProduct);
  }

  // Function to clear the selection and go back to page 1
  const clearSelection = () => {
    setSelectedProduct([]);
    setPages(1);
  }

  // Function to add the number of products
  const addProductNum = () => {
    setNumProduct(numProduct + 1);
  }

  // Function to render the selected page
  const renderPage = () => {
    if (pages === 1) {
      return (
        <ListProduct
          arr={arrProduct}
          select={selectProduct}
          addP={addProductNum}
        />
      );
    } else if (pages === 2) {
      return (
        <Cart
          selectPro={selectedProduct}
          priceT={totalPrice}
          uPrice={setTotalPrice}
          bye={clearSelection}
          deletPr={deleteProduct}
          addP={setTotalPrice}
        />
      );
    }
  }

  return (
    <div className="App">
      <Header numP={selectedProduct} pag={setPages} selP={selectedProduct} />

      {renderPage()}
    </div>
  );
}

export default App;
