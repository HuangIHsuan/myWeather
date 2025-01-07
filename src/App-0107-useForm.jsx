import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,       // 是一種狀態state，可以綁定n個表單欄位
    handleSubmit,   // 是一種方法
    formState: { errors } // 捕捉驗證規則
  } = useForm();

  // 建立一個自定義的方法，被表單觸發時，將register資料傳進來
  const onSubmit = (data) => {
    // 取得表單被綁定的全部欄位資料，以物件型態顯示
    console.log(data);
    // 取得表單指定的欄位資料 => data.欄位名稱
    // console.log(data.userName);
  }

  return (
    <>
      <h1>HookForm</h1>
      <hr />
      <div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* 使用者名稱 */}
          <div>
            <label htmlFor="username">使用者名稱：</label>
            <input
              type="text"
              id="username"
              defaultValue='demo'
              // 使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
              // 欄位名稱可以自行定義
              // 必填的驗證
              {...register('userName', { required: true })}
            />
            {/* 當驗證成立時的訊息(沒有填寫欄位資料時) */}
            {errors.userName && <span style={{color: 'red'}}>必須填寫使用者名稱</span>}
          </div>

          {/* 使用者密碼 */}
          <div>
            <label htmlFor="userpw">使用者密碼：</label>
            <input
              type="password"
              id="userpw"
              defaultValue='12345'
              {...register('userpw')}
            />
          </div>

          {/* 年齡 */}
          <div>
            <label htmlFor="userAge">使用者年齡：</label>
            <input
              type="text"
              id="userAge"
              defaultValue=''
              // 使用正規表達式
              {...register('userAge', {pattern: /\d+/})} // 加上只能接受數值資料的驗證
            />
            {errors.userAge && <span>只能輸入數字</span>}
          </div>

          {/* 送出鈕 */}
          <button type="submit">送出</button>
        </form>

      </div>
    </>
  )
}