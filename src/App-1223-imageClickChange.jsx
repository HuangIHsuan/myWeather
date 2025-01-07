import { useState } from 'react';
import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';

function App() {

  // 建立目前縮圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4]
  return (
    <div>
      <div className="wrapper">
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      
          {/* 大圖區 */}
          <div>
            <img src={arrPhotos[currentImgIndex]} alt="photos" width={480} height={360} />
          </div>
          {/* 縮圖區 */}
          <div style={{ display: 'flex', marginTop: '20px', width: '480px', justifyContent: 'center'}}>
            {/* <img src={arrPhotos[0]} alt="photos" style={{width: '100px',height: '70px', marginBottom: '10px'}}/>
              <img src={arrPhotos[1]} alt="photos" style={{width: '100px',height: '70px', marginBottom: '10px'}}/>
              <img src={arrPhotos[2]} alt="photos" style={{width: '100px',height: '70px', marginBottom: '10px'}}/>
              <img src={arrPhotos[3]} alt="photos" style={{width: '100px',height: '70px', marginBottom: '10px'}}/> */}

            {
              arrPhotos.map((photo, index) => {
                return (
                  <img key={index} src={photo} alt="photos"
                    style={{ width: '100px', height: '70px', margin: '0 5px 0', cursor: 'pointer'}}
                    onClick={e => setCurrentImgIndex(index)}
                  />
                )
              })
            }

          </div>
        </section>
      </div>
    </div>
  )
}

export default App