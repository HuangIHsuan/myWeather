import $ from 'jquery'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init(); // 初始化
  }, [])

  return (
    <div>
      <h1 data-aos='fade-zoom-in'>AOS-zoom-in</h1>
      <div className="box" data-aos='fade-up' data-aos-duration='1000'>
       <p>fade-up</p>
       <p>duration-time: 1000ms</p>
      </div>
    </div>
  )
}

export default App