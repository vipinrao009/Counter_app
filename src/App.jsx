
import './App.css'

import { useState } from 'react'



function App() {

  const [value,setvalue] = useState(0);

  const addValue = ()=> {
    setvalue(preValue => preValue+1)
  }

  const removeValue = ()=>{
    setvalue(preValue => preValue-1)
  }
  
  return (

    <div className="flex justify-center items-center">
      <div className="id flex items-center justify-center mt-60  h-96 w-2/5 bg-red-100 rounded-lg">
      
      <div className="bg-red-400  flex-col flex justify-center items-center w-96 h-80 rounded-xl text-white">

      <h1 className="text-4xl mb-9 font-bold">{value}</h1>
      <div className="">
      <button onClick={addValue} className="bg-white w-fit p-5 text-black font-bold">Increment</button>

      <button onClick={removeValue} className="bg-white w-fit ml-2 p-5 text-black font-bold">Decrement</button>
      </div>

      </div>
    </div>
    </div>

  )
}

export default App
