import Counter from './counter'
import Batsman from './batsman'
import Users from './users'
import './App.css'
 import { Suspense } from 'react'
import Friends from './friends'

 const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const fetchfriends=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();

}
function App() {

  const friendsPromise = fetchfriends();
  

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
        
     <Suspense fallback={<h3>loading...</h3>}>
     <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are loading...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
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
