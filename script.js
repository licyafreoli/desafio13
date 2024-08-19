let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guess').value;
    const resultText = document.getElementById('result');

    try {
        const guess = parseInt(guessInput);

        if (isNaN(guess)) {
            throw new Error('Apenas números são aceitos.');
        }

        if (guess < 1 || guess > 10) {
            resultText.textContent = 'Por favor, insira um número entre 1 e 10.';
            return;
        }

        if (guess === randomNumber) {
            resultText.textContent = 'Parabéns! Você acertou!';
            resultText.style.color = '#4CAF50';
        } else if (guess < randomNumber) {
            resultText.textContent = 'O número é maior!';
            resultText.style.color = '#f8e6a1';
        } else {
            resultText.textContent = 'O número é menor!';
            resultText.style.color = '#f8e6a1';
        }
    } catch (error) {
        resultText.textContent = error.message;
        resultText.style.color = '#FF0000';
    }
}
