import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ setCart }) => {
  const [product, setProduct] = useState([]);
  const [suggestProduct, setSuggestProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const productData = JSON.parse(sessionStorage.getItem("item"));
    setProduct(productData);
  }, [product]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_product")
      .then((response) => {
        setSuggestProduct(response.data.data);
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
        toast.success("product Added To Cart")
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const goToCategory = () => {
    navigate("/shop_category");
  };


  return (
    <div className="container">
      <div className="row mx-auto p-4 poppins-light flex justify-center">
        <div className="col-md-3 items-center flex flex-col p-4 border-r-2">
          <h4 className="text-xl poppins-light">Select a Category</h4>
          <div
            className="py-4 grid gap-2 cursor-pointer items_category"
            onClick={goToCategory}
          >
            <h6>Low Sodium Picks</h6>
            <h6>High Protein</h6>
            <h6>Gluten Free</h6>
            <h6>Rare Vegan Finds</h6>
            <h6>Best Sellers</h6>
            <h6>New Products</h6>
            <h6>Vegan Wines</h6>
            <h6>Meat & Safefood</h6>
            <h6>Snacks</h6>
          </div>
        </div>

        <div className="col-md-9">
          <h4 className="poppins-light p-4 text-xl">Please Choose a Product</h4>
          <div className="col-md-12 rounded-md py-3 shadow-sm">
            <div className="row">
              <div className="col-md-6 py-2 cursor-pointer flex justify-center">
                <img src={product.img} alt="image" />
              </div>
              <div className="col-md-6 flex flex-col gap-2 text-start items-start justify-center">
                <div className="montserrat text-2xl text-start col-md-8 font-semibold">
                  <span>{product.title}</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-red-400 w-[100px] rounded-md text-white">
                    {product.status ? product.status : "Instock"}
                  </button>
                </div>
                <div className="montserrat text-lg font-bold mt-3 ">
                  <span>${product.price}.00</span>
                </div>
                <div>
                  <button
                    onClick={() => handleCart(product)}
                    className="bg-orange-400 w-35 p-1 my-4 text-white text-center flex justify-center rounded-2xl font-mono cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex justify-evenly my-3">
            {suggestProduct.map((item) => (
              <div
                key={item.id}
                className="col-md-4 flex m-2 flex-col justify-center items-center text-center shadow-sm rounded-lg hover:translate-y-px mx-auto"
              >
                <div
                  onClick={() => {
                    navigate("/", { replace: true });
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
          <div className="my-5 flex flex-col col-md-11">
            <h4 className="text-green-600 border-b-2 my-4">Description</h4>
            <p>
              This amazing carne asada-style steak from Eat Meati is a wonderful
              creation. Eat Meati has designed these carne asada steaks to be
              free from the main 14 allergens while being completely delicious
              and packed full of flavor. Enjoy the classic Mexican flavor
              combinations of cilantro, garlic, and spices. Sear this in a pan
              and add it to your favorite tacos for a delicious meal.
            </p>
            <h1 className="my-3 text-2xl font-semibold">Ingredients</h1>
            <p>
              Meati Steak (Mushroom Root [mycelium], Less Than 2% Of: Salt,
              Natural Flavor, Fruit Juice For Color, Oat Fiber, Vegetable Juice
              For Color, Lycopene For Color), Seasoning Blend (Dehydrated
              Garlic, Salt, Sugar, Spices, Paprika, Dehydrated Onion, Cilantro,
              Olive Oil, Natural Flavors, Extractives Of Paprika).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
