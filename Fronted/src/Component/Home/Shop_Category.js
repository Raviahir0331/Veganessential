import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "react-toastify";

const Shop_Category = ({ setItems, isItems, setCart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all_category")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, [setItems]);

  const handleCart = (item) => {
    axios
      .post("http://localhost:5000/api/add_cart", item)
      .then((response) => {
        setCart(false);
        toast.success("Added to cart ")
        
      })

      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const handleproduct = (item) => {
    sessionStorage.setItem("item",JSON.stringify(item));
    navigate('/product',{replace:true})
  };
  const product = () =>{
    navigate('/product',{replace:true})
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row mx-auto p-4 poppins-light flex justify-center">
          <div className="col-md-3 col-sm-10 items-center flex flex-col p-4">
            <h4 className="text-xl poppins-light">Select a Category</h4>
            <div className="py-4 grid gap-2 cursor-pointer items_category"onClick={product} >
              <h6 >Low Sodium Picks</h6>
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
          <div className="col-md-9 border-l-2">
            <h4 className="poppins-light p-4 text-xl">
              Please Choose a Product
            </h4>
            <div className="row">
              {isItems.map((item) => (
                <div
                  key={item._id}
                  className="col-md-4 col-sm-4 flex justify-center flex-col items-center text-center py-2"
                >
                  <div className="col-md-10 shadow-md rounded-md flex justify-center flex-col items-center py-3">
                    <div className="flex flex-col justify-center items-center cursor-grab" onClick={()=>{handleproduct(item)}} >
                    <div className="py-2 cursor-pointer">
                      <img
                        src={item.img}  
                        alt="image"
                        className="w-[110px] h-[120px]"
                      />
                    </div>
                    <div className="montserrat text-lg ">
                      <span>{item.title}</span>
                    </div>
                    <div className="montserrat text-lg  mt-2 font-semibold">
                      <span> $ {item.price.toFixed(2)}</span>
                    </div>
                    </div>
                    <button
                      onClick={() => handleCart(item)}
                      className="bg-orange-400 w-35 p-1 my-3 text-white text-center flex justify-center rounded-2xl font-mono cursor-pointer"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop_Category;
