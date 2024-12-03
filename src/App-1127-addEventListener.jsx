import { useEffect } from "react";

function App() {

  // 建立變色函式
  useEffect(() => {
    const p1 = document.getElementById('p1');
    p1.addEventListener('mouseover', () => {
      p1.style.color = 'red';
      p1.style.fontWeight = 'bold';
    })
    p1.addEventListener('mouseout', () => {
      p1.style.color = '';
      p1.style.fontWeight = '';
    })
    p3.addEventListener('mouseover', () => {
      let p3 = document.getElementById('p3');
      p3.textContent = '滑鼠進來ㄌ呦呦呦';
    })
    p3.addEventListener('mouseout', () => {
      let p3 = document.getElementById('p3');
      p3.textContent = '烏拉拉';
    })

    const h1 = document.getElementById('h1');
    let isClick = false;
    h1.addEventListener('click', (e) => {
      // console.log(e);   
      if (isClick === false) {
        e.target.textContent = 'click事件被觸發';
        e.target.style.color = 'blue';
        isClick = true;
      } else {
        e.target.textContent = '滑鼠事件';
        e.target.style.color = '';
        isClick = false;
      }
    })
    // h1.addEventListener('click', () => {
    //   const h1Text = h1.textContent;
    //   console.log(h1Text);
    //   alert(h1Text);
    // })

  }, []);

  // 建立改變內容函式
  function changeName() {
    let p2 = document.querySelector('#p2');
    p2.textContent = '滑鼠進來ㄌㄌㄌ';
  }
  function changeName2() {
    let p2 = document.querySelector('#p2');
    p2.textContent = '這是原本內容';
  }

  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2"
        onMouseEnter={changeName}
        onMouseLeave={changeName2}>這是原本內容</p>
      <p id="p3">烏拉拉</p>
    </>
  )
}

export default App