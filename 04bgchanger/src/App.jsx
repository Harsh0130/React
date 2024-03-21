import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("green")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("blue")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("grey")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"grey"}}
          >Grey</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("Yellow")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("Pink")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}
          >Pink</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("purple")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}
          >Purple</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("lavender")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"lavender"}}
          >Lavender</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("white")}
          className="outline-none px-10 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}
          >White</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("Black")}
          className="outline-none px-10 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
