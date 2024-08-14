import React from "react";
import slid3 from "./Images/slid3.webp";
import "./home.css";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="container flex items-center flex-col ">
        <img src={slid3} />
        <div className="col-md-7 flex justify-center p-4 ">
          <span className="text-green-500 text-3xl poppins-semibold">
            Vegan Owned and Operated Since 1997
          </span>
        </div>
        <div className="col-md-7 flex justify-center p-4">
          <p className="text-2xl poppins-light">
            The longest-operating cruelty-free retailer in the US
          </p>
        </div>
        <div className="col-md-10 grid gap-2 p-6 mx-3">
          <h1 className="text-start text-2xl montserrat">Our Mission</h1>
          <p className="montserrat">
            We offer unparalleled customer service and the highest quality
            animal-free and cruelty-free products—all in one location.
            VeganEssentials is a one-stop shopping destination for
          </p>
        </div>
        <div className="col-md-10 grid gap-2 p-6 mx-3 montserrat">
          <h1 className="text-start text-2xl">Our Guarantee</h1>
          <p>
            If it’s not vegan-friendly, we don’t offer it, period. You can shop
            with confidence knowing that if it doesn’t meet our personal vegan
            ethics, you won’t find it in our store. No need to worry about
            checking labels and ingredient lists on the items we sell to
            scrutinize for hidden animal ingredients, because there aren’t any.
            We’ve done the work for you, so you can shop in confidence that as a
            vegan, you’ll be able to trust the items we offer.
          </p>
        </div>
        <div className="col-md-10 grid gap-2 p-6 mx-3 montserrat">
          <h1 className="text-start text-2xl">
            The VeganEssentials’ Difference
          </h1>
          <p>
            Unlike ordering from the “big guys” online, when you shop with us,
            you keep your money in the vegan community – no more worrying about
            what percentage of your order is going to subsidize things you don’t
            believe in, as all orders placed with us will help support further
            growth to only offer more vegan items and nothing else.
          </p>
          <p>
            How many places can you shop online that you can feel comfortable
            knowing will only use your money to support veganism further? Not
            many, but with us, that will always be the case, and has been for
            over 20 years
          </p>
          <p>
            We may be a small business, but we’re fast and efficient. We work
            around the clock to get orders out as quickly as we can, because we
            know that nobody likes waiting too long to get what they’ve ordered,
            so we do our best to ship every order as quickly as possible.{" "}
          </p>
        </div>
        <div className="col-md-10 grid gap-2 p-6 mx-3 montserrat">
          <h1 className="text-start text-2xl">Working Together</h1>
          <p>
            Every shipment that leaves our store is a vote in favor of
            supporting cruelty-free options to make for a kinder world today and
            for the future!
          </p>
          <p>
            Thank you for making us your supplier of vegan products, and if we
            can assist in any way just call or email and we’ll be here to help
            you!
          </p>
          <p>Sincerely, </p>
          <h5>VeganEssentials.com Team</h5>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default About;
