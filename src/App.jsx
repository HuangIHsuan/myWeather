import { useEffect } from "react"
import axios from 'axios';
import './App.css';
import { IoUmbrella } from "react-icons/io5";

function App() {

  useEffect(() => {
    (async () => {
      // 在github上的網址必須是公開的
      const data = await axios.get('https://huangihsuan.github.io/myWeather/json/F-C0032-001.json');
      console.log(data);

      // const data = await axios.get('../public/json/F-C0032-001.json');
      // console.log(data);

      // const { location } = data.data.cwaopendata.dataset;
    })
  }, [])

  return (
    <>
      <div className="wrap">
        <h2 className="title">36小時天氣預報</h2>
        <div className="cards">
          {/* 卡片1 */}
          <div id="weather-card">
            {/* 卡片標題 */}
            <h2 className="city">臺北市</h2>
            {/* 天氣資訊group-三欄 */}
            <div className="weather-section">
              {/* 天氣資訊 */}
              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="weatherIcon/晴時多雲.svg" alt="" />
                  <p>晴時多雲</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>

              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="weatherIcon/多雲時晴.svg" alt="" />
                  <p>多雲時晴</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>

              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="weatherIcon/多雲短暫雨.svg" alt="" />
                  <p>多雲短暫雨</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>
            </div>

          </div>

          {/* 卡片2 */}
          <div id="weather-card">
            {/* 卡片標題 */}
            <h2 className="city">臺北市</h2>
            {/* 天氣資訊group-三欄 */}
            <div className="weather-section">
              {/* 天氣資訊 */}
              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="weatherIcon/晴時多雲.svg" alt="" />
                  <p>晴時多雲</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>

              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="weatherIcon/多雲時晴.svg" alt="" />
                  <p>多雲時晴</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>

              <div className="info">
                <p className="date">2日</p>
                <p className="time">
                  上午6:00<br />
                  ~<br />
                  下午6:00<br />
                </p>
                <div className="weather-icon">
                  <img src="../public/weatherIcon/多雲短暫雨.svg" alt="" />
                  <p>多雲短暫雨</p>
                </div>
                <div className="rain-percent">
                  <figure><IoUmbrella /></figure>
                  <p>10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App