// We defined a variable celciusInput to get the Id from the html "cnvrtCelcius"
let celciusInput = document.getElementById('cnvrtCelcius');
// We defined a variable kelvinInput to get the Id from the html "cnvrtKelvin"
let kelvinInput = document.getElementById('cnvrtKelvin');

// We called the variable "celciusInput" using method ".addEventListener" when it clicked it would convert the value
// there would be a function() of:
//'fahrenInput'.value - to get the value of the user input
// 'convertedValue' - which results the converted value of fahrenheit,
// where it calculates the (°C)celcius and (°K)kelvin value of the user input
// we used .toFixed(2) to make the decimals into hundredths decimal 

celciusInput.addEventListener('click', function(){
    let fahrenInput  = document.getElementById('fahrenInput').value;
    document.getElementById('convertedValue').value = (fahrenInput  - 32 * 5/9).toFixed(2) + "°C";
})
kelvinInput.addEventListener('click', function(){
    let fahrenInput = document.getElementById('fahrenInput').value;
    document.getElementById('convertedValue').value =  (fahrenInput  - 32 / 1.8 + 273.15).toFixed(2) + "°K";
})