import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0);
    const [sixes,setSixes]=useState(0)
    const singles=()=>{
        const updateRuns= runs+1;
      
        setRuns(updateRuns);
    }
   
    const six=()=>{
        const updateRuns=runs+6;
        const updatedSix=sixes+1;
        setSixes(updatedSix)
        setRuns(updateRuns);
    }
    const four=()=>{
        const updateRuns=runs+4;
        setRuns(updateRuns);
    }
    const reset=()=>{
        setRuns(0)
    }

    return(
        <div>
            <h1>Player: Bangla Batsman</h1>
            {
                runs>50&& <p>Your Score: 50</p>
            }
            <p><small>Six:{sixes}</small></p>
            <h1>Score:{runs}</h1>
            <button onClick={singles}>Singles</button>
            <button onClick={four}>Four</button>
            <button onClick={six}>Six</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}