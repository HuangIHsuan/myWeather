import { useMemo, useState } from "react"

export default function App() {

  const prodData = [
    {
      id: 1,
      title: '水果茶',
      price: 80,
      img: './images/01.jpg',
    },
    {
      id: 2,
      title: '紅茶拿鐵',
      price: 240,
      img: './images/02.jpg',
    },
    {
      id: 3,
      title: '烏龍拿鐵',
      price: 200,
      img: './images/03.jpg',
    },
    {
      id: 4,
      title: '綠茶',
      price: 120,
      img: './images/04.jpg',
    },
    {
      id: 5,
      title: '紅茶',
      price: 330,
      img: './images/05.jpg',
    },
  ]

  // 建立表格元件
  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{ width: '300px', marginTop: '10px' }}>
        <tbody>
          {
            // 因為要排序，原本的proData用filterProds取代
            filterProds.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td style={{ borderBottom: '1px dashed #333', width: '70%' }}>{prod.title}</td>
                  <td><img src={prod.img} alt={prod.title} style={{
                    borderBottom: '1px dashed #333',
                    width: '100px',
                    verticalAlign: 'top',
                    margin: '10px 0 0 0',
                    paddingBottom: '10px'
                  }} /></td>
                  <td style={{ borderBottom: '1px dashed #333', width: '30%', textAlign: 'right' }}>{prod.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  // 陣列變數，預設為原商品陣列的資料
  const [prods, setProds] = useState(prodData);
  // 排序變數，預設為遞增 => ascending
  const [asc, setAsc] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');

  // 建立排序與搜尋的函式
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {
        return asc ? a.price - b.price : b.price - a.price;
      })
      .filter((prod) => {
        return prod.title.match(search);
      })

  }, [asc, search]);

  return (
    <>
      <h1>useMemo搜尋、排序</h1>
      <hr />
      升降冪：
      <input
        type="checkbox"
        checked={asc}
        onChange={(e) => setAsc(e.target.checked)}
      />
      <br />
      搜尋：
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* 呼叫表格元件 */}
      <ProdTable filterProds={filterProds} />

    </>
  )
}