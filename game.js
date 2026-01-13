function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update UI
    document.getElementById('user-choice').innerText = `Your Choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer Choice: ${computerChoice}`;

    const outcomeElement = document.getElementById('outcome');

    // Logic to determine winner
    if (userChoice === computerChoice) {
        outcomeElement.innerText = "It's a Tie! 🤝";
        outcomeElement.style.color = "yellow";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        outcomeElement.innerText = "You Win! 🎉";
        outcomeElement.style.color = "#2ecc71";
    } else {
        outcomeElement.innerText = "Computer Wins! 🤖";
        outcomeElement.style.color = "#e74c3c";
    }
}