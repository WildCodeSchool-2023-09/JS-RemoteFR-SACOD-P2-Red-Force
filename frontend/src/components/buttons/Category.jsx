import "../../scss/components/category.scss";
import PropTypes from "prop-types";
import { useState } from "react";

function Category({ name, id }) {
  const [url, setUrl] = useState("https://opentdb.com/api.php?amount=1");
  function handleClick() {
    setUrl(`https://opentdb.com/api.php?amount=1&category=${id}`);
    console.warn(url);
  }
  Category.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };
  return (
    <button type="button" className="Category" onClick={() => handleClick()}>
      {name}
    </button>
  );
}

export default Category;
