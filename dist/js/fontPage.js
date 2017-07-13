(function($,root) {
        var pointBtn = $(".panel li");
        var pic = $(".pic");
        var position = pic.position().left;
        var index;
        var point = $(".point");
        function changeIndex(index) {
            point.css("background-color","white");
            if(index == 0) {
                pic.css("transform","translate(0)");
                point.eq(0).css("background-color","#fA8072");
            }else if(index == 1){
                pic.css("transform","translate(-100vw)");
                point.eq(1).css("background-color","#fA8072");
            }else if(index == 2){
                pic.css("transform","translate(-200vw)");
                point.eq(2).css("background-color","#fA8072");
            }
        }

         pointBtn.on("click",function(e) {
            index = $(this).index();
            changeIndex(index);
            return index;
        })

        var time = setInterval(function(){
             if(position <= -200) {
                 var index = 0;
                 position = 0;
             }else if(position == -100){
                var index = 2;
                position = -200;
             }else if(position == 0) {
                 var index = 1;
                 position = -100;
             }
            pic.css("transform", "translate(" + position + "vw)");
            point.css("background-color","white");
            point.eq(index).css("background-color","#fA8072");
        },3000)
        root.fontPage = {
            // lunBoTu : lunBoTu,
            // create : create,
            // getWin : getWin
        }
}(window.Zepto,window.player || (window.player = {})))