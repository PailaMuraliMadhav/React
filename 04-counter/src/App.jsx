import { useState } from 'react';
import './App.css'

function App() {

const [counter,setCounter] = useState(4)


// let counter =5;



function addValue(){

setCounter(counter+1);
}
function removeValue(){
  if(counter >0){
setCounter(counter-1);
}
}

  return (
    <>
<h1>Counter App</h1>
<h2>Counter value: {counter}</h2>
<button onClick={addValue} >Add Value</button>
<br></br>
<button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
