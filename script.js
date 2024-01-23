document.addEventListener("DOMContentLoaded", function () {
    // Obt elementos del DOM:
    const pesosInput = document.getElementById("pesosInput");
    const convertToEuroBtn = document.getElementById("convertToEuroBtn");
    const clearEuroBtn = document.getElementById("clearEuroBtn");
    const convertToDollarBtn = document.getElementById("convertToDollarBtn");
    const clearDollarBtn = document.getElementById("clearDollarBtn");
    const saveEuroBtn = document.getElementById("saveEuroBtn");
    const saveDollarBtn = document.getElementById("saveDollarBtn");
    const convertedAmountElement = document.getElementById("convertedAmount");
    const convertedValueElement = document.getElementById("convertedValue");
    const euroDisplay = document.getElementById("euroDisplay");
    const euroValueElement = document.getElementById("euroValue");
    const dollarDisplay = document.getElementById("dollarDisplay");
    const dollarValueElement = document.getElementById("dollarValue");
    const storedPesosElement = document.getElementById("storedPesos");
    const storedEuroElement = document.getElementById("storedEuro");
    const storedDollarElement = document.getElementById("storedDollar");

    // Inicializar contadores:
    let pesosValue = JSON.parse(localStorage.getItem("pesos")) || 0;
    let euroValue = JSON.parse(localStorage.getItem("euro")) || 0;
    let dollarValue = JSON.parse(localStorage.getItem("dollar")) || 0;

    // Actualizar la pantalla de pesos:
    function updatePesosDisplay() {
        pesosInput.value = "";
    }

    // Actualizar la pantalla de euros:
    function updateEuroDisplay() {
        euroValueElement.textContent = euroValue;
    }

    // Actualizar la pantalla de dólares:
    function updateDollarDisplay() {
        dollarValueElement.textContent = dollarValue;
    }

    // Función - Convertir pesos a euros:
    function convertToEuro() {
        const conversionRate = 880;
        const pesos = parseFloat(pesosInput.value);
        const euros = pesos / conversionRate;
        euroValue += euros;
        pesosValue += pesos;
        updateEuroDisplay();
        updatePesosDisplay();
        updateStoredValues();
        updateConvertedAmount(euros, "Euros");
        saveToStorage();
    }

    // Función - Convertir pesos a dólares:
    function convertToDollar() {
        const conversionRate = 1250;
        const pesos = parseFloat(pesosInput.value);
        const dollars = pesos / conversionRate;
        dollarValue += dollars;
        pesosValue += pesos;
        updateDollarDisplay();
        updatePesosDisplay();
        updateStoredValues();
        updateConvertedAmount(dollars, "Dólares");
        saveToStorage();
    }

    // Funciones para limpiar y volver a calcular en euros y dolares:
    function clearEuro() {
        euroValue = 0;
        updateEuroDisplay();
        updateStoredValues();
        saveToStorage();
    }

    function clearDollar() {
        dollarValue = 0;
        updateDollarDisplay();
        updateStoredValues();
        saveToStorage();
    }

    // Mostrar la cantidad convertida:
    function updateConvertedAmount(amount, currency) {
        convertedValueElement.textContent = amount.toFixed(2);
        convertedAmountElement.textContent = `Cantidad Convertida a ${currency.charAt(0).toUpperCase() + currency.slice(1)}: `;
    }

    // Guardar en el almacenamiento local:
    function saveToStorage() {
        localStorage.setItem("pesos", JSON.stringify(pesosValue));
        localStorage.setItem("euro", JSON.stringify(euroValue));
        localStorage.setItem("dollar", JSON.stringify(dollarValue));
        updateStoredValues(); // Actualizar los valores almacenados primero
    }

    // Actualizar los valores almacenados en la tabla
    function updateStoredValues() {
        storedPesosElement.textContent = pesosValue;
        storedEuroElement.textContent = euroValue;
        storedDollarElement.textContent = dollarValue;
    }

    // Event-listeners
    convertToEuroBtn.addEventListener("click", convertToEuro);
    clearEuroBtn.addEventListener("click", clearEuro);
    saveEuroBtn.addEventListener("click", saveToStorage);

    convertToDollarBtn.addEventListener("click", convertToDollar);
    clearDollarBtn.addEventListener("click", clearDollar);
    saveDollarBtn.addEventListener("click", saveToStorage);

    // Cargar valores almacenados:
    updatePesosDisplay();
    updateEuroDisplay();
    updateDollarDisplay();
    updateStoredValues();
});







