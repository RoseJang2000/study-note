// ! 컴퓨터 오브젝트
const computer  = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
}

// ! 사용자 오브젝트
const user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
}

// ! 게임 오브젝트
const game = {
    isComputerTurn: true,
    shotsLeft: 15
}

const showText = (str) => {
    let textElem = document.getElementById('text');
    textElem.textContent = str;
}

const updateComputerScore = (score) => {
    computer.score += score;

    let comScoreElem = document.getElementById('computer-score');
    comScoreElem.textContent = computer.score;
}

const updateUserScore = (score) => {
    user.score += score;

    let userScoreElem = document.getElementById('user-score');
    userScoreElem.textContent = user.score;
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

const updateAI = () => {
    let diff = user.score - computer.score;

    if (diff >= 10) {
        computer.percent2 = 0.7;
        computer.percent3 = 0.43;
    } else if (diff >= 6) {
        computer.percent2 = 0.6;
        computer.percent3 = 0.38;
    } else if (diff <= -10) {
        computer.percent2 = 0.3;
        computer.percent3 = 0.23;
    } else if (diff <= -6) {
        computer.percent2 = 0.4;
        computer.percent3 = 0.28;
    } else {
        computer.percent2 = 0.5;
        computer.percent3 = 0.33;
    }
}

// * 컴퓨터 버튼 클릭 이벤트
const onComputerShoot = () => {
    if (!game.isComputerTurn) return;

    updateAI();

    let comScoreElem = document.getElementById('computer-score');

    let computerButtons = document.getElementsByClassName('btn-computer');
    let userButtons = document.getElementsByClassName('btn-user');

    let shootType = Math.random() < 0.5 ? 2 : 3;

    if (Math.random() < computer['percent' + shootType]) {
        showText(`컴퓨터가 ${shootType}점슛을 성공시켰습니다!`);
        updateComputerScore(shootType);
    }

    game.isComputerTurn = false;
    disableComputerButtons(true);
    disableUserButtons(false);
}

// * 유저 버튼 클릭 이벤트
const onUserShoot = (shootType) => {
    if(game.isComputerTurn) return;

    let userScoreElem = document.getElementById('user-score');

    let computerButtons = document.getElementsByClassName('btn-computer');
    let userButtons = document.getElementsByClassName('btn-user');

    if (Math.random() < user['percent' + shootType]) {
        showText(`${shootType}점슛이 성공했습니다!`);
        updateUserScore(shootType);
    } else {
        showText(`${shootType}점슛이 실패했습니다.`)
    }

    game.shotsLeft--;

    let shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.textContent = game.shotsLeft;

    if (game.shotsLeft === 0) {
        if (user.score > computer.score) showText('승리했습니다!');
        else if (user.score < computer.score) showText('아쉽게도 졌습니다..');
        else showText('비겼습니다.')

        disableComputerButtons(true);
        disableUserButtons(true);
    } else {
        game.isComputerTurn = true;
        disableComputerButtons(false);
        disableUserButtons(true);
    }

}