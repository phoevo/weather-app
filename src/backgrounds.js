import fetch from "./fetch";


const background = document.querySelector("body");
const godray = document.querySelector(".god-ray");
const godray2 = document.querySelector(".god-ray.second");
const godray3 = document.querySelector(".god-ray.third");


function backgroundTheme(i){
    if(i === "clear-day"){
        
        godray.style.visibility = "hidden";
        godray2.style.visibility = "hidden";
        godray3.style.visibility = "hidden";


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

        background.style.background = "";
        background.style.backgroundSize = "";
        background.style.backgroundAttachment = "";
        background.style.animation = "";

        background.style.background = 
        `linear-gradient(335deg, rgba(0, 130, 200, 0.7) 100%, rgba(255, 255, 255, 0.7) 100%),
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

    else if(i === "rain"){}
}   

export default backgroundTheme;