import './App.css';
import ShowData from "./ShowData";

function App() {

  return (
    <>
      <div className="wrap">
        <h2 className="title">36小時天氣預報</h2>
        <div className="cards">
          <ShowData />
        </div>
      </div >
    </>
  )
}

export default App