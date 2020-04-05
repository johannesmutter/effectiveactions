import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      //   id={id}
      //   className="input"
      //   type={type}
      //   name={name}
      //   value={value}
      //   placeholder={placeholder}
    />
  );
});

export default Input;
