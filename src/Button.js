import React from "react";

const Button = ({
  children,
  variant,
  outline,
  disabled,
  size,
  loading,
  className,
  ...props
}) => (
  <button className={className} disabled={disabled} {...props}>
    {children}
  </button>
);

export default Button;
