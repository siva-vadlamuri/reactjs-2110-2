import { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import Parent from "../context/Parent";
// useState
function About() {
  // Rules Of Hooks
  // You cannot use Hooks in Class Components
  // You cannot call hooks condtionally

  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });
  const firstNameRef = useRef(null);
  const buttonRef = useRef(null);

  const handleIncrement = () => {
    setCount(count + 1);
    // setCount is used to update count value (state)
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleBtnClick = () => {
    console.log(buttonRef);
    buttonRef.current.style.width = "300px";
  };
  const handleBtnBlur = () => {
    buttonRef.current.style.width = "100px";
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <div>
      {/* <h2>count Value : {count}</h2>
            <button className="btn" onClick={handleIncrement}>Increment</button>
            <button className="btn" onClick={handleDecrement}>Decrement</button> */}

      <form>
        <div>
          <input
            className="mt-3"
            type="text"
            name="firstName"
            ref={firstNameRef}
            value={form.firstName}
            placeholder="Enter your firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="mt-3"
            type="text"
            name="lastName"
            value={form.lastName}
            placeholder="Enter your lastName"
            onChange={handleChange}
          />
        </div>
      </form>
      <button
        className="btn btn-primary"
        ref={buttonRef}
        onFocus={handleBtnClick}
        onBlur={handleBtnBlur}
      >
        Click Me
      </button>
      <Parent />
    </div>
  );
}

export default About;
