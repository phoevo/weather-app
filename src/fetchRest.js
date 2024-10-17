import checkIcon from "./fetchIcon";
const tomorrowTemp = document.querySelector("#tomorrowTemp");
const tomorrowDate = document.querySelector("#tomorrowDate");
const tomorrowIcon = document.querySelector("#tomorrowIcon");
const tomorrowDesc = document.querySelector("#tomorrowDesc");

const DATtemp = document.querySelector("#DATtemp");
const DATdate = document.querySelector("#DATdate");
const DATicon = document.querySelector("#DATicon");

const overmorrowTemp = document.querySelector("#overmorrowTemp");
const overmorrowDate = document.querySelector("#overmorrowDate");
const overmorrowIcon = document.querySelector("#overmorrowIcon");



function fetchOtherTemp(data, getFormattedDate, checkIcon){
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


}

export default fetchOtherTemp;