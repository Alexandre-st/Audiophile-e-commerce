import hamburgerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import ShopLinks from "./ShopLinks";

const Menu = ({ toggleMenu, setToggleMenu }) => {
  const toggleTheMenu = () => {
    setToggleMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      <div
        className="header-menu"
        aria-label="To open or close the menu"
        onClick={toggleTheMenu}
      >
        <img className="header-menu-logo" src={hamburgerMenu} alt="Menu" />
        {toggleMenu && (
          <div className="header-menu-bg">
            <div className="header-menu-bg-white">
              <ShopLinks />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
