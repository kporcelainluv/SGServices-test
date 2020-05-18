import React, { Fragment } from "react";
export const ComponentHeading = ({ name, color }) => {
  return (
    <Fragment>
      <h2 className={color === "white" ? "heading heading--white" : "heading"}>
        {name}
      </h2>
      <p
        className={
          color === "white" ? "description description--white" : "description"
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Fragment>
  );
};
