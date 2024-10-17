function checkIcon(i, e){
    if(i === "clear-day"){
        e.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    }else if(i === "partly-cloudy-day"){
        e.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

    }else if(i === "clear-night"){
        e.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    }else if(i === "partly-cloudy-night"){
        e.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;

    }else if(i === "cloudy"){
        e.innerHTML = `<i class="fa-solid fa-cloud"></i>`;

    }else if(i === "wind"){
        e.innerHTML = `<i class="fa-solid fa-wind"></i>`;

    }else if(i === "rain"){
        e.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;

    }else if (i === "snow"){
        e.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }


  }

  export default checkIcon;