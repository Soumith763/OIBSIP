const convertButton = document.getElementById('convertButton');
const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unit');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const temp = parseFloat(tempInput.value);
    const unit = unitSelect.value;

    if (isNaN(temp)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;

    if (unit === 'celsius') {
        convertedTemp = {
            fahrenheit: (temp * 9/5) + 32,
            kelvin: temp + 273.15
        };
    } else if (unit === 'fahrenheit') {
        convertedTemp = {
            celsius: (temp - 32) * 5/9,
            kelvin: (temp - 32) * 5/9 + 273.15
        };
    } else if (unit === 'kelvin') {
        convertedTemp = {
            celsius: temp - 273.15,
            fahrenheit: (temp - 273.15) * 9/5 + 32
        };
    }

    resultDiv.textContent = `Converted Temperature:
        Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)}
        Celsius: ${convertedTemp.celsius.toFixed(2)}
        Kelvin: ${convertedTemp.kelvin.toFixed(2)}`;
});