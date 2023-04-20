import { useState } from "react";
import cartLogo from "../assets/shared/desktop/icon-cart.svg";
import audiophile from "../assets/shared/desktop/logo.svg";
import Menu from "../components/Menu";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-container container">
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <img src={audiophile} alt="Audiophile logo" />
        <div className="header-cart">
          <img src={cartLogo} alt="Open the basket" />
        </div>
      </div>
      <div className="border-bottom"></div>
    </header>
  );
};

export default Header;
