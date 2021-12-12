let c=true;
let f=false;

document.getElementById('Search').value=city;
document.getElementById('c').addEventListener('click',function(){  
    document.getElementById('c').style.backgroundColor='#b71c1c';
    document.getElementById('f').style.backgroundColor='white';
    unit=$('#c')[0].name;
    event.preventDefault();
    c=true;
    f=false;
    if(c){
        Location.fetchLocation(city,'C');
    }
    else{
        Location.fetchLocation(city,'F');

    }
});
document.getElementById('f').addEventListener('click',function(){
    event.preventDefault();
    document.getElementById('f').style.backgroundColor='#b71c1c';
    document.getElementById('c').style.backgroundColor='white';
    unit=$('#f')[0].name;
    c=false;
    f=true;
    if(c){
        Location.fetchLocation(city,'C');
    }
    else{
        Location.fetchLocation(city,'F');
    }

})
    document.getElementById('Submit').addEventListener('click',function(){
    event.preventDefault();
    city=document.getElementById('Search').value;
    $('#Search')[0].value="";
    if(c){
        unit='C';
    }
    else{
        unit='F';
    }
    Location.fetchLocation(city,unit);
});

    let Location={
        apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
        fetchLocation:function(x,u){
            fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + x +"&appid="+ this.apiKey).then(response=>response.json()).then(data=>{
                lat=data[0].lat;
                lon=data[0].lon;
                weather.fetchWeather(lat,lon,u);
            });
        }
    }
