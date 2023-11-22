//------------Imports--------------------------------
import pintarPromesas from "./components/pintarPromesas";

//----------------Variables--------------------------------
const cardElement = document.querySelector(".card");

const cityInput = document.querySelector("#city");
const cityBtn = document.querySelector(".search-city");

const city = cityInput.value;

cityBtn.addEventListener("click", ()=> pintarPromesas(cardElement, city));
cityInput.addEventListener("keydown",(event) => {
    if (event.key === "Enter"){
        pintarPromesas(cardElement, city);
    }
});

//------------- Initialization--------------------------------

