let area = document.querySelector('#area__items');
let boxes = document.querySelectorAll('.box');
let win = document.querySelectorAll('.win');
let move = 0;

area.addEventListener('click', function (e) {
    if (move % 2 === 0) {
        e.target.innerHTML = 'X';
        e.target.setAttribute('disabled', true)
    } else {
        e.target.innerHTML = 'O';
        e.target.setAttribute('disabled', true)
    }
    move++;
    check();
});

function check() {

    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') {
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].innerHTML === 'X') {
                    console.log('boxes', boxes[i].className = 'green')
                }
                boxes[i].setAttribute('disabled', true)
            }
            win[0].innerHTML = 'Winner: X';
            setTimeout(() => {
                location.reload();
            }, 2000)
        } else if (boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O') {
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].innerHTML === 'O') {
                    console.log('boxes', boxes[i].className = 'green')
                }
                boxes[i].setAttribute('disabled', true)
            }
            win[0].innerHTML = 'Winner: O';
            setTimeout(() => {
                location.reload();
            }, 2000)
        } else {
            let box = 0
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].innerHTML !== '') {
                    box++
                }
            }
            if (box === 9) {
                win[0].innerHTML = 'Draw'
                setTimeout(() => {
                    location.reload();
                }, 2000)
            }
        }
    }
}
