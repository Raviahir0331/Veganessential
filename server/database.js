const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const port = 5000;
const url =
  "mongodb://mongoadmin:mongoadmin@localhost:27017/Ecommerce_platform?authSource=admin";
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose
  .connect(url)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("somethin went wrong " + err));
server.listen(port, () => {
  console.log(`Server is runnign on port ${port}`);
});

app.use(bodyparser.json());
app.use(cors());

const router = require("../server/workspace/Routers/Auth_route");
app.use("/api", router);

const Contact_route = require('../server/workspace/Routers/Contact_route');
app.use('/api',Contact_route); 

const Category_route = require('../server/workspace/Routers/Category_route');
app.use('/api',Category_route);

const Mail_route = require('../server/workspace/Routers/Mail_router');
app.use('/api',Mail_route);

const Product_route = require('../server/workspace/Routers/Product_route');
app.use('/api',Product_route);
const Home_Category_route = require('../server/workspace/Routers/Home_category_route');
app.use('/api',Home_Category_route);

const Cart_route = require('../server/workspace/Routers/Cart_route');
app.use('/api',Cart_route);

const show_product_route = require('../server/workspace/Routers/show_product');
app.use('/api',show_product_route);

const order_route = require('../server/workspace/Routers/Order_route')
app.use('/api',order_route)
