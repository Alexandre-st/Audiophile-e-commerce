import { Link } from "react-router-dom";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

const ShopLinks = () => {
  return (
    <section className="shopLink container">
      <div className="shopLink-content">
        <img
          className="shopLink-content-img"
          src={headphones}
          alt="Link to headphones"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">HEADPHONES</h3>
          <Link className="shopLink-content-text-link" to="/">
            Shop
          </Link>
        </div>
      </div>
      <div className="shopLink-content">
        <img
          className="shopLink-content-img"
          src={speakers}
          alt="Link to speakers"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">SPEAKERS</h3>
          <Link className="shopLink-content-text-link" to="/">
            Shop
          </Link>
        </div>
      </div>
      <div className="shopLink-content">
        <img
          className="shopLink-content-img"
          src={earphones}
          alt="Link to earphones"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">EARPHONES</h3>
          <Link className="shopLink-content-text-link" to="/">
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopLinks;
