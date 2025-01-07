import { useEffect, useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function App() {

  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: './images/05.jpg', title: 'photo1' },
    { url: './images/06.jpg', title: 'photo2' },
    { url: './images/07.jpg', title: 'photo3' },
    { url: './images/08.jpg', title: 'photo4' },
  ]

  // 當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每2秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 2000);

    // 每2秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);

  }, [currentImgIndex])

  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是 => 回到第一張
    // 否 => 跳到下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  // 上一張
  const prevSlide = () => {
    // 取得前一張的索引編號，檢查是否為第一個編號
    // 是 => 跳到最後一張
    // 否 => 跳到前一張
    setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 建立左右icon
  const Arrow = ({ direction, onClick }) => (
    // 擺放icon的區域
    <div style={{
      position: 'absolute',
      top: '50%',
      cursor: 'pointer',
      color: 'white',
      // 在style裡面要用解構的變數，要使用中括號
      [direction]: '20px', // 將icon拆開，並且調整左右間距
    }}>
      {
        direction === 'left' ? (
          <FaArrowCircleLeft size={50} onClick={onClick} />
        ) : (
          <FaArrowCircleRight size={50} onClick={onClick} />
        )
      }
    </div>
  )

  return (
    <>
      <div className="wrapper" style={{
        margin: 'auto',
        maxWidth: '100vw',
        height: '100vh',
        position: 'relative'
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgIndex].url})`,
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          margin: '0'
        }}>
        </div>
        <h2 style={{
          position: 'absolute',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          alignItems: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '5px 20px',
          border: 'solid 1px white',
          borderRadius: '100px'
        }}>
          {slides[currentImgIndex].title}
        </h2>

        {/* 上一張 */}
        <Arrow direction='left' onClick={prevSlide} />
        {/* 下一張 */}
        <Arrow direction='right' onClick={nextSlide} />

      </div >
    </>
  )
}