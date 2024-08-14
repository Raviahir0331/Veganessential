import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Category = ({ setCart }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_home_category")
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_product")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  const handleCart = (item) => {
    axios
      .post("http://localhost:5000/api/add_cart", item)
      .then((response) => {
        setCart(false);
        toast.success("Product Added To Cart");
      })

      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const handleproduct = (item) => {
    sessionStorage.setItem("item", JSON.stringify(item));
    navigate("/product", { replace: true });
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="col-md-2 flex justify-center items-center my-3 font-semibold text-lg">
            Shop By Category
          </div>
          <div className="row flex justify-evenly">
            {category.map((data) => (
              <div
                key={data.id}
                onClick={() => {
                  navigate("/shop_category", { replace: true });
                }}
                className="col-md-2 col-sm-5 my-2 flex flex-col justify-center items-center text-center shadow-md font-extralight rounded-lg hover:translate-y-px hover:shadow-lg hover:border-1 cursor-pointer"
              >
                <img src={data.img} alt={data.name} className="rounded-2" />
                <div className="py-2">
                  <p>{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-4">
          <div className="col-md-3 flex justify-center items-center my-4 font-semibold text-lg">
            Whole Food Vegan Picks
          </div>

          <div className="row flex justify-evenly">
            {items.map((item) => (
              <div
                key={item.id}
                className="col-md-2 col-sm-5 my-2 flex flex-col justify-center items-center text-center shadow-lg border-1 rounded-lg hover:shadow-none hover:translate-y-px"
              >
                <div
                  onClick={() => {
                    handleproduct(item);
                  }}
                  className="cursor-grab"
                >
                  <div className="flex items-center justify-center">
                    <img src={item.img} className="w-40 h-30 cursor-pointer" />
                  </div>
                  <div className="font-extralight">{item.title}</div>
                  <div className="row py-2">
                    <div className="col-md-6 font-semibold font-mono flex justify-center items-center text-center">
                      ${item.price}
                    </div>
                    <div className="col-md-6 flex justify-center items-center">
                      <span className="bg-green-500 text-white poppins-semibold rounded-[8px] text-sm w-[100px]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-orange-400 w-35 p-1 my-4 text-white text-center flex justify-center rounded-2xl font-mono cursor-pointer"
                  onClick={() => handleCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="p-4">
              <img
                src="https://veganessentials.com/cdn/shop/files/go-vegan.jpg?v=1677005642"
                className=""
              />
            </div>
          </div>
          <div className="col-md-6 pt-5 flex justify-center align-items-center flex-col">
            <div>
              <h5 className="font-monospace text-2xl py-6">Why Go Vegan</h5>
            </div>
            <div>
              <p className="font-sarif text-sm">
                Yes, everything we sell is vegan! We don't wish to offer
                anything that contains any animal-based ingredients or that has
                been tested on animals. Period. We're vegans ourselves, and we
                have never had any plans to sell anything that is not conforming
                to vegan standards. You may read an ingredient in a product that
                sounds like it is not vegan, but trust us, there are many
                different ways something can be derived or created, so even if
                something looks like it might not be vegan or you read that the
                ingredient is from an animal, you can be sure that the
                derivative in the product we're carrying is not from an animal
                source. It is extremely rare that a company ever changes
                ingredients to make a vegan product non-vegan, but if this were
                to happen with something we were carrying, we would immediately
                discontinue the product and no longer offer it in our store
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
