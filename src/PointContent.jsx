function PointContent({ arrData }) {
    return (
      <>
        {
          arrData.map((item) => {
            return (
              <article key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </article>
            )
          })
        }
      </>
    )
  }

  export default PointContent