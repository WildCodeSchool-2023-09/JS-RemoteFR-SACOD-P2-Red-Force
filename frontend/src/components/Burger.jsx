import "../scss/burger.scss";
import burger from "../assets/icon_burger.svg";

function Burger() {
  return (
    <div className="burger">
      <img src={burger} alt="" />
    </div>
  );
}
export default Burger;
