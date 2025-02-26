import * as React from "react";
// import "@/scss/components/_button.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button className="button-ui" {...rest}>
      {children}
    </button>
  );
};

export default Button;
