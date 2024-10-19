import checkIcon from "./fetchIcon";
const tomorrowTemp = document.querySelector("#tomorrowTemp");
const tomorrowDate = document.querySelector("#tomorrowDate");
const tomorrowIcon = document.querySelector("#tomorrowIcon");
const tomorrowDesc = document.querySelector("#tomorrowDesc");

const forecast0 = document.querySelector("#forecast0");
const forecast2 = document.querySelector("#forecast2");
const forecast4 = document.querySelector("#forecast4");
const forecast6 = document.querySelector("#forecast6");
const forecast8 = document.querySelector("#forecast8");
const forecast10 = document.querySelector("#forecast10");
const forecast12= document.querySelector("#forecast12");
const forecast14= document.querySelector("#forecast14");
const forecast16= document.querySelector("#forecast16");
const forecast18= document.querySelector("#forecast18");
const forecast20 = document.querySelector("#forecast20");
const forecast22 = document.querySelector("#forecast22");
const forecast24 = document.querySelector("#forecast24");

const DATtemp = document.querySelector("#DATtemp");
const DATdate = document.querySelector("#DATdate");
const DATicon = document.querySelector("#DATicon");

const overmorrowTemp = document.querySelector("#overmorrowTemp");
const overmorrowDate = document.querySelector("#overmorrowDate");
const overmorrowIcon = document.querySelector("#overmorrowIcon");

const lastDayTemp = document.querySelector("#lastDayTemp");
const lastDayDate = document.querySelector("#lastDayDate");
const lastDayIcon = document.querySelector("#lastDayIcon");


function fetchOtherTemp(data, getFormattedDate, checkIcon){

    function fetch12(){
        forecast0.innerHTML = data.days[0].hours[0].temp;
        forecast2.innerHTML = data.days[0].hours[2].temp;
        forecast4.innerHTML = data.days[0].hours[4].temp;
        forecast6.innerHTML = data.days[0].hours[6].temp;
        forecast8.innerHTML = data.days[0].hours[8].temp;
        forecast10.innerHTML = data.days[0].hours[10].temp;
        forecast12.innerHTML = data.days[0].hours[12].temp;
        forecast14.innerHTML = data.days[0].hours[14].temp;
        forecast16.innerHTML = data.days[0].hours[16].temp;
        forecast18.innerHTML = data.days[0].hours[18].temp;
        forecast20.innerHTML = data.days[0].hours[20].temp;
        forecast22.innerHTML = data.days[0].hours[22].temp;
        forecast24.innerHTML = data.days[1].hours[0].temp;

    }

    fetch12();

    const tempTom = data.days[1].temp;
    tomorrowTemp.innerHTML = tempTom;

    const dateTom = data.days[1].datetime;
    tomorrowDate.innerHTML = getFormattedDate(dateTom); 

    const descTom = data.days[1].conditions;
    tomorrowDesc.innerHTML = descTom;

    const iconTom = data.days[1].icon;
    tomorrowIcon.innerHTML = iconTom;
    checkIcon(iconTom, tomorrowIcon);


    const tempDat = data.days[2].temp;
    DATtemp.innerHTML = tempDat;

    const dateDat = data.days[2].datetime;
    DATdate.innerHTML = getFormattedDate(dateDat);

    const iconDat= data.days[2].icon;
    DATicon.innerHTML = iconDat;
    checkIcon(iconDat, DATicon);


    const tempOver = data.days[3].temp;
    overmorrowTemp.innerHTML = tempOver;

    const dateOver = data.days[3].datetime;
    overmorrowDate.innerHTML = getFormattedDate(dateOver); 

    const iconOver = data.days[3].icon;
    overmorrowIcon.innerHTML = iconOver;
    checkIcon(iconOver, overmorrowIcon);


    const tempLast = data.days[4].temp;
    lastDayTemp.innerHTML = tempLast;

    const dateLast = data.days[4].datetime;
    lastDayDate.innerHTML = getFormattedDate(dateLast); 

    const iconLast = data.days[4].icon;
    lastDayIcon.innerHTML = iconLast;
    checkIcon(iconLast, lastDayIcon);


}

export default fetchOtherTemp;
 