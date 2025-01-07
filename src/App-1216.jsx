import { useEffect } from 'react';
import $ from 'jquery'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動 => mousemove()
    // X.Y座標 => pageX, pageY
    // 取得html內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒 => (slow, normal, fast)
    // has() => 尋找指定的名稱
    // 新增html元素 => append()
    // 取得子元素 => children()

    $('a:has(.ttpShow)').on('mouseover',function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      }).fadeIn('800');
    }).on('mouseout',function (e) {
      $('#ttpPanel').remove();
    }).on('mousemove',function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      });
    })
  }, [])

  return (
    <div>
      <h2>ToolTip顯示說明</h2>
      <p>Lorem ipsum, dolor sit amet
        <a href="#">
          consectetur
          <span className='ttpShow'>consectetur內容說明</span>
        </a>
        Hic error aperiam quidem doloribus tempore corporis fugiat veritatis impedit, voluptatem magnam soluta ea corrupti quo sit obcaecati nesciunt culpa aspernatur porro quaerat totam est libero. Numquam optio, facere quam dignissimos iste nobis at! Sint fugiat mollitia, eaque ut atque, molestiae possimus ea velit sunt minus natus enim ratione quibusdam, vero autem quasi maiores non at harum similique hic eveniet id quae provident! Mollitia earum corrupti tempora incidunt fugiat at dolores nisi optio eum eligendi alias, provident aliquam quidem itaque, a amet sunt. Alias cum aspernatur neque. Provident similique ullam aspernatur autem? Corporis amet possimus recusandae iusto omnis assumenda et laborum, nam officia aperiam voluptatem veniam odit impedit hic incidunt voluptates libero doloribus ducimus deleniti laboriosam ipsa perspiciatis! Nulla alias excepturi ad illo consectetur voluptatum dolores sed laborum non earum provident, sapiente cupiditate, tempore accusamus reiciendis vero vel, pariatur porro ea. Laboriosam perferendis laudantium harum perspiciatis cupiditate officia facere odio aperiam, illo libero esse dolore consequatur minus, doloremque at fugit eius mollitia voluptate ut hic quidem debitis repellendus? Labore eius facilis sed magni hic architecto tenetur neque velit laborum cum explicabo, natus, tempore rem, libero saepe?
        <a href="#">
          Debitis
          <span className='ttpShow'>
            <img src="./images/04.jpg" alt="" style={{width: '100px'}}/>
          </span>
        </a>
        et eligendi placeat deserunt eius quis amet libero doloremque repudiandae consequuntur optio officia, unde porro? Architecto debitis dolor ipsa eveniet quis officia enim asperiores aperiam a cupiditate, distinctio facilis accusamus repellat cum odio atque amet porro perspiciatis laboriosam dicta pariatur fugiat! Sint totam ipsam nesciunt quasi similique hic quos, libero aliquam pariatur, molestias cupiditate vero iure eaque enim natus maiores quae nisi nemo deleniti sed autem dolorem! Asperiores, accusantium rem quo labore earum quaerat laboriosam itaque provident repellendus excepturi doloremque dolore natus rerum numquam neque, harum aliquam nostrum modi cum? Mollitia quas saepe incidunt. Quidem, alias voluptatem porro vel, voluptates consequatur facere eaque maiores earum eveniet perspiciatis ab, veritatis ea error distinctio dicta excepturi non ratione aut labore similique nemo sint neque consequuntur! Laudantium possimus libero temporibus fuga sit cum ullam, ea adipisci architecto et ratione velit eos esse facilis doloribus cumque sapiente? Obcaecati ipsam voluptates veritatis iste omnis quos natus, quasi minima placeat et debitis, aliquam beatae possimus autem alias tempora, consequuntur expedita! Repellat dolorem accusantium ipsam quaerat ad aut dolorum voluptatibus dolores aperiam in minima aspernatur quod maiores perferendis consequuntur, veniam accusamus, asperiores temporibus repudiandae architecto. Nulla enim libero maiores molestiae, voluptatem beatae explicabo repellat sequi amet atque quae tempora assumenda et voluptatibus doloremque ad at, sapiente officiis soluta magni. Unde, aut libero asperiores tempore fugit laudantium! Quisquam minima repudiandae dolore, ad assumenda, hic commodi inventore doloremque aperiam illum cum culpa et. Eos optio quibusdam hic illum cupiditate ducimus dolorem odit corrupti, alias, provident ipsa voluptatibus. Dolorem error delectus nulla, libero dolores culpa obcaecati fuga. Doloremque nisi, harum voluptatum, quidem eaque dolorum, quaerat voluptate laboriosam modi praesentium odio officia porro aliquid voluptates sequi obcaecati neque officiis doloribus accusamus ut alias vero! Quasi fugit et sint in. Quia nam voluptate quam vel veritatis, labore similique illum magnam quisquam. Omnis reprehenderit nesciunt aut optio sit?</p>
    </div>
  )
}

export default App