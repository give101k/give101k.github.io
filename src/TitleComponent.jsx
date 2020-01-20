import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "Brandon Hanlon";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
