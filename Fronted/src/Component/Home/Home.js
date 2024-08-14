import Carousel from "./Slider";
import Category from "./Category";
import Footer from "./Footer";

const Home = ({setCart}) => {
  return (
    <>
      <div className="container">
        <Carousel />
        <Category setCart = {setCart} />
        <Footer />
      </div>
    </>
  );
};
export default Home;
