function hideSection(elementID) {
    const getElement = document.getElementById(elementID);
    getElement.classList.add('hidden');
}

function showElement(elementID) {
    const getElement = document.getElementById(elementID);
    getElement.classList.remove('hidden');
}

function generateRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    const randAlphabet = alphabetArray[index];
    return randAlphabet;
}

function backgroundChange(inputID) {
    const getElement = document.getElementById(inputID);
    getElement.classList.add('bg-amber-600');
}

function removeBackground(inputID) {
    const getElement = document.getElementById(inputID);
    getElement.classList.remove('bg-amber-600');
}

function getElementValue(elementID) {
    const elementField = document.getElementById(elementID);
    const elementValueText = elementField.innerText;
    const elementValue = parseInt(elementValueText);
    return elementValue;
}
function setElementValue(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}
