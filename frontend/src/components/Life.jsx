import React from "react";
import PropTypes from "prop-types";

export default function Life({ lifeValue }) {
  Life.propTypes = {
    lifeValue: PropTypes.number.isRequired,
  };
  switch (lifeValue) {
    case 1:
      return (
        <p className="life activeLife">
          ?<span className="disableLife">?????</span>
        </p>
      );

    case 2:
      return (
        <p className="life activeLife">
          ??<span className="disableLife">????</span>
        </p>
      );

    case 3:
      return (
        <p className="life activeLife">
          ???<span className="disableLife">???</span>
        </p>
      );
    case 4:
      return (
        <p className="life activeLife">
          ????<span className="disableLife">??</span>
        </p>
      );
    case 5:
      return (
        <p className="life activeLife">
          ?????<span className="disableLife">?</span>
        </p>
      );
    case 6:
      return <p className="life activeLife">??????</p>;

    default:
      return <p className="life disableLife">??????</p>;
  }
}
