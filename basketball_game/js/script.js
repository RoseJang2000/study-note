let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shotsLeft = 15;

const showText = (str) => {
    let textElem = document.getElementById('text');
    textElem.textContent = str;
}

const updateComputerScore = (score) => {
    comScore += score;

    let comScoreElem = document.getElementById('computer-score');
    comScoreElem.textContent = comScore;
}

const updateUserScore = (score) => {
    userScore += score;

    let userScoreElem = document.getElementById('user-score');
    userScoreElem.textContent = userScore;
}

const disableComputerButtons = (flag) => {
    let computerButtons = document.getElementsByClassName('btn-computer');

    computerButtons[0].disabled = flag;
}

const disableUserButtons = (flag) => {
    let userButtons = document.getElementsByClassName('btn-user');

    for (let i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
}

const onComputerShoot = () => {
    if (!isComputerTurn) return;
    else {
        let comScoreElem = document.getElementById('computer-score');

        let computerButtons = document.getElementsByClassName('btn-computer');
        let userButtons = document.getElementsByClassName('btn-user');

        let shootType = Math.random() < 0.5 ? 2 : 3;

        if (shootType === 2) {
            if (Math.random() < 0.5) {
                showText('컴퓨터가 2점슛을 성공시켰습니다!');
                updateComputerScore(2);
            } else showText('컴퓨터가 2점슛을 실패했습니다.');
        } else {
            if (Math.random() < 0.33) {
                showText('컴퓨터가 3점슛을 성공시켰습니다!');
                updateComputerScore(3);
            }
            else showText('컴퓨터가 3점슛을 실패했습니다.');
        }

        isComputerTurn = false;
        disableComputerButtons(true);
        disableUserButtons(false);
    }
}

const onUserShoot = (shootType) => {
    if(isComputerTurn) return;
    else {
        let userScoreElem = document.getElementById('user-score');

        let computerButtons = document.getElementsByClassName('btn-computer');
        let userButtons = document.getElementsByClassName('btn-user');

        if (shootType === 2) {
            if (Math.random() < 0.5) {
                showText('2점슛이 성공했습니다!');
                updateUserScore(2);
            } else showText('2점슛이 실패했습니다.');
        } else {
            if (Math.random() < 0.33) {
                showText('3점슛이 성공했습니다!');
                updateUserScore(3);
            }
            else showText('3점슛이 실패했습니다.')
        }

        shotsLeft--;

        let shotsLeftElem = document.getElementById('shots-left');
        shotsLeftElem.textContent = shotsLeft;

        if (shotsLeft === 0) {
            if (userScore > comScore) showText('승리했습니다!');
            else if (userScore < comScore) showText('아쉽게도 졌습니다..');
            else showText('비겼습니다.')

            computerButtons[0].disabled = true;
            for (let i = 0; i < userButtons.length; i++) {
                userButtons[i].disabled = true;
            }
        } else {
            isComputerTurn = true;
            disableComputerButtons(false);
            disableUserButtons(true);
        }
    }
}