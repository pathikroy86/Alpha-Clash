document.addEventListener('keyup', function (event) {
    const pressedKey = event.key;
    const displayField = document.getElementById("display-alphabet");
    const displayKey = displayField.innerText;
    if (pressedKey.toLowerCase() == displayKey.toLowerCase()) {
        const presentValue = getElementValue("score-field");
        const updatedValue = presentValue + 1;
        document.getElementById("score-field").innerText = updatedValue;
        removeBackground(pressedKey);
        continueGame();
    }
    else {
        const presentLifeValue = getElementValue("life-field");
        const updatedLifeValue = presentLifeValue - 1;
        document.getElementById("life-field").innerText = updatedLifeValue;
        if (updatedLifeValue === 0) {
            gameOver();
        }
    }
})

function continueGame() {
    const randomAlphabet = generateRandomAlphabet();
    const randomAlphabetUpper = randomAlphabet.toUpperCase();
    const displayAlpahbet = document.getElementById("display-alphabet");
    displayAlpahbet.innerText = randomAlphabetUpper;
    backgroundChange(randomAlphabet);
}

function play() {
    hideSection("home-screen");
    showElement("playground");
    hideSection("game-over");
    setElementValue("score-field", 0);
    setElementValue("life-field", 5);
    continueGame();
}

function gameOver() {
    hideSection("playground");
    showElement("game-over");
    const finalScoreField = document.getElementById("final-score");
    const scoreField = document.getElementById("score-field");
    const finalScore = scoreField.innerText;
    finalScoreField.innerText = finalScore;
}
function playAgain() {
    hideSection("game-over");
    showElement("playground");
    document.getElementById("life-field").innerText = 5;
    document.getElementById("score-field").innerText = 0;
}

