//getting the location of a user
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else{
    alert('Opps could not get your location');
  }

  //getting the long and lat of the area
  function showPosition(positions){
    let lat = positions.coords.latitude;
    let long = positions.coords.longitude;
    console.log(lat,long);
    OrganApi(lat,long);
  }
}

function OrganApi(latitude,longitude){
  const apiKey = "c0c96f6b560d532a74ad73b558a917eb";
  const first3rdAp = "https://api.openweathermap.org/data/2.5/weather?lat=";
  const second3rdAp ="&lon=";
  const thirdAp ="&units=metric&appid=";
  const fullApi = first3rdAp+latitude+second3rdAp+longitude+thirdAp+apiKey;
  fetchWeath(fullApi);
}

async function fetchWeath(fullApi){
  const apiData= await fetch(fullApi);
  const DataApi = await apiData.json();

  showWeather(DataApi);
}

function showWeather(data){
  console.log(data);
  const {main,wind} = data;

//displaying data in html
document.querySelector(".city").innerText = "Weather in " + data.name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      document.querySelector(".description").innerText = data.weather[0].description;
      document.querySelector(".temp").innerText = main.temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + main.humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + wind.speed + " km/h";
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
}

//getting the weather by event listener
document.querySelector(".geoLoc").addEventListener("click",getLocation );