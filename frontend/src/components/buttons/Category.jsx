import "../../scss/components/category.scss";
import PropTypes from "prop-types";

function Category({ name, handleClick }) {
  Category.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  return (
    <button type="button" className="Category" onClick={handleClick}>
      {name}
    </button>
  );
}

export default Category;
