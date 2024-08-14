// src/Checkout.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCartItems, setCartItems } from "../../reduxSlice/productSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const [isEmail, setIsEmail] = useState();
  const [isCountry, setCountry] = useState();
  const [isfName, setfIsName] = useState();
  const [islIsName, setlIsName] = useState();
  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const [apartment, setApartment] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.currentState);
  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * item.quntity,
    0
  );

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

  const handle_Order_Data = () => {
    const data = {
      isEmail,
      isCountry,
      isfName,
      islIsName,
      company,
      address,
      apartment,
      city,
      state,
      zip,
      phone,
      cartItem,
    };
    if (
      !isEmail ||
      !isfName ||
      !islIsName ||
      !address ||
      !city ||
      !zip ||
      !cartItem ||
      cartItem.length === 0
    ) {
      alert("Please fill all required fields.");
    }
 

      axios
      .post("http://localhost:5000/api/order", data)
      .then((response) => {
        // dispatch(setCartItems(response.data.data));
        console.log("orderdata", response);
        toast.success("Order Placed");
        dispatch(clearCartItems());
       
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });


  };
  // if(handle_Order_Data){
  //   const email = { isEmail }

  //   axios
  //     .post("http://localhost:5000/api/mail", email)
  //     .then((response) => {
  //       // dispatch(setCartItems(response.data.data));
  //       // console.log(response);
  //       alert("mail sent",response)
  //     })
  //     .catch((error) => {
  //       console.log("Something went wrong", error);
  //     });
  //  }

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10 px-5 py-10 max-w-screen-lg mx-auto">
      {/* Left Column - Checkout Form */}
      <div className="flex-1 bg-white p-5 shadow-md rounded-lg mb-10 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-5">Checkout</h2>

        {/* Express Checkout Options */}
        <div className="flex space-x-4 mb-5">
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            ShopPay
          </button>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded">
            Amazon Pay
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            PayPal
          </button>
        </div>

        <div className="text-center text-gray-500 mb-5">
          OR CONTINUE BELOW TO PAY WITH A CREDIT CARD
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className=" text-sm font-medium text-gray-700"
            >
              Email{" "}
            </label>
            <Link to={"/signin"} className=" text-green-500 underline">
              Log in
            </Link>
          </div>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setIsEmail(e.target.value);
            }}
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="mr-2"
            />
            <label  className="text-sm text-gray-600">
              Email me with news and offers
            </label>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mb-4">
          <label
            
            className="block text-sm font-medium text-gray-700"
          >
            Country/region
          </label>
          <select
            
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option>India</option>
            <option>United States</option>
            <option>Russia</option>
            <option>Brazil</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={(e) => {
                setfIsName(e.target.value);
              }}
              name="firstName"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label
              
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              
              onChange={(e) => {
                setlIsName(e.target.value);
              }}
              name="lastName"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            
            className="block text-sm font-medium text-gray-700"
          >
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            name="company"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
           
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="address"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            
            className="block text-sm font-medium text-gray-700"
          >
            Apartment, suite, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            onChange={(e) => {
              setApartment(e.target.value);
            }}
            name="apartment"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label
              
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              id="city"
              name="city"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label
              
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <select
              id="state"
              onChange={(e) => {
                setState(e.target.value);
              }}
              name="state"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option>Gujarat</option>
              <option>Maharastra</option>
              <option>Goa</option>
              <option>punjab</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label
          
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              type="text"
              onChange={(e) => {
                setZip(e.target.value);
              }}
              id="zip"
              name="zip"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            
            className="block text-sm font-medium text-gray-700"
          >
            Phone (optional)
          </label>
          <input
            type="text"
            id="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md mt-5 hover:bg-gray-800"
        >
          Continue to Shipping
        </button>
      </div>

      {/* Right Column - Cart Summary */}
      <div className="flex-1 bg-gray-50 p-5 shadow-md rounded-lg">
        {cartItem.map((item) => (
          <div className="flex items-center justify-between mb-5">
            <img
              src={item.img}
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 ml-4">
              <p className="text-lg font-medium">{item.title}</p>
              {/* <p className="text-sm text-gray-500">Size: 6</p> */}
            </div>
            <p className="text-lg font-medium">${item.price}.00</p>
          </div>
        ))}

        <div className="mb-5">
          <input
            type="text"
            placeholder="Gift card or discount code"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-md mt-2">
            Apply
          </button>
        </div>
        <div className="border-t pt-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">${totalPrice}.00</p>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            ** Expedited orders cannot be shipped or delivered on
            weekends/holidays nor can they be shipped to a PO Box.
          </p>
          <div className="flex items-center justify-between font-semibold text-xl">
            <p>Total</p>
            <p>${totalPrice}.00</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={handle_Order_Data}
          className="w-full bg-black text-white py-3 rounded-md mt-5 hover:bg-gray-800"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
