// const dropList = document.querySelectorAll(".dropdown select");
// const fromCurrency = document.querySelectorAll(".from select");
// const toCurrency = document.querySelectorAll(".to select");
// for(i=0 ;i < dropList.length; i++){
//     for(currency_code in country_list){
//         let selected;
//         if(i==0) {
//             selected = currency_code=="USD" ? 'selected' : "";
//         }else if(i==1){
//             selected = currency_code=="NPR" ? 'selected' : "";
//         }
//         let options = `<option value="${currency_code}">${currency_code}</option>`;
//         dropList[i].insertAdjacentHTML("beforeend",options);
//     }
// }
// getButton.addEventListener("click", e =>{
//     e.preventDefault();
//     getExhangeRate();
// });
// function getExchangeRate() {
//     const amount = document.querySelector(".amount input");
//     let amountVal = amount.value;
//     if(amountVal == "" || amountVal == "0"){
//         amount.value = "1";
//         amountVal = 1;
//     }
//     let url = `https://v6.exchangerate-api.com/v6/64dfaf3170796fa062508c24/latest/${fromCurrency.value}`;
//     fetch(url).then(response => response.json()).then(result => {
//         let exchangerate = result.conversion_rates[toCurrency.value];
//         let totalExchangeRate = (amountVal + exchangerate).toFixed(2);
//         const exchangeRatetxt = document.querySelector(".exchange-rate");
//         exchangeRatetxt.innerText = `${amountVal}` `${fromCurrency.value}` = `${exchangerate}` `${toCurrency.value}`;
//     })
// }
const dropList = document.querySelectorAll(".dropdown select");
const fromCurrency = document.querySelector(".from select");  // Corrected to single select element
const toCurrency = document.querySelector(".to select");      // Corrected to single select element
const getButton = document.querySelector("button");
const exchangeRateTxt = document.querySelector(".exchange-rate");

// Populate dropdowns with currency options
for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected;
        if (i === 0) {
            selected = currency_code === "USD" ? 'selected' : "";
        } else if (i === 1) {
            selected = currency_code === "NPR" ? 'selected' : "";
        }
        let options = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", options);
    }
    dropList[i].addEventListener('change', e => {
        loadFlag(e.target);
    });
}

// Function to load flag based on selected currency
function loadFlag(element) {
    for (let code in country_list) {
        if (code === element.value) {
            let imgTag = element.parentElement.querySelector("img");
            if (imgTag) {  // Ensure imgTag exists
                imgTag.src = `https://www.worldometers.info/img/flags/${country_list[code]}-flag.gif`;
            }
        }
    }
}

// Load exchange rate on page load
window.addEventListener("load", () => {
    getExchangeRate();
});

// Button event listener for exchange rate fetch
getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

// Swap currencies and update flags on swap icon click
const exchangeicon = document.querySelector(".dropdown .icon");
exchangeicon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);  // Update flag after swap
    loadFlag(toCurrency);    // Update flag after swap
    getExchangeRate();       // Update exchange rate
});

// Function to fetch and display exchange rate
function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;

    if (amountVal === "" || amountVal === "0") {
        amount.value = "1";
        amountVal = 1;
    }

    // Get selected values from the dropdowns
    let fromCurrencyVal = fromCurrency.value;
    let toCurrencyVal = toCurrency.value;

    exchangeRateTxt.innerText = "Getting conversion rates.....";

    // API request to get exchange rate
    let url = `https://v6.exchangerate-api.com/v6/bf9db21eccba36e702298553/latest/${fromCurrencyVal}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.conversion_rates[toCurrencyVal];
            let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
            exchangeRateTxt.innerText = `1 ${fromCurrencyVal} = ${exchangeRate} ${toCurrencyVal}`;

            // Update additional information
            document.getElementsByClassName("fromcon")[0].textContent = amount.value;
            document.getElementsByClassName("tocon")[0].textContent = totalExchangeRate;
        })
        .catch(() => {
            exchangeRateTxt.innerText = "Something went wrong";
        });
}


