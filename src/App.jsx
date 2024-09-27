import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [name,setname]=useState(" ");


  const handlechange=()=>{

  }
//hello

  const handleform=()=>{
    console.log();
    
  }


  // const handleform=(e)=>{
  //   e.preventDefault();
  //   const {username,email,firstname,lastname,contact}=e.target
  //   const user={
  //     username:username.value,
  //     email:email.value,
  //     firstname:firstname.value,
  //     lastname:lastname.value,
  //     contact:contact.value,
  //   }
  //   console.log(user);
    

  // }

  return (
    <>
      <form className='flex flex-col border-2' onSubmit={handleform}>

        <input onChange={handlechange} className='px-3 py-2 rounded-md' type="text" placeholder='firstName' name='firstname' />
        <input onChange={handlechange} className='px-3 py-2 rounded-md' type="text" placeholder='lastNAme' name='lastname' />
        <input onChange={handlechange} className='px-3 py-2 rounded-md' type="text" placeholder='username' name='username'/>
        <input onChange={handlechange} className='px-3 py-2 rounded-md' type="text" placeholder='email' name='email'/>
        <input onChange={handlechange} className='px-3 py-2 rounded-md' type="number" placeholder='contact' name='contact' />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
