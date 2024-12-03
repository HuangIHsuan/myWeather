function Recommand() {
    const lecture = [
      {
        id: "l1",
        img: "../images/unity.jpg",
        name: "Unity 5",
        content: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
        teacher: "Susan",
        time: 4,
        originPrice: "NT1600",
        discountPrice: "NT900",
      },
      {
        id: "l2",
        img: "../images/gamesalad.jpg",
        name: "GameSalad 2D遊戲製作",
        content: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
        teacher: "David",
        time: 8,
        originPrice: "NT3200",
        discountPrice: "NT1600",
      },
      {
        id: "l3",
        img: "../images/gwd.jpg",
        name: "Google Web Design",
        content: "用於建立HTML5廣告動畫，透過時間軸，將各種物件和事件以動畫方式呈現",
        teacher: "Laurance",
        time: 8,
        originPrice: "NT2800",
        discountPrice: "NT1500",
      },
    ]
  
    return (
      <>
        {/* {
          lecture.map((lec) => (
  
            <article key={lec.id}>
              <figure><img src={lec.img} alt="" /></figure>
              <h3>{lec.name}</h3>
              <p className="content">{lec.content}</p>
              <p className="teacher">{`講師：${lec.teacher}`}</p>
              <p className="time">{`影音課程時數：${lec.time} 小時`}</p>
              <p className="price"><span>{`原價 ${lec.originPrice}`}</span>{lec.discountPrice}</p>
              <p className="paybtn">付款上課去</p>
            </article>
          )
          )
        } */}
        {
          lecture.map((lec) => {
            return (
              <article key={lec.id}>
                <figure><img src={lec.img} alt="" /></figure>
                <h3>{lec.name}</h3>
                <p className="content">{lec.content}</p>
                <p className="teacher">{`講師：${lec.teacher}`}</p>
                <p className="time">{`影音課程時數：${lec.time} 小時`}</p>
                <p className="price"><span>{`原價 ${lec.originPrice}`}</span>{lec.discountPrice}</p>
                <p className="paybtn">付款上課去</p>
              </article>
            )
          })
        }
  
      </>
  
    )
  }

  export default Recommand