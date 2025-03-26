import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const add=()=>{
      setCount(count+1);
      
    }

    const reset=()=>{
        setCount(0)
    }

    const counterStyle={
        border:"2px solid yellow"
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count<10 ? "0" + count : count}
                
            </h3>
            <button onClick={add}>Count</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}