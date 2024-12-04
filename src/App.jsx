import { Route, Routes } from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"

function App() {

  return (
    <div className="wrapper">
      <NavBar />
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
    </div>
  )
}

export default App