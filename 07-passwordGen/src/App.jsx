
import { useCallback,useEffect,useState } from 'react';

function App() {

 const [length,setLength]= useState(8)
 const [numberAllowed,setNumberAllowed] =useState(false)
const [charAllowed,setCharAllowed] =useState(false)
 const [password,setPassword] =useState("")

const  passwordGenerator = useCallback(()=>{ 
  let pass="";
  let str ="qwertyuioplkjhgfdsamnbvcxzMNBVCXZLKJHGFDSAPOIUYTREWQ";
  if(numberAllowed)str= str+= "1234567890";
  if(charAllowed) str= str+="!@#$%^&&*";

for(let i=1;i<=length;i++){
let char = Math.floor(Math.random()* str.length)//floor-least value
pass += str.charAt(char)

}
setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,setPassword])


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-700 via-green-800 to-green-900">
      <div className="w-full max-w-2xl bg-green-300 rounded-2xl shadow-2xl shadow-green-500 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center ">
          🔐 Password Generator
        </h1>

        <div className="flex items-center ">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 py-3  text-lg  bg-green-600 text-black rounded-l-2xl shadow-2xl shadow-green-400 outline-auto text-center outline-none"
            placeholder="Generated password"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert("Password copied to clipboard!");
            }}
            className="bg-black px-4 py-3 text-white text-lg rounded-r-2xl shadow-2xl shadow-green-400  hover:bg-green-900 hover:text-black transition-all duration-300"
          >
            Copy
          </button>
        </div>

        <div className="space-y-7 text-">
          <div className="flex items-center justify-between">
            <label className="text-m">
              Password Length :{" "}
              <span className="font-semibold text-black">{length}</span>
            </label>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-1/2 accent-green-900 bg-green-700 outline-none "
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="text-m">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-green-500 w-6 h-6  "
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="text-m">
              Include Symbols
            </label>
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-green-500 w-6 h-6 rounded-full border-2 border-green-800 shadow-md"
            />
          </div>
        </div>

        <div className="text-center text-xs text-">
          Built with 💙 by Murali paila using React & TailwindCSS
        </div>
      </div>
    </div>
  );
}

export default App;
