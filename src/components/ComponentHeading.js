import React, { Fragment } from "react";
export const ComponentHeading = ({ name }) => {
  return (
    <Fragment>
      <h2 className="portfolio__heading">{name}</h2>
      <p className="portfolio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Fragment>
  );
};
