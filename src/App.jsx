import { useCallback,useEffect,  useState } from 'react'

import './App.css'

function App() {
  const [password, setpassword] = useState();
  const [length, setlength] = useState(6);
  const [numbers, setnumbers] = useState(false);
  const [characters, setcharacters] = useState(false);

  const passgen=useCallback(()=>{
    let Password="";
    let pass="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers==true){
      pass+="0123456789";
    }
    if(characters==true){
      pass+="@#$%&*{}()\[]";
    }
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*pass.length+1)
      Password+=pass.charAt(char)
    }
    setpassword(Password);
  },[length,numbers,characters,setpassword])
 const [otp,setotp]=useState();
 const [otplength,setotplength]=useState(4);
 const [alphabets,setalphabets]=useState(false);
const otpgen=useCallback(()=>{
let OTP="";
let str="0123456789"
if(alphabets==true){
  str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
}
for (let i = 1; i <=otplength; i++) {
  let char = Math.floor(Math.random()*str.length+1)
OTP+=str.charAt(char)
console.log(OTP,char);

}
setotp(OTP)
},[otplength,setotp])
useEffect(()=>{
  otpgen()
},[otplength,alphabets])
useEffect(()=>{
  passgen()
},[length,numbers,characters,passgen])
  return (<>
  <h1 className='text-center text-secondary'>PASSWORD  GENERATOR</h1>
   <div className='border border-2-light bg-primary d'>
 <div className='e'>
 <input type="text" className=" m-5 input"  value={password}  />
 <div className='c'>
 <input type="range" min={6} max={15} value={length} onChange={(e)=>{setlength(e.target.value)}} className="  input2"   /> 
 <label>length({length})</label>
 <input type="checkbox" defaultChecked={numbers} id="numberinput" onChange={()=>{
  setnumbers((prev)=>!prev)
 }} className="  input1"   />

 <label>numbers</label>
 <input type="checkbox" defaultChecked={characters} id="numberinput" onChange={()=>{
  setcharacters((prev)=>!prev)
 }}className="  input1"   /> 
 <label>special characters</label>
 </div>
 </div>
   </div>
   <h1 className='text-center text-secondary'> OTP GENERATOR</h1>
   <div className='border border-2-light bg-primary d'>
 <div className='e'>
 <input type="text" className=" m-5 input"  value={otp}  />
 <div className='c'>
 <input type="range" min={4} max={8} value={otplength} onChange={(e)=>{setotplength(e.target.value)}} className="  "   /> 
 <label>length({otplength})</label>
 <input type="checkbox" defaultChecked={alphabets} id="numberinput" onChange={()=>{
  setalphabets((prev)=>!prev)
 }} className="  input1"   />

 <label>numbers</label>
 </div>
 </div>
 </div>
   </>
  )
}

export default App
