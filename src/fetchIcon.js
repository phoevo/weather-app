function checkIcon(icon){
    if(icon === "clear-day"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    }else if(icon === "partly-cloudy-day"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

    }else if(icon === "clear-night"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    }else if(icon === "partly-cloudy-night"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;

    }else if(icon === "cloudy"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;

    }else if(icon === "wind"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-wind"></i>`;

    }else if(icon === "rain"){
        currentTempIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;

    }else if (icon === "snow"){
        currentTempIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
    }


  }

  export default checkIcon;