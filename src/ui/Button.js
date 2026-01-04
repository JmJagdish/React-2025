const Button = ({
  label = "Button",
  children,
  className = "",
  type = "button",
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg text-lg font-semibold text-white
                bg-linear-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-indigo-700
                active:scale-95 transition-all duration-200
                shadow-lg hover:shadow-xl cursor-pointer
        ${className}
      `}
      {...rest}
    >
      {children ?? label}
    </button>
  );
};

export default Button;

