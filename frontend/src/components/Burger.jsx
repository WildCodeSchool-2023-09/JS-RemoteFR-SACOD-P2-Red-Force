import "../scss/burger.scss";
import PropTypes from "prop-types";
import burger from "../assets/icon_burger.svg";

function Burger({ handleOpen }) {
  return (
    <button className="burger-button" onClick={handleOpen} type="button">
      <img className="burger" src={burger} alt="" />
    </button>
  );
}
Burger.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Burger;
