import React from "react";

const VARIANTS = {
  primary:
    "bg-gradient-to-r px-4 py-2 rounded-lg from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md",

  outline:
    "border px-4 py-2 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100",

  pill: "border px-4 py-1 rounded-full border-gray-300 text-gray-700 hover:bg-gray-100",

  danger:
    "bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white hover:from-red-600 hover:to-red-700 shadow-md",

  glass: `px-5 py-2 rounded-full text-white bg-white/15 backdrop-blur-lg border border-white/20
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)] hover:bg-white/20
    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.45)]
    `,
};

const Button = React.memo(
  ({
    label = "Button",
    children,
    variant = "primary",
    className = "",
    type = "button",
    onClick,
    disabled = false,
    ...rest
  }) => {
    const baseStyles = `
      inline-flex items-center justify-center
      text-lg font-semibold
      transition-all duration-200
      active:scale-95
    `;

    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed active:scale-100"
      : "cursor-pointer";

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          ${baseStyles}
          ${VARIANTS[variant]}
          ${disabledStyles}
          ${className}
        `}
        {...rest}
      >
        {children ?? label}
      </button>
    );
  },
);

export default Button;