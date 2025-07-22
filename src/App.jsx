 
import './App.css'
 
import { Outlet  } from "react-router";

function App() {
 

  return (
    <>
 <h1 className='text-9xl'>hello world</h1>
     <Outlet/>
    </>
  )
}

export default App
