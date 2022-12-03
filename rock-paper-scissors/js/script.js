const ROCK = '바위';
const PAPER = '보';
const SCISSORS = '가위';

let userInput = prompt('가위, 바위, 보!');

if (userInput !== ROCK && userInput !== PAPER && userInput !== SCISSORS) {
    alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
} else {
    let comInput;

    let random = Math.random();
    if (random < 0.33) comInput = SCISSORS;
    else if (random < 0.66) comInput = ROCK;
    else comInput = PAPER;

    switch (userInput) {
        case SCISSORS:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터와 비겼습니다.`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터에게 졌습니다...`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터를 이겼습니다!!`);
                    break;
            }
            break;
        case ROCK:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터를 이겼습니다!!`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터와 비겼습니다.`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터에게 졌습니다...`);
                    break;
            }
            break;
        default:
            switch (comInput) {
                case SCISSORS:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터에게 졌습니다...`);
                    break;
                case ROCK:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터를 이겼습니다!!`);
                    break;
                default:
                    alert(`컴퓨터 : ${comInput} -> 컴퓨터와 비겼습니다.`);
                    break;
            }
            break;
    }
}