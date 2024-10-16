import checkIcon from "./fetchIcon";
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const status = document.querySelector("#status");

const location = document.querySelector("#location");
const currentTemp = document.querySelector("#currentTemp");
const currentTempIcon = document.querySelector("#currentTempIcon");
const tempHigh = document.querySelector("#tempHigh");
const tempLow = document.querySelector("#tempLow");
const tempDescription = document.querySelector("#tempDescription");
const tempFeelsLike = document.querySelector("#feelslike");

const tomorrowTemp = document.querySelector("#tomorrowTemp");


async function fetchLocation(searchCity){
    try {
        
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchCity}?unitGroup=metric&key=UUPS8REXZ8QGUX6DCFK9B33D8&contentType=json`, { mode: 'cors' });
        return await response.json();
        
    } catch (error) {
        console.log("Error: ", error);
        return await Promise.reject(error);
    }
}


function fetchTemp(searchCity) {
    fetchLocation(searchCity).then(function(data){ 
    if (data){
    console.log(data);
    
    const resolvedAddress = data.resolvedAddress;
    location.innerHTML = resolvedAddress;
        
    const temp = data.currentConditions.temp;
    currentTemp.innerHTML = temp;

    const icon = data.days[0].icon;
    currentTempIcon.innerHTML = icon;
    checkIcon(icon);

    const tempmax = data.days[0].tempmax;
    tempHigh.innerHTML = `Highs: ${tempmax}`;

    const tempmin = data.days[0].tempmin;
    tempLow.innerHTML = `Lows: ${tempmin}`;

    const description = data.description;
    tempDescription.innerHTML = description;

    const feelslike = data.currentConditions.feelslike;
    tempFeelsLike.innerHTML = `Feels like: ${feelslike}`;
    
    const temp2 = data.days[1].temp;
    tomorrowTemp.innerHTML = temp2;

    }
})
    .catch(function(error){
        console.log("Error fetching temperature:", error);
        status.innerHTML = "Couldn't fetch temperature, please check spelling.";
        
    })
}




searchBtn.addEventListener('click', function() {
    const searchCity = searchInput.value.trim();
    if (searchCity) {
      fetchTemp(searchCity);
    } else {
      alert('Please enter another city');
    }
  });


  




export default fetch;
   