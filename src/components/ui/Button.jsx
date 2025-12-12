import React from "react";

const baseClasses =
  "inline-flex justify-center items-center gap-2 text-base font-medium capitalize rounded-sm duration-500 transition cursor-pointer";

const variantClasses = {
  primary: "text-primary-white bg-primary-red hover:bg-secondary-red-200",
  secondary:
    "text-primary-white bg-neutral-gray-300-70 hover:bg-neutral-gray-300-40",
  white: "text-primary-black bg-primary-white hover:bg-neutral-gray-10",
};

const sizeClasses = {
  sm: "px-4 py-1",
  md: "px-6 py-1",
  lg: "px-8 py-2",
};

const Button = ({
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ` +
    className;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
