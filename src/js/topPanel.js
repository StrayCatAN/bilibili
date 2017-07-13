(function($,root) {
    var $scope = $(document.body);
    var topBtn1 = $(".tag-1");
    var topBtn2 = $(".tag-2");
    var fontmain = $(".fontmain");
    console.log(topBtn2);
    var attentionmain = $(".attentionmain");
    function bindEvent() {
        topBtn1.on("click",function(e) {
            var index = $(this).index();
            judgeIndex(index,fontmain);
        })
        topBtn2.on("click",function(e) {
            var index = $(this).index();
            console.log("aaa");
            judgeIndex(index,attentionmain);
        })
    }

    function judgeIndex(index,main) {
        if(index == 0) {
            main.css("transform","translate(0vw)");
        }else if(index == 1) {
            main.css("transform","translate(-100vw)");
        }else if(index == 2) {
            main.css("transform","translate(-200vw)")
        }
    }
    root.topPanel = {
        bindEvent : bindEvent,
        judgeIndex : judgeIndex
    }
}(window.Zepto, window.player || (window.player = {})))