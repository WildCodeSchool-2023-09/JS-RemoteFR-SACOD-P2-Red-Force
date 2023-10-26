import React from "react";
import "../scss/category.scss";
import PropTypes from "prop-types";

function Category({ name }) {
  Category.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <button type="button" className="Category">
      {name}
    </button>
  );
}

export default Category;
