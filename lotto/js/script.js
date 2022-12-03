let list = [];

for (let i = 1; i <= 45; i++) {
    list.push(i);
}

let result = [];


const lottoClick = function() {
    if (result.length >= 6) {
        alert('모든 번호를 추첨 완료했습니다!');
    } else {
        const numbox = document.getElementById('numbox');

        let index = Math.floor(Math.random() * list.length);
        result.push(list[index]);

        let num = document.createElement('span');
        num.className = 'ball'
        num.textContent = list[index];
        numbox.append(num);

        list.splice(index, 1);

        // console.log(result);
    }
}

// const lottoClick = function() {
//     const numbox = document.getElementById('numbox');
//     let result = [];

//     for (let i = 0; i < 6; i++) {
//         let index = Math.floor(Math.random() * list.length);

//         result.push(list[index]);

//         list.splice(index, 1);
//     }

//     result.sort((a, b) => a - b);

//     console.log(result);

//     // for (let i = 0; i < 6; i++) {
//     //     document.write('<span class="ball">' + result[i] + '</span>');
//     // }
    

//     for (let i = 0; i < 6; i++) {
//         let num = document.createElement('span');
//         num.className = 'ball';
//         num.textContent = result[i];
//         numbox.append(result[i]);
//     }
// }