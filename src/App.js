
import React, { useReducer, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import './App.css';
import pic1 from "./assests/pic1.jpeg";
import pic2 from "./assests/pic2.jpeg";
import pic3 from "./assests/pic3.jpeg";
import pic4 from "./assests/pic4.jpeg";
import pic5 from "./assests/pic5.jpeg";
import pic6 from "./assests/pic6.jpeg";
import pic7 from "./assests/pic7.jpeg";
import pic8 from "./assests/pic8.jpeg";
import pic9 from "./assests/pic9.jpeg";
import pic10 from "./assests/pic10.jpeg";
import pic11 from "./assests/pic11.jpeg";
import pic12 from "./assests/pic12.jpeg";
const initialState = {
  cartItems: []
};
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};
const App = () => {
  const products = [
    {
      id: 1,
      name: "Black Maxi",
      price: 29.99,
      image: pic1,
    },
    {
      id: 2,
      name: "Printed Dress",
      price: 49.99,
      image: pic2, 
    },
    {
      id: 3,
      name: "Halter Top",
      price: 19.99,
      image: pic3,
    },
    {
      id: 4,
      name: "Shrug",
      price: 12.99,
      image: pic4,
    },
    {
      id: 5,
      name: "Jumpsuit",
      price: 14.99,
      image: pic5,
    },
    {
      id: 6,
      name: "Kurthi Set",
      price: 20.99,
      image: pic6,
    },
    
    {
      id: 7,
      name: "Mustard",
      price: 12.99,
      image: pic7,
    },
    {
      id: 8,
      name: "Floral Set",
      price: 19.99,
      image: pic8,
    },
    {
      id: 9,
      name: "Sarara Set",
      price: 15.99,
      image: pic9,
    },
    {
      id: 10,
      name: "Peach Dress",
      price: 11.99,
      image: pic10,
    },
    {
      id: 11,
      name: "Anarkali",
      price: 19.99,
      image: pic11,
    },
    {
      id: 12,
      name: "Blue Dress",
      price: 18.99,
      image: pic12,
    },
  ];
 
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (index) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  const total = state.cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <div className="header">
      <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">About</a></li>
              <li><a href="#about">Services</a></li>
              <li><a href="#contact">Contact</a></li>
             </ul>
          </nav>
          <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><FaSearch /></button> 
        </div>
        </div>
        <FaShoppingCart className="cart-icon" onClick={toggleCartVisibility} />
        {state.cartItems.length > 0 && <span className="cart-count">{state.cartItems.length}</span>}
      </div>

      {isCartVisible && (
        <div className="cart">
          <h4>Shopping Cart</h4>
          {state.cartItems.length === 0 && <p>No items in the cart.</p>}
          {state.cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}style={{backgroundColor: "rgb(238, 156, 156)",borderRadius:"5px"}}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{backgroundColor:"rgb(238, 156, 156)",borderRadius:"5px"}}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
