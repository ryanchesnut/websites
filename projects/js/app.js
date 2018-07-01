    var latitude = 0;
    var longitude = 0;
	var time = 0; 
	var currentWeather = ""; 
	var tempF = 0; 
	var tempC = 0; 
	var icon = ""; 
	var summary = "";
	var switchTemp = false; 
	
	
	function getLocation() {
    	if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    	} else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}
	
	function convertTemp(){
		if (!this.switchTemp){
			$("#temperature").html(tempC); 
			this.switchTemp = true; 
		}
		else {
			$("#temperature").html(tempF); 
			this.switchTemp = false; 
		}
	}
	
	function findIcon(icon){
		switch(icon){
			case 'clear-night' :
				$('body').css('background-image', 'url( https://cdn.pixabay.com/photo/2017/06/08/06/03/british-columbia-2382640_1280.jpg)');
				$('#weather-icon').addClass('wi-night-clear'); 	
				break; 
			case 'clear-day' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2017/10/20/01/15/blue-sky-2869833_1280.jpg)');
				$('#weather-icon').addClass('wi-day-sunny');
			break;
			case 'rain' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2018/03/11/12/14/raindrops-3216608_1280.jpg)');
				$('#weather-icon').addClass('wi-rain');
			break;
			case 'wind' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2015/11/22/14/31/reed-1056322_1280.jpg)');
				$('#icon').addClass('.wi-cloudy-gusts');
			break; 
			case 'fog' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2014/11/27/10/29/forest-547363_1280.jpg)');
				$('#icon').addClass('.wi-fog');
			break; 
			case 'cloudy' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2015/01/08/05/07/sky-592415_1280.jpg)');
				$('#icon').addClass('.wi-cloud');
			break; 
			case 'partly-cloudy-day' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_1280.jpg)');
				$('#icon').addClass('wi-day-cloudy');
			break; 
			case 'partly-cloudy-night' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2016/11/20/22/33/moon-1843943_1280.jpg)');
				$('#weather-icon').addClass('wi-night-cloudy');
			break; 
			case 'hail' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2013/06/08/01/45/hail-123041_1280.jpg)');
				$('#icon').addClass('.wi-night-alt-cloudy');
			break; 
			case 'thunderstorm' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_1280.jpg)');
				$('#icon').addClass('.wi-thunderstorm');
			break; 
			case 'tornado' :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2017/02/27/08/50/cyclone-2102397_1280.jpg)');
				$('#icon').addClass('.wi-tornado');
			break; 
			default :
				$('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2015/11/22/14/31/reed-1056322_1280.jpg)');
				$('#icon').addClass('.wi-alien');
		}
	}

	var x = document.getElementById("location");
	function showPosition(position) {
		latitude  = position.coords.latitude;
		longitude = position.coords.longitude;
		//x.innerHTML = "Latitude: " + position.coords.latitude + 
		//"<br>Longitude: " + position.coords.longitude;
		//$.ajax({url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=" + + latitude + "," + longitude +"&sensor=true", async: false, success: function(result){
		//		console.log(JSON.stringify(result));
			//$('#location').html(JSON.stringify(result["address_components"]));
		//	}
		//});	
		
		$.ajax({url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ad05c050b7e9cd675a967d66e5b8452b/"+ latitude + "," + longitude + "?exclude=flags,alerts,minutely,hourly,daily" , async: true, success: function(result){
				parseResults(result); 
			console.log(JSON.stringify(result)); 
			}
		});
	}
	function displayResults(){
		$("#current-weather").html(currentWeather); 
		$("#summary").html(summary); 
		$("#temperature").html(tempF.replace( /"/g , " " ));
	}
	
	function parseResults(result){
			currentWeather = result["currently"]; 
			tempF = Math.round(currentWeather["temperature"]) + '&degF';
			tempC = Math.round((currentWeather["temperature"] - 32) / 1.8) + '&degC';
			icon = currentWeather["icon"]; 
			findIcon(icon);
			summary = currentWeather["summary"]; 
			this.displayResults(); 
	}
		$(document).ready(function(){
			getLocation(); 

	});
