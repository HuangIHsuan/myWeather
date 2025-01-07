import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

export default function App() {
  const [activeQuestionId, setActiveQuestionId] = useState(null);


  //  折疊資料
  const questions = [
    {
      id: 1,
      question: '題目1',
      answer: '答案1',
    },
    {
      id: 2,
      question: '題目2',
      answer: '答案2',
    },
    {
      id: 3,
      question: '題目3',
      answer: '答案3',
    },
  ]

  return (
    <>
      <div className="wrapper" style={{
        backgroundColor: 'black',
        color: 'white',
        maxWidth: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        {/* FAQ區塊 */}
        <div className="faq" style={{
          backgroundColor: 'gray',
          width: '80%',
          padding: '0 16px 8px 16px',
          borderRadius: '10px',
        }}>
          {/* 主標題 */}
          <h2 style={{
            textAlign: 'center',
            marginBottom: '10px',
          }}>
            FAQ - Accordion</h2>

          {
            // 帶出陣列資料
            questions.map((q) => {
              return (
                <div key={q.id} style={{ marginBottom: '5px' }}>
                  {/* QA按鈕 */}
                  <button style={{
                    width: '100%',
                    border: 'none',
                    borderRadius: '2px',
                    padding: '5px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '16px',
                  }}
                    onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}>

                    {/* 帶出題目 */}
                    {q.question}
                    {/* icon 加減號 */}
                    {
                      activeQuestionId === q.id ? <FaCircleMinus /> : <FaCirclePlus />
                    }
                  </button>

                  {/* 折疊鈕動畫 motion */}
                  <AnimatePresence>
                    {
                      // 作用中的id跟被點擊的id相同時
                      activeQuestionId === q.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }} // 初始化
                          animate={{ opacity: 1, height: 'auto' }} // 展開動畫
                          exit={{ opacity: 0, height: 0 }} // 關閉動畫
                          style={{ marginTop: '5px', color: '#fff', padding: '0 8px', fontSize: '16px' }}
                        >
                          {/* 答案 */}
                          {q.answer}
                        </motion.div>
                      )
                    }
                  </AnimatePresence>

                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}