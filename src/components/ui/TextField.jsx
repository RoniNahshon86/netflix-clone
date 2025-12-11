const TextField = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-2 px-4 border border-neutral-gray-200 rounded-sm bg-overlay-black-50 text-primary-white font-normal placeholder:text-neutral-gray-50 placeholder:font-medium focus:outline-none focus:border-primary-white
        ${className}`}
      {...props}
    />
  );
};

export default TextField;
