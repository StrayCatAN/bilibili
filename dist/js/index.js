var root = window.player;
var $ = window.Zepto;
var $scope = $(document.body);
var footer = root.footer;
var topPanel = root.topPanel;
var fontPage = root.fontPage;
var win = root.win;
footer.bindEvent();
topPanel.bindEvent();
// fontPage.getWin();
function getData(url){
    $.ajax({
        url: url,
        type:"GET",
        success: function(data){
            win.dataList(data);
        },
        error: function(){
            console.log("error");
        }
    })
}


getData("/mock/data.json");