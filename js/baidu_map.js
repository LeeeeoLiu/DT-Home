// var map = new BMap.Map("l-map");
function draw_points(data_info, map) {
    var opts = {
        width: 250,
        height: 160,
        title: "毕业生去向信息",
        enableMessage: true
    };
    for (var i = 0; i < data_info.length; i++) {
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]));
        var content = data_info[i][2];
        map.addOverlay(marker);
        addClickHandler(content, marker);
    }
    function addClickHandler(content, marker) {
        marker.addEventListener("click", function (e) {
            openInfo(content, e)
        }
        );
    }
    function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content, opts);
        map.openInfoWindow(infoWindow, point);
    }
}

var poi_info = []
var poi_x_list = []
for (i = 0; i < stus.length; i++) {
    if (stus[i].hasOwnProperty('poi')) {
        grad_info = ' <div style="width: 60px; height: 115px; text-align: center;float: left; margin: 1%;font-size: 0.8vw;"><img src="' + stus[i].pic + '" width="100%" height="70%"><div style="width: 100%;height: 30%;">' + stus[i].name + '<br>' + stus[i].gdt + '届' + stuType[stus[i].type] + '<br>' + stus[i].offer + '</div></div>';
        if (poi_x_list.indexOf(stus[i].poi[0]) > -1) {
            var idx = poi_x_list.indexOf(stus[i].poi[0]);
            poi_info[idx][2] += grad_info;
        }
        else {
            poi_x_list.push(stus[i].poi[0]);
            poi_info.push([stus[i].poi[0], stus[i].poi[1], grad_info]);
        }
    }
}
// draw_points(poi_info)
// map.centerAndZoom(new BMap.Point(106.591611, 36.217786), 5);


//百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=zqAvMoe6c1StDNWvVFBa8ed0VzBgnkKn&callback=init";
    document.body.appendChild(script);
}
function init() {
    var map = new BMap.Map("l-map");            // 创建Map实例
    var point = new BMap.Point(106.591611, 36.217786); // 创建点坐标
    map.centerAndZoom(point,5);                 
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    draw_points(poi_info, map)
}  
window.onload = loadJScript;  //异步加载地图