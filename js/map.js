//百度地图API功能
function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=1.4&callback=init";
	document.body.appendChild(script);
}


function init() {
	var map = new BMap.Map("detailMap");            // 创建Map实例
//	var point = new BMap.Point(116.404, 39.915); // 创建点坐标
//	map.centerAndZoom(point,20);                 
	map.enableScrollWheelZoom();                 //启用滚轮放大缩小
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	local.search("珠江新城");
}
window.onload = loadJScript;