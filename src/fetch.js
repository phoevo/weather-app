const currentTemp = document.querySelector("#currentTemp");
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const status = document.querySelector("#status");
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
    const temp = data.currentConditions.temp;
    currentTemp.innerHTML = `The current temperature in ${searchInput.value} is ${temp}`;

    const temp2 = data.days[1].temp;
    tomorrowTemp.innerHTML = `Tomorrows temperature will be ${temp2}`;

    }
})
    .catch(function(error){
        console.log("Error fetching temperature:", error);
        status.innerHTML = "Couldnt fetch temperature, please check spelling.";
        
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
   