const Container = ({ children, leftOnly = false, className = "" }) => {
  return (
    <div
      className={`flex ${
        leftOnly
          ? "max-w-[100vw] pl-[5vw] ml-auto"
          : "max-w-[90vw] mx-auto justify-between items-center px-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
