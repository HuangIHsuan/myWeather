import { useRef, useState } from "react";

function App() {

  // const [value, setValue] = useState('');
  // useState是一個即時更新的行為，會不斷的重複渲染

  // 建立一個useRef的變數
  // 如果需要非即時處理的話，可使用useRef，避免電腦一直重複渲染
  const inputRef = useRef(null);

  const submitHandler = () => {
    // console.log(value);

    // 查看值
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);
    // 更改類型為password
    inputRef.current.type = 'password';
    // 查看類型 => password
    console.log(inputRef.current.type);
  }

  return (
    <div>
      {/* 
      <input type="text" onChange={(e) => setValue(e.target.value)} /> */}

      <input type="text" ref={inputRef}/>
      <button onClick={submitHandler}>送出</button>
    </div>
  )
}

export default App