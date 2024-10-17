import checkIcon from "./fetchIcon";
import fetchOtherTemp from "./fetchRest";
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

/*const tomorrowTemp = document.querySelector("#tomorrowTemp");
const tomorrowDate = document.querySelector("#tomorrowDate");
const tomorrowIcon = document.querySelector("#tomorrowIcon");*/

/*const DATtemp = document.querySelector("#DATtemp");
const DATdate = document.querySelector("#DATdate");
const DATicon = document.querySelector("#DATicon");*/


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
    checkIcon(icon, currentTempIcon);

    const tempmax = data.days[0].tempmax;
    tempHigh.innerHTML = `Highs: ${tempmax}`;

    const tempmin = data.days[0].tempmin;
    tempLow.innerHTML = `Lows: ${tempmin}`;

    const description = data.description;
    tempDescription.innerHTML = description;

    const feelslike = data.currentConditions.feelslike;
    tempFeelsLike.innerHTML = `Feels like: ${feelslike}`;
    

    fetchOtherTemp(data, getFormattedDate, checkIcon);

    }
})
    .catch(function(error){
        console.log("Error fetching temperature:", error);
        status.innerHTML = "Couldn't fetch temperature, please check spelling.";
        
    })
}

function getFormattedDate(dateString) {
    const dateTom = new Date(dateString); 
    const today = new Date(); 
    
    const isTomorrow = (dateTom.getDate() === today.getDate() + 1) && (dateTom.getMonth() === today.getMonth());
    
    if (isTomorrow) {
        return "Tomorrow";
    } else {
        const options = { weekday: 'short' };
        return dateTom.toLocaleDateString('en-US', options);
    }
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
   