import { useState } from 'react'


 function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className="h-screen w-screen " style={{backgroundColor:color}}>
      <div className="h-12 w-4/5 bg-orange-400 fixed bottom-10 left-[10%] flex items-center justify-around rounded-xl">
            <button className="h-10 w-12 rounded-xl text-center bg-red-600 text-white " onClick={()=> setColor("red")}>Red</button>
            <button className="h-10 w-12 rounded-xl text-center bg-green-600 text-white " onClick={()=> setColor("green")}>Green</button>
            <button className="h-10 w-12 rounded-xl text-center bg-blue-600 text-white " onClick={()=> setColor("blue")}>Blue</button>
            <button className="h-10 w-12 rounded-xl text-center bg-yellow-500 text-white " onClick={()=> setColor("yellow")}>Yellow</button>
            <button className="h-10 w-12 rounded-xl text-center bg-pink-600 text-white " onClick={()=> setColor("pink")}>Pink</button>
            <button className="h-10 w-12 rounded-xl text-center bg-purple-600 text-white " onClick={()=> setColor("purple")}>Purple</button>
            <button className="h-10 w-12 rounded-xl text-center bg-teal-600 text-white " onClick={()=> setColor("teal")}>Teal</button>
      </div>
    </div>
  )
}

export default App;
