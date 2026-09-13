import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import CollectionPage from "./Pages/CollectionPage"
import Navbar from "./components/Navbar"
import { ToastContainer, toast} from "react-toastify"


const App = () => {

  return (
    <div className='w-full min-h-screen text-white bg-gray-950' >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route> 
        <Route path="/collection" element={<CollectionPage/>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App