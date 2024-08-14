import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "./home.css";
import axios from "axios";
import Footer from "./Footer";
import { toast } from "react-toastify";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const data = { name, email, phone, message };

    axios
      .post("http://localhost:5000/api/register", data)
      .then((response) => {
        toast.success(" Record has beed saved");
      })
      .catch((err) => {
        console.log(`something error on data axios post ${err}`);
        alert("Error submitting record.");
      });
    console.log(data);
  };

  return (
    <div className="container">
      <Slider />
      <div className="container p-5">
        <div className="row ">
          <div className="col-md-6 flex justify-center items-center  montserrat gap-3  flex-col text-lg">
            <h4 className="text-2xl font-semibold">
              Got some questions or you just need help?
            </h4>
            <p>
              Need help with an existing order you've placed? Contact us at{" "}
              <a href="#" className="text-green-500 underline">
                info@veganessentials.com
              </a>
            </p>
            <div>
              <p>
                Questions on shipping costs or best shipping to choose for both
                domestic orders Contact us at{" "}
                <a href="#" className="text-green-500 underline">
                  info@veganessentials.com{" "}
                </a>{" "}
                for details.
              </p>
            </div>
            <div>
              <p>
                For general product questions, product suggestions, ordering
                questions, marketing, or other information, please write us at{" "}
                <a href="#" className="text-green-500 underline">
                  questions@veganessentials.com
                </a>
              </p>
            </div>
            <div>
              <p>
                Are you a vendor interested in submitting a product for our
                store to carry? Email
                <a href="#" ssName="text-green-500 underline">
                  {" "}
                  questions@veganessentials.com{" "}
                </a>
                for details.
              </p>
            </div>
            <div>
              <p>
                Want to give us a call? Please try us at either of the numbers
                below
              </p>
            </div>
            <div>
              <p className="text-start font-semibold">
                Toll-free: 833-407-0747
              </p>
            </div>
          </div>
          <div className="col-md-6 flex justify-center items-center montserrat gap-5 flex-col ">
            <h4 className="text-2xl font-semibold">Send us a message</h4>
            <p>Leave your message and we'll get back to you shortly.</p>

            <div className="row">
              <div className="col-md-4">
                <label className="form-label "> Name :</label>
                <input
                  type="text"
                  name="name"
                  className="form-control shadow-md rounded-5 text-gray-600"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email :</label>
                <input
                  type="text"
                  name="name"
                  className="form-control shadow-md rounded-5 text-gray-600"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone :</label>
                <input
                  type="text"
                  name="name"
                  className="form-control shadow-md rounded-5 text-gray-600"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="mx-auto">
              <label className="form-label">Message</label>
              <textarea
                className="border-2 rounded-5 shadow-md px-3"
                rows={4}
                cols={50}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              >
                Message
              </textarea>
            </div>
            <div className="py-3">

              <button
                onClick={handleSubmit}
                className="bg-green-600 rounded-3 shadow-md text-white w-[70px] h-[40px] font-monospace"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
