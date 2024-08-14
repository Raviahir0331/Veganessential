import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Footer = () => {
  const [email, setEmail] = useState();
  const handleSubmit = () => {
    const data = { email };
    axios
      .post("http://localhost:5000/api/mail", data)
      .then((response) => {
        toast.success("Email sent successfully!");
      })
      .catch((err) => {
        console.log(`something error on data axios post ${err}`);
        alert("Error Can't Send Email.");
      });
  };
  return (
    <>
      <hr />
      <div className="container bg-slate-200 py-4  justify-center items-center text-center">
        <div className="row py-2">
          <div className="col-md-3 flex justify-center  items-centerr flex-col text-center ">
            <img src="https://veganessentials.com/cdn/shop/files/vegan-essentials-logo.png?v=1667509180" />
            <p className="my-2 montserrat ">
              VeganEssentials is a one-stop shopping destination for all vegan
              products. Shop now to get the highest quality animal-free &
              cruelty-free products.
            </p>
          </div>
          <div className="col-md-3 poppins-light grid gap-2 text-start justify-center ">
            <h3 className="py-2 font-extrabold">RESOURCES</h3>
            <div className="hovers list-none cursor-pointer ">
              <li>
                {" "}
                <Link to={"/About"}>About Us</Link>
              </li>
              <li>
                {" "}
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/pages/return-policy">
                  {" "}
                  Return Policy{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/pages/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/pages/suggest-a-product">
                  Suggest Product
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/pages/faq">FAQ</Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/blogs/news"> Blogs</Link>
              </li>
              <li>
                {" "}
                <Link to="https://veganessentials.com/pages/privacy-policy">
                  {" "}
                  Privacy Policy
                </Link>
              </li>
            </div>
          </div>
          <div className="col-md-3 poppins-light grid gap-2 text-start justify-center">
            <h3 className="py-2 font-extrabold">MOST POPULAR</h3>
            <div className="hovers list-none cursor-pointer">
              <li>
                <Link to="https://veganessentials.com/collections/companion-animal-products">
                  {" "}
                  Companion Animal Products
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/new-products">
                  New Products
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/sale">
                  SALE Products
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/chocolate-candy-sweetshttps://veganessentials.com/collections/meat-seafood">
                  Candy & Sweets
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/meat-seafood">
                  Meat Alternatives
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/cheese-eggs-dairy">
                  Chesse Alternatives
                </Link>
              </li>
              <li>
                <Link to="https://littlewest.com/collections/cold-pressed-juices">
                  Col-Pressed juices
                </Link>
              </li>
              <li>
                <Link to="https://veganessentials.com/collections/personal-care-cosmetics">
                  Personal Care
                </Link>
              </li>
            </div>
          </div>
          <div className="col-md-3 poppins-light grid gap-2 text-start justify-center">
            <h3 className="py-2 font-extrabold">NEWSLETTER</h3>

            <li className="list-none">Join Our Good News Mailing List</li>
            <div className="flex justify-center col-md-12 h-[45px] gap-2 ">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="rounded-2 text-sm col-md-8 justify-center items-center text-center "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white rounded-3 text-center w-[100px] font-mono "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mx-4 pt-4 ">
          <div className="col-md-6 flex justify-start font-mono">
            <span className="">2024 Copyright Vegan Essentials</span>
          </div>
          <div className="col-md-6 flex justify-end">
            <img src="https://veganessentials.com/cdn/shop/t/8/assets/payment-methods.jpg?v=66986485915320250141677062667" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
