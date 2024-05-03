let boxes = document.querySelectorAll(".box");
let turnO = true;
let result = document.getElementById('result');
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        check();
    })
});

function Reset() {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    result.innerHTML = "";
}

function check() {
    for (let p of winningPatterns) {
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                result.innerHTML = "Player " + p1 + " is winner";
            }
        }
    }
}