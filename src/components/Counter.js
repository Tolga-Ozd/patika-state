import { useState } from "react";
import "../App.css";


function Counter()  {
    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count+1);
    };

    const decrease = () =>{
        setCount(count-1);
    };

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
        <br /> <br />
    </div>
   
  )
}

export default Counter;
