$(function () {
    var mdwBtn = $('.modalBtn'), // 取得開啟彈出視窗按鈕
        overlayOpacity = 0.7,    // 背景透明度變數
        fadeTime = 500;          // 漸進時間變數

    mdwBtn.on('click', function (e) {
        // 取消預設動作
        e.preventDefault();

        var setMdw = $(this),
            setHref = setMdw.attr('href'), // 取出按鈕href屬性值
            wdHeight = $(window).height(); // 視窗高度

        /*  <div id="mdOverlay"></div>
            <div id="mdWindow">
                <div class="mdClose">x</div>
                <div id="contWrap">'+ setSourse +'</div>
            </div>
        */

        $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div><div id="contWrap"></div></div>');

        $('#contWrap').load(setHref); // 取得外部檔案內容

        $('#mdOverlay, #mdWindow').css({ display: 'block', opacity: '0' });

        $('#mdOverlay').css({ height: wdHeight }).stop().animate({opacity: overlayOpacity}, fadeTime);

        $('#mdWindow').stop().animate({opacity:'1'}, fadeTime);

        $(window).on('resize', function(){
            // 取讀視窗高度
            var newHeight = $(window).height();
            $('#mdOverlay').css({height: newHeight});
        })

        // 關閉彈出視窗或按下關閉紐時
        $('#mdOverlay, #mdWindow').on('click', function(){
            $('#mdOverlay, #mdWindow').stop().animate({ opacity: '0' }, fadeTime, function(){
                // 移除元素
                $('#mdOverlay, #mdWindow').remove();
            })
        })
    })

})