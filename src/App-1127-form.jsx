import { useEffect, useState } from "react"

function App() {

  const [inputUsername, setInputUserName] = useState('');

  // 縣市名
  const [selCity, setSelCity] = useState('');
  // 建立陣列
  const arrCity = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市'];

  // 閱讀確認
  const [check, setCheck] = useState('false');

  // 複選：多個核取方塊
  const [checkList, setCheckList] = useState([]);
  const arrList = ['HTML', 'CSS', 'JS', 'REACT'];
  // 建立函式處理被勾選的項目
  const handleCheckList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已被勾選的項目+目前勾選的項目
    // setCheckList([...checkList, e.target.value]);
    if (e.target.checked === true) {
      // 是 => 原本+新的
      setCheckList([...checkList, e.target.value]);
    } else {
      // 否 => 從原本被勾選的項目中拿掉不要的(filter)
      setCheckList(
        checkList.filter((list) => {
          return list !== e.target.value
        }));
    }
  }

  // 選項按鈕
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');

  // 統計次數
  const [ans1Count, setAns1Count] = useState(0);
  const [ans2Count, setAns2Count] = useState(0);
  const [ans3Count, setAns3Count] = useState(0);

  // useEffect(() => {
  //   const btn1 = document.getElementById('btn1');
  //   btn1.addEventListener('click', totCount);

  //   function totCount() {
  //     setAns1Count(0);
  //     setAns2Count(0);
  //     setAns3Count(0);

  //     // 統計次數
  //     // 第一題


  //     // 第二題

  //   }

  // }, [])

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱：</label>
      <input type="text" id="username"
        placeholder="username"
        value={inputUsername}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />
      <br />

      {/* select */}
      <label htmlFor="city">縣市名：</label>
      <select name="city" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}>
        {/* 逐行寫法 */}
        {/* <option value="">請選擇</option>
        <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="高雄市">高雄市</option> */}

        {/* 讀取陣列寫法 */}
        {/* disabled => 無法使用(失能/失效) */}
        <option value="" disabled>請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }

      </select>
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isChecked">閱讀確認</label>
      <input type="checkbox" id="isChecked"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked)
        }} />
      {/* {check.toString()} */}
      <br />

      {/* 複選：多個核取方塊 */}
      {/* <label htmlFor="checkList1">HTML</label>
      <input type="checkbox" id="checkList1" name="like" value='HTML'
        onChange={handleCheckList} />

      <label htmlFor="checkList2">CSS</label>
      <input type="checkbox" id="checkList2" name="like" value='CSS'
        onChange={handleCheckList} />

      <label htmlFor="checkList3">JS</label>
      <input type="checkbox" id="checkList3" name="like" value='JS'
        onChange={handleCheckList} /> */}

      {
        arrList.map((list) => {
          return <div key={list}>
            <label htmlFor={list}>{list}</label>
            <input type="checkbox" name="like" id={list} value={list}
              onChange={handleCheckList} />
          </div>
        })
      }
      <br />
      {checkList}

      <br />
      {/* 選項按鈕 */}
      1. 請選擇最愛的飲料
      <input type="radio" name="Q1" value="美式咖啡" id="q1-1" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="q1-1">美式咖啡</label>

      <input type="radio" name="Q1" value="拿鐵咖啡" id="q1-2" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="q1-2">拿鐵咖啡</label>

      <input type="radio" name="Q1" value="紅茶" id="q1-3" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="q1-3">紅茶</label>
      <br />
      2. 請選擇最愛的水果
      <input type="radio" name="Q2" value="蘋果" id="q2-1" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="q2-1">蘋果</label>

      <input type="radio" name="Q2" value="葡萄" id="q2-2" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="q2-2">葡萄</label>

      <input type="radio" name="Q2" value="水蜜桃" id="q2-3" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="q2-3">水蜜桃</label>
      <br /><br />
      您選擇的飲料是：{q1Ans}
      <br />
      您選擇的水果是：{q2Ans}
      <br /><br />
      <button id="btn1" onClick={() => {
        // 在送出時將所有次數歸0
        setAns1Count(0);
        setAns2Count(0);
        setAns3Count(0);

        // 統計次數
        // if (q1Ans === '美式咖啡' || q2Ans === '蘋果') {
        //   setAns1Count(ans1Count + 1);
        // } else if (q1Ans === '拿鐵咖啡' || q2Ans === '葡萄') {
        //   setAns2Count(ans2Count + 1);
        // } else if (q1Ans === '紅茶' || q2Ans === '水蜜桃') {
        //   setAns3Count(ans3Count + 1);
        // }

        if (q1Ans === '美式咖啡' ) {
          setAns1Count(prev => prev + 1);
        } else if (q1Ans === '拿鐵咖啡') {
          setAns2Count(prev => prev + 1);
        } else if (q1Ans === '紅茶') {
          setAns3Count(prev => prev + 1);
        } 
        
        if (q2Ans === '蘋果') {
          setAns1Count(prev => prev + 1);
        } else if (q2Ans === '葡萄') {
          setAns2Count(prev => prev + 1);
        } else if (q2Ans === '水蜜桃') {
          setAns3Count(prev => prev + 1);
        }

      }}>送出統計結果</button>
      <br />
      顯示統計次數結果：
      <p>選項1：{ans1Count}次</p>
      <p>選項2：{ans2Count}次</p>
      <p>選項3：{ans3Count}次</p>

    </>
  )
}

export default App