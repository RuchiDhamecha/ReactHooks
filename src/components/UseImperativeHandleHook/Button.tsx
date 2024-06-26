import {forwardRef,useImperativeHandle, useState} from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>btn from child</button>
      {toggle && <span>toggle</span>}
    </>
  );
});

export default Button;