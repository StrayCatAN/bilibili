(function($,root) {
    var $scope = $(document.body);
    var footerList = $(".footer li");
    var boxList = $(".container");
    var img = $(".img");
    //    console.log(a);
    // console.log(boxList); 
    // console.log(footerList);

    function footerImg(index) {
        var arr = ["/img/shouyeaft.png", "/img/fenquaft.png", "/img/guanzhuaft.png", "/img/soushuoaft.png", "/img/yonghuaft.png"];
        var e = footerList.eq(index);
        var event = img.eq(index);
        console.log(arr[index]);
        e.css({"color":"#fA8072"});
        event.css({"background-image":"url(' " + arr[index] + " ')"})
    }

    function bindEvent() {
        //底部导航栏的点击事件
        footerList.on("click",function() {
            var index = $(this).index();
            show(index);
        })
        //
    }
    function show(index) {
        img.removeAttr("style");
        footerList.removeAttr("style");
        footerImg(index);
        boxList.find(".show").removeClass("show");
        boxList.find(".box").eq(index).addClass("show");
    }
    root.footer = {
        bindEvent : bindEvent,
        show : show

    }
}(window.Zepto,window.player || (window.player = {})));