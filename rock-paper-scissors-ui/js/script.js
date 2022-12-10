const ROCK = '바위';
const PAPER = '보';
const SCISSORS = '가위';


 function onButtonClick(userInput) {
    let comInput;
    let random = Math.random();

    if (random < 0.33) comInput = SCISSORS;
    else if (random < 0.66) comInput = ROCK;
    else comInput = PAPER;

    let result = '컴퓨터 : ' + comInput;

    if (userInput === SCISSORS) {
        if (comInput === SCISSORS) result += ' - 비겼습니다.';
        else if (comInput === ROCK) result += ' - 졌습니다..';
        else result += ' - 이겼습니다!'
    } else if (userInput === ROCK) {
        if (comInput === SCISSORS) result += ' - 이겼습니다!';
        else if (comInput === ROCK) result += ' - 비겼습니다.';
        else result += ' - 졌습니다..'
    } else {
        if (comInput === SCISSORS) result += ' - 졌습니다..';
        else if (comInput === ROCK) result += ' - 이겼습니다!';
        else result += ' - 비겼습니다.'
    }
    
    alert(result);
}