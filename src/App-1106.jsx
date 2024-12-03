// 導入外部css檔案
// cmd+點擊可以直接連到檔案
import "./App.css"

// 建立新的元件
function MyComponent() {
  return (
    // 空標籤：Fragment
    <>
      <h2>React</h2>
      <p>hellohellohellohellohellohellohello</p>
      <p>hellohellohellohellohellohellohello</p>
    </>
  )
}

// 元件裡面盡量不要再建立元件，會影響react效能
// 只要使用元件就好
function App() {

  // 建立變數
  const strName = 'Huang';
  return (
    <div>
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      <h1 style = {{
        color:'brown',
        backgroundColor:'yellow',
        width:'300px',
        }}>Good Morning, {strName.toUpperCase()}</h1>
      {/* 將屬性中使用變數 */}
      <label className="unLineColor" htmlFor="username">請輸入姓名：</label>
      {/* placeholder => 提示字 */}
      <input type="text" id="username" placeholder={strName}/>
      {/* <MyComponent /> */}
    </div>
  )
}

// 元件要被其他檔案使用的話記得export default
// 檔名命名要與元件一樣
export default App
