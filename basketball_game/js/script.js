let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shotsLeft = 15;

const onComputerShoot = () => {
    if (!isComputerTurn) return;
    else {
        let comScoreElem = document.getElementById('computer-score');
        let textElem = document.getElementById('text');

        let computerButtons = document.getElementsByClassName('btn-computer');
        let userButtons = document.getElementsByClassName('btn-user');

        let shootType = Math.random() < 0.5 ? 2 : 3;

        if (shootType === 2) {
            if (Math.random() < 0.5) {
                textElem.textContent = '컴퓨터가 2점슛을 성공시켰습니다!';

                comScore += 2;
                comScoreElem.textContent = comScore;
            } else textElem.textContent = '컴퓨터가 2점슛을 실패했습니다.';
        } else {
            if (Math.random() < 0.33) {
                textElem.textContent = '컴퓨터가 3점슛을 성공시켰습니다!';

                comScore += 3;
                comScoreElem.textContent = comScore;
            }
            else textElem.textContent = '컴퓨터가 3점슛을 실패했습니다.'
        }

        isComputerTurn = false;
        
        computerButtons[0].disabled = true;
        for (let i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled = false;
        }
    }
}

const onUserShoot = (shootType) => {
    if(isComputerTurn) return;
    else {
        let userScoreElem = document.getElementById('user-score');
        let textElem = document.getElementById('text');

        let computerButtons = document.getElementsByClassName('btn-computer');
        let userButtons = document.getElementsByClassName('btn-user');

        if (shootType === 2) {
            if (Math.random() < 0.5) {
                textElem.textContent = '2점슛이 성공했습니다!';

                userScore += 2;
                userScoreElem.textContent = userScore;
            } else textElem.textContent = '2점슛이 실패했습니다.';
        } else {
            if (Math.random() < 0.33) {
                textElem.textContent = '3점슛이 성공했습니다!';

                userScore += 3;
                userScoreElem.textContent = userScore;
            }
            else textElem.textContent = '3점슛이 실패했습니다.'
        }

        shotsLeft--;

        let shotsLeftElem = document.getElementById('shots-left');
        shotsLeftElem.textContent = shotsLeft;

        if (shotsLeft === 0) {
            if (userScore > comScore) textElem.textContent = '승리했습니다!';
            else if (userScore < comScore) textElem.textContent = '아쉽게도 졌습니다..';
            else textElem.textContent = '비겼습니다.'

            computerButtons[0].disabled = true;
            for (let i = 0; i < userButtons.length; i++) {
                userButtons[i].disabled = true;
            }
        } else {
            isComputerTurn = true;

            computerButtons[0].disabled = false;
            for (let i = 0; i < userButtons.length; i++) {
                userButtons[i].disabled = true;
            }
        }
    }
}