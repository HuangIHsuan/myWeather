import "./App-1113.css"
import Recommand from "./Recommand.jsx"
import PointContent from "./PointContent.jsx"


function App() {
  const article = [
    {
      id: "d1",
      title: "教學影音",
      content: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
    },
    {
      id: "d2",
      title: "良性互動",
      content: "學習過程中，若您遇到任何問題或是你有任何想法都歡迎提出，我們會盡量的協助問題的解決"
    },
    {
      id: "d3",
      title: "趨勢分享",
      content: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展"
    },
  ]

  return (
    <>
      <div id="wrap">
        <header>
          <figure><img src="../images/banner.jpg" alt="" /></figure>
        </header>

        <main>
          <div id="point">
            <PointContent arrData={article} />
          </div>

          <div id="slogan">
            <p>讓學習成為一種習慣</p>
          </div>

          <div id="lecture">
            <h1 id="topic">推薦課程</h1>
            <div id="contentClass"><Recommand /></div>
          </div>
        </main>

        <footer>
          <small>&copy; 2024.11.12 黃逸軒</small>
        </footer>
      </div>

    </>
  )
}


export default App
