import React, { useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";


const Navbar = (props) => {


  const navigate = useNavigate();
  const signinLink = () => {
    navigate("/Signin", { replace: true });
  };
  const about = () => {
    navigate("/about", { replace: true });
  };
  const contact = () =>{
    navigate("/contact",{ replace: true})
  }
  const Category = () =>{
    navigate("/shop_category",{replace: true})
  }


  return (
    <>
      <div class="container row">
        <div class="col-md-2 py-2 flex justify-center">
         <a href="/"> <img
            src="https://veganessentials.com/cdn/shop/files/vegan-essentials-logo.png?v=1667509180"
            className="w-1/2"
          />
          </a>
        </div>
        <div class="col-md-5  flex items-center justify-center ">
          <ul className="flex gap-5 font-light cursor-pointer">
                
              <li className="hover:underline hover:-translate-x-1 hover:text-sky-700" onClick={()=>{navigate('/',{replace:true})}}>
                Home
              </li>
            
           
              <li className="hover:underline hover:-translate-x-1  hover:text-sky-700" onClick={Category}>
                Shop By Category
              </li>
            
            
              <li className="hover:underline hover:-translate-x-1  hover:text-sky-700" onClick={about}>
                About Us
              </li>
            
            <a href="#">
              <li className="hover:underline hover:-translate-x-1 hover:text-sky-700" onClick={contact}>
                Contact Us
              </li>
            </a>
          </ul>
        </div>
        <div class="col-md-5 flex items-center justify-end text-center">
          <input
            placeholder="Search any Products"
            className="rounded-l h-10  text-gray-800 text-center bg-gray-100 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-10 w-4 pr-3 rounded-r bg-slate-100"
          />
          {/* <button className="bg-green-50 rounded-md text-green-500 w-20 h-10 left-2">Register</button> */}
          <div className="flex items-center justify-center text-center gap-4">
            <FontAwesomeIcon
              icon={faUser}
              className="h-10 w-5 cursor-pointer ml-7"
              onClick={signinLink}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-base w-5 cursor-pointer"
              onClick={() => { props.setCart(true); }}
            />
          </div>
        </div>
        
      </div>
      <hr></hr>
      {props.isCart ? <Cart setCart = {props.setCart} /> :null}
  
    </>
  );
};

export default Navbar;
