import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Typewriter from "typewriter-effect";

function Explore() {
  return (
    <div className="explore">
      <header className="pageHeader">
        {" "}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "Explore Estate Square",
              "You Invest, We do the Rest",
              "Living Spaces Designed With Excellence",
              "Smart Homes in a Smart Estate",
            ],
          }}
        />
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
