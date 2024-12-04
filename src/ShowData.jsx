import axios from "axios";
import { useEffect, useState } from "react";
import { IoUmbrella } from "react-icons/io5";


function ShowData() {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
      (async () => {
  
        // const data = await axios.get('../public/json/F-C0032-001.json');
        // console.log(data);
  
        // 在github上的網址必須是公開的
        const data = await axios.get('https://huangihsuan.github.io/myWeather/json/F-C0032-001.json');
        console.log(data);
  
        const { location } = data.data.cwaopendata.dataset;
        // console.log(location);
        setWeatherList(location);
  
      })()
    }, [])
  
    // locationName => 縣市名稱
    // elementName => Wx => 天氣概況
    // elementName => PoP => 降雨機率
  

    return (
        <>
          {
            weatherList.map((city) => {
              return (

                <div className="weather-card" key={city.locationName}>
                  <h2 className="city">{city.locationName}</h2>
                  <div className="weather-section">
                    {
                      city.weatherElement[0].time.map((time, index) => {
                        return (
                          <div className="info" key={index}>
                            {/* 日期 */}
                            <p className="date">
                              {
                                new Date(time.startTime).toLocaleString(undefined, { day: 'numeric' })
                              }
                            </p>
                            {/* 時間 */}
                            <p className="time">
                              {
                                new Date(time.startTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                              <br />~<br />
                              {
                                new Date(time.endTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                            </p>
                            <div className="weather-icon">
                              {/* 天氣圖 */}
                              <img src={`weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                              {/* 天氣圖名稱 */}
                              <p>{time.parameter.parameterName}</p>
                            </div>

                            <div className="rain-percent">
                              <figure><IoUmbrella /></figure>
                              {/* <p>10%</p> */}
                              <p>{`${city.weatherElement[4].time[index].parameter.parameterName}%`}</p>
                            </div>
                          </div>
                        )

                      })
                    }

                  </div>
                </div>
              )
            })
          }
        </>
    )
}

export default ShowData