import Counter from './counter'
import Batsman from './batsman'
import './App.css'

function App() {
  function click(){
    alert("Clicked")
  }
  const click3=()=>{
    alert('Clicked 3')
  }

  const add5=(num)=>{
    const newNum=num + 5;
    alert(newNum);
  }

  return (
    <>
     
      <h1>React Core Concept</h1>
      
      <Counter></Counter>
         
         <Batsman></Batsman>
     <div className='div-style'>
     <button onClick={click}>Click me</button>
      <button onClick={function click2(){
        alert("clicked 2")
      }}>Click me 2</button>
      <button onClick={click3}>Click me 3</button>

      <button onClick={()=>alert("clicked 4")}>Click me 4</button>
      <button onClick={()=>add5(7)}>Click add 5</button>
     </div>
      
    </>
  )
}

export default App
