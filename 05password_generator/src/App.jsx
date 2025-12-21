import { useCallback, useState ,useEffect, useRef} from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllow,setNumberAllow]=useState(false);
  let [charAllow,setCharAllow]=useState(false);
  let [password,setPassword]=useState("");

  // use refhook
  const passwordRef=useRef(null);


  // password generator function
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllow){
      str+="0123456789";
    }
    if(charAllow){
      str+="!@#$%^&*_-+~`";
    }

    for(let i=0;i<length;i++){
      let charIndex=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(charIndex);
    }

    setPassword(pass);

  },[length,numberAllow,charAllow,setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    let selectedText=passwordRef.current.value.substring(0,20);
    window.navigator.clipboard.writeText(selectedText);
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllow,charAllow,passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-center text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded -lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-l px-3 bg-white'
          placeholder='Password'
          ref={passwordRef}
          readOnly 
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={20}
            value={length} 
            id='leninput'
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor="leninput">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={()=>{
              setNumberAllow((prev)=>!prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllow}
            id='charInput'
            onChange={()=>{
              setCharAllow((prev)=>!prev);
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
