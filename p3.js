// document.getElementById('reset').innerHTML = "";
let CelciusInput = document.querySelector('#Celcius > input')

let kelvinInput = document.querySelector('#kelvin > input')

let FahernheitInput = document.querySelector('#Fahernheit > input')

let btn = document.querySelector('.reset button ')


function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

CelciusInput.addEventListener('input', function () {
  let cTemp = parseFloat(CelciusInput.value)
  let fTemp = (cTemp * (9 / 5)) + 32;
  let kTemp = cTemp + 273.15;

  FahernheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
})


kelvinInput.addEventListener('input', function () {
  let kTemp = parseFloat(kelvinInput.value)
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

  CelciusInput.value = roundNumber(cTemp);
  FahernheitInput.value = roundNumber(fTemp);
})



FahernheitInput.addEventListener('input', function () {
  let fTemp = parseFloat(FahernheitInput.value)
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

  CelciusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
})




btn.addEventListener('click', () => {
  CelciusInput.value = "";
  kelvinInput.value = "";
  FahernheitInput.value = "";
})