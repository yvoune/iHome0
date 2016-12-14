
//var google;
//
//function init() {
//  // Basic options for a simple Google Map
//  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//  // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
//  var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
//  // 39.399872
//  // -8.224454
//  
//  var mapOptions = {
//      // How zoomed in you want the map to start at (always required)
//      zoom: 7,
//
//      // The latitude and longitude to center the map (always required)
//      center: myLatlng,
//
//      // How you would like to style the map. 
//      scrollwheel: false,
//      styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
//  };
//
//  
//
//  // Get the HTML DOM element that will contain your map 
//  // We are using a div with id="map" seen below in the <body>
//  var mapElement = document.getElementById('map');
//
//  // Create the Google Map using out element and options defined above
//  var map = new google.maps.Map(mapElement, mapOptions);
//  
//  var addresses = ['Brooklyn'];
//
//  for (var x = 0; x < addresses.length; x++) {
//      $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
//          var p = data.results[0].geometry.location
//          var latlng = new google.maps.LatLng(p.lat, p.lng);
//          new google.maps.Marker({
//              position: latlng,
//              map: map,
//              icon: 'images/loc.png'
//          });
//
//      });
//  }
//  
//}
//google.maps.event.addDomListener(window, 'load', init);


function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=1.4&callback=init";
	document.body.appendChild(script);
}
function init() {
	var map = new BMap.Map("map");            // 创建Map实例
//	var point = new BMap.Point(113.40509, 23.070205); // 创建点坐标
var point = new BMap.Point(113.40423,23.072142);
//	map.centerAndZoom(point,16);
//	map.enableScrollWheelZoom();                 //启用滚轮放大缩小

//	var local = new BMap.LocalSearch(map, {
//		renderOptions:{map: map}
//	});
//	local.search("广东省广州市番禺区广州大学城广东外语外贸大学");

//	map.addEventListener("dragend", function(){    
//	 var center = map.getCenter();    
//	 alert("地图中心点变更为：" + center.lng + ", " + center.lat);    
//	});

	// 创建地址解析器实例
//	var myGeo = new BMap.Geocoder();
//	// 将地址解析结果显示在地图上,并调整地图视野
//	myGeo.getPoint("广东省广州市番禺区广州大学城广东外语外贸大学图书馆", function(point){
//		if (point) {
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point));
//			alert('您的位置：'+point.lng+','+point.lat);
//		}else{
//			alert("您选择地址没有解析到结果!");
//		}
//	}, "北京市");
//	
}  
window.onload = loadJScript;  //异步加载地图