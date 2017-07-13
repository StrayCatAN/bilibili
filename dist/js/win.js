(function($, root) {
    console.log("aaa");
    var $scope = $(document.body);
    var $a = $(".win1-data");
    console.log($a)
    var $win1List = $("<ul></ul>");
    $a.prepend("<div class = 'data-font'>" + "<span>" + "推荐主播  当前有4798个主播，进去看看" + "</span>" + "</div>");
    // $a.append($win1List);
    
    function dataList(data) {
        console.log(data);
        var html = "";
        var len = data.length;
        for(var i = 0; i<len; i++){
            // console.log(data[i]);
            // console.log(data[i].img);
           html += "<li>" +
            "<div> <img src = " + data[i].img  + ">" + "<div><p1>" + data[i].UP + "</p1><span><img src = '/img/win12.png'><p>" + data[i].view + "</p></span></div></div>" + 
            "<div><p>" + data[i].tag + "</p>" + 
            "<span>" + data[i].sign + "</span>" + 
            "</div></li>";
           console.log("a");
        }
        $win1List.html(html)
        $a.append($win1List.html(html));
    }
        root.win = {
        dataList : dataList
    }
}(window.Zepto, window.player || (window.player = {})))