import { useState } from 'react';

function App() {
  
  let [bgcolor, setBgcolor] = useState('white');
  
  const changeBgColor = (color) => {
    console.log(color);
    
    setBgcolor(color);
  }

  return (
    
    <>
    <div className="bgc h-[100vh] w-[100vw]" style={{backgroundColor:bgcolor}}>
      <div className="fixed bottom-6 inset-x-0 mx-auto bg-white rounded p-4 flex justify-center items-center h-20 space-x-2 w-200 mx-auto rounded-full shadow-2xl">
        <button onClick={()=>changeBgColor('red')} className="text-white bg-red-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Red</button>
        <button onClick={()=>changeBgColor('green')} className="text-white bg-green-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Green</button>
        <button onClick={()=>changeBgColor("blue")} className="text-white bg-blue-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Blue</button>
        <button onClick={()=>changeBgColor("#808000")} className="text-white bg-[#808000] w-20 px-2 py-2 rounded-3xl shadow-lg">Olive</button>
        <button onClick={()=>changeBgColor("gray")} className="text-white bg-gray-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Gray</button>
        <button onClick={()=>changeBgColor("yellow")} className="text-white bg-yellow-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Yellow</button>
        <button onClick={()=>changeBgColor("pink")} className="text-white bg-pink-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Pink</button>
        <button onClick={()=>changeBgColor("purple")} className="text-white bg-purple-700 w-20 px-2 py-2 rounded-3xl shadow-lg">Purple</button>
        <button onClick={()=>changeBgColor("#E6E6FA")} className="text-white bg-[#E6E6FA] w-20 px-2 py-2 rounded-3xl shadow-lg">Lavender</button>
        <button onClick={()=>changeBgColor("white")} className="text-black bg-white w-20 px-2 py-2 rounded-3xl shadow-lg">White</button>
        <button onClick={()=>changeBgColor("black")} className="text-white bg-black w-20 px-2 py-2 rounded-3xl shadow-lg">Black</button>
      </div>
    </div>
    </>
  )
}

export default App
