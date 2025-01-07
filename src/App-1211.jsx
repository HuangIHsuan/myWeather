import $ from 'jquery'
import { useEffect } from 'react';

function App() {

  // 寫法1: 過時的寫法
  useEffect(() => {
    $('.cssAni1').on('hover', function () {
      $(this).addClass('imgScale');
    }, function () {
      $(this).removeClass('imgScale');
    })
  }, [])

  // 寫法2: 建議的寫法
  useEffect(() => {
    $('.cssAni1').on('mouseenter', function () {
      $(this).addClass('imgScale');
    })
    $('.cssAni1').on('mouseleave', function () {
      $(this).removeClass('imgScale');
    })
  }, [])



  return (
    <div>
      <a href="#" className="cssAni1">
        <img src="./public/images/04.jpg" alt="" />
      </a>
    </div>
  )
}

export default App