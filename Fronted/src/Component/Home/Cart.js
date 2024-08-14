import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, setCartItems } from "../../reduxSlice/productSlice";
import { toast } from "react-toastify";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=>state.cart.currentState)
  const totalPrice = cartItem.reduce((acc, item) => acc + item.price * item.quntity, 0);

   const navigate = useNavigate()
  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    axios
      .get("http://localhost:5000/api/get_cart")
      .then((response) => {
        dispatch(setCartItems(response.data.data));
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const updateCart = (item) => {
    axios
      .put(`http://localhost:5000/api/update/${item._id}`, item)
      .then((response) => {
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const handleIncrement = (item) => {
    const updatedItem = { ...item, quntity: item.quntity + 1 };
    const updatedItems = cartItem.map((cartItem) =>
      cartItem._id === item._id ? updatedItem : cartItem
    );
   dispatch(setCartItems(updatedItems));
    updateCart(updatedItem);
  };

  const handleDecrement = (item) => {
    if (item.quntity > 1) {
      const updatedItem = { ...item, quntity: item.quntity - 1 };
      const updatedItems = cartItem.map((cartItem) =>
        cartItem._id === item._id ? updatedItem : cartItem
      );
     dispatch(setCartItems(updatedItems));
      updateCart(updatedItem);
    }
  };

  const removeFromCart = (id) => {
    axios
      .delete(`http://localhost:5000/api/delete/${id}`)
      .then((response) => {
        toast.success("Item removed from cart")
        dispatch(setCartItems(cartItem.filter((item) => item._id !== id)));
      })
      .catch((error) => {
        console.log("Something went wrong, can't delete item", error);
      });
  };
  const product =() =>{
    navigate('/shop_category',{replace:true} )
    props.setCart(false)
  }
  const checkout =() =>{
    navigate('/checkout',{replace:true} )
    props.setCart(false)
  }

  return (
    <div className="col-md-4 cart bg-slate-100 text-center h-auto pb-3 flex float-end poppins-semibold overflow-hidden flex-col gap-3">
      <div className="col-md-12 p-2 bg-slate-200 ">
        <h3 className="">
          Shopping Cart{" "}
          <FontAwesomeIcon
            icon={faSquareXmark}
            className="float-end text-xl cursor-pointer"
            onClick={() => {
              props.setCart(false);
            }}
          />
        </h3>
      </div>

      <div className="row justify-center ">
        {Array.isArray(cartItem) && cartItem.length > 0 ? (
          cartItem.map((item) => (
            <div
              key={item._id}
              className="col-md-11 col-sm-10 flex py-3 text-center shadow-sm rounded-lg  hover:translate-y-px"
            >
              <div className="col-md-3 col-sm-2 flex items-center ">
                <img
                  src={item.img}
                  className="w-40 h-30 cursor-pointer"
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-2 col-md-5">
                <div className="font-extralight col-md-6 ">{item.title}</div>
                <div className="col-md-4 font-semibold font-mono">
                  ${item.price}
                </div>
              </div>
              <div className="col-md-3 gap-1 grid grid-flow-col items-center">
                <button
                  onClick={() => handleDecrement(item)}
                  className="bg-white col-md-8"
                >
                  -
                </button>
                <span className="bg-white">{item.quntity}</span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="bg-white col-md-8"
                >
                  +
                </button>
              </div>
              <div className=" col-md-2 items-center flex justify-center ">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            </div>
          ))
        ) : (
          <span>You have no items in your shopping cart.</span>
        )}
      </div>

      <div>
        <span>Total: ${totalPrice.toFixed(2)}</span>
      </div>
      <div className="row items-center ">
        <div className="col-md-6 flex justify-center">
        <button className="bg-orange-400 text-white rounded-lg col-md-6 " onClick={product}>
          CONTINUE SHOPPING
        </button>
        </div>
        <div className="col-md-6">
        <button className="bg-orange-400 text-white rounded-lg col-md-6 " onClick={checkout}>
          CHECKOUT
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
