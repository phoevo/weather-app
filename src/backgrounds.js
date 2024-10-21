import fetch from "./fetch";


const background = document.querySelector("body");
const godray = document.querySelector(".god-ray");
const godray2 = document.querySelector(".god-ray.second");
const godray3 = document.querySelector(".god-ray.third");
const godray4 = document.querySelector(".god-ray.fourth");

const page = document.querySelector(".page");
const rainAll = document.querySelector(".rainAll");
const rain = document.querySelector(".rain");
const snowAll = document.querySelector(".snowAll");
const snow = document.querySelector(".snow");




function backgroundTheme(i){
    if(i === "clear-day"){
        
        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray4.style.visibility = "hidden";

        page.style.opacity = "1";

        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "hidden";

        



        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";
 
        background.style.background = `linear-gradient(335deg, rgba(0,130,255,0.8) 70%, rgba(255,255,255,0.7) 100%)`;
        background.style.backgroundSize = "140% 140%";
        background.style.backgroundAttachment = "fixed";
        background.style.animation = "0s";
    }

    else if (i === "partly-cloudy-day"){

        godray.style.visibility = "visible";
        godray2.style.visibility = "visible";
        godray3.style.visibility = "visible";
        godray4.style.visibility = "visible";

        page.style.opacity = "1";
        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "hidden";




        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";

        background.style.background = 
        `linear-gradient(335deg, rgba(0, 130, 180, 0.6) 100%, rgba(255, 255, 255, 0.7) 100%),
        linear-gradient(110deg, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 0) 90%)`;

        background.style.backgroundSize = "440% 140%, 190% 100%";
        background.style.backgroundAttachment = "fixed";
        background.style.animation = "moveGrey 10s ease-in-out infinite";

        
        background.style.innerHTML = `
            @keyframes moveGrey {
            0% { background-position: 0% 0%, 0% 0%; }
            50% { background-position: 0% 0%, 100% 100%; }
            100% { background-position: 0% 0%, 0% 0%; }
            }`;

    }

    else if(i === "clear-night"){
        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray4.style.visibility = "hidden";

        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "hidden";



        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";
        



        background.style.backgroundColor = "rgb(10, 10, 30)";
        background.style.backgroundImage = 
        `radial-gradient(2px 2px at 20% 30%, #fff, rgba(155, 155, 155, 0)), radial-gradient(2px 2px at 25% 35%, #fff, rgba(155, 155, 155, 0)),
radial-gradient(1px 1px at 60% 50%, #fff, rgba(155, 155, 155, 0)), radial-gradient(1px 1px at 15% 15%, #fff, rgba(155, 155, 155, 0)),
radial-gradient(2px 2px at 80% 80%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 40% 90%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 70% 20%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 10% 60%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 90% 10%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 30% 75%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 50% 10%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 85% 40%, #fff, rgba(255, 255, 255, 0))`;
        background.style.backgroundSize = "100% 100%";
        background.style.animation = "0s";
        page.style.opacity = "0.7";
    }

    else if(i === "partly-cloudy-night"){
        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray3.style.visibility = "hidden";

        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "hidden";



        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";



        background.style.backgroundColor = "rgb(10, 10, 20)";
        background.style.backgroundImage = 
        `radial-gradient(2px 2px at 20% 30%, #fff, rgba(155, 155, 155, 0)), radial-gradient(2px 2px at 25% 35%, #fff, rgba(155, 155, 155, 0)),
radial-gradient(1px 1px at 60% 50%, #fff, rgba(155, 155, 155, 0)), radial-gradient(1px 1px at 15% 15%, #fff, rgba(155, 155, 155, 0)),
radial-gradient(2px 2px at 80% 80%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 40% 90%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 70% 20%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 10% 60%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 90% 10%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 30% 75%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(2px 2px at 50% 10%, #fff, rgba(255, 255, 255, 0)),
radial-gradient(1px 1px at 85% 40%, #fff, rgba(255, 255, 255, 0))`;
        background.style.backgroundSize = "100% 100%";
        background.style.animation = "0s";
        page.style.opacity = "1";


    }

    else if (i === "cloudy"){
        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray4.style.visibility = "hidden";

        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "hidden";



        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";


        background.style.backgroundColor = "rgb(10, 10, 30)";
         background.style.background = 
        `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.7) 100%)`
        ;

    }

    else if(i === "rain"){

        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray4.style.visibility = "hidden";

        rainAll.style.visibility = "visible";
        snowAll.style.visibility = "hidden";


        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";
        background.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
        background.style.backgroundSize = "100% 100%";



        background.style.backgroundImage = "linear-gradient(0deg, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 100%)";


    }


    else if(i === "snow"){

        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";
        godray4.style.visibility = "hidden";

        rainAll.style.visibility = "hidden";
        snowAll.style.visibility = "visible"

        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";
        background.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
        background.style.backgroundSize = "100% 100%";



        background.style.backgroundImage = "linear-gradient(0deg, rgba(255,255,255,0.7) 20%, rgba(0,0,0,0.2) 100%)";


    }
}   

export default backgroundTheme;