import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import AddItem from './components/AddItem';
import React, { useState } from 'react';

function App() {
  const products = [
    {
      price: 9999,
      name: 'Iphone 12 pro max',
      quantity: 0,
    },
    {
      price: 999,
      name: 'Iphone xs max',
      quantity: 0,
    },
  ];

  let [productList, setproductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++;
    newTotalAmount += newproductList[index].price;
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);
  };
  const decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--;
      newTotalAmount -= newproductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);
  };

  const resetQuantity = () => {
    let newproductList = [...productList];
    newproductList.map((products) => {
      products.quantity = 0;
    });
    setproductList(newproductList);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newproductList[index].quantity * newproductList[index].price;
    newproductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);
  };

  const addItem = (name, price) => {
    let newproductList = [...productList];
    newproductList.push({ price: price, name: name, quantity: 0 });
    setproductList(newproductList);
  };
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
