let Location={
        apiKey:"69074b108b02f806eec79d8ba482a832",
        fetchLocation:function(x,u){
            fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + x +"&appid="+ this.apiKey).then(response=>response.json()).then(data=>{
                lat=data[0].lat;
                lon=data[0].lon;
                weather.fetchWeather(lat,lon,u);
            });
    }
