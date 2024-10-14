import React, { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef(null); // Ref to store button element
  const [num, setNum] = useState(0); // State to manage the counter
  let butt=useRef(0);
  function hello() {
    setNum(num + 1);
    inputRef.current =inputRef.current +1; // Update the state counter
    console.log(num, inputRef.current); // Log current counter and button reference

  }

  useEffect(() => {
    if (inputRef.current === 2) {
      butt.current.style.backgroundColor = "red"; // Change background color if num is 1
    }
  }, [num]); // Effect runs whenever num changes

  return (
    <div className="tutorial">
      <button ref={butt} onClick={hello}>
        hello
      </button>
    </div>
  );
}

export default App;
