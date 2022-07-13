const board = [null, null, null, null, null, null, null, null, null];
const scoreBoard = document.getElementById("right");

setX = function(space) {
  board[space] = "x";
}

setO = function(space) {
  board[space] = "o";
}

checkBoard = function () {
  if (!board.includes(null)) {
    scoreBoard.innerHTML = 
      "<h1>DRAW</h1";
  }
  checkWins();
}

checkWins = function () {
  var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  wins.forEach(win => {
    checkX(win[0], win[1], win[2]);
    checkO(win[0], win[1], win[2]);
  })
}

checkX = function (first, second, third) {
  if (board[first] == 'x' && board[second] == 'x' && board[third] =='x') {
    scoreBoard.innerHTML = 
    "<h1>X WINS</h1>";
    setTimeout(colorWin(first.toString(), second.toString(), third.toString()), 500);
    setTimeout(noTurn, 250);
  }
}

checkO = function (first, second, third) {
  if (board[first] == 'o' && board[second] == 'o' && board[third] =='o') {
    scoreBoard.innerHTML = 
    "<h1>O WINS</h1>";
    setTimeout(colorWin(first.toString(), second.toString(), third.toString()), 500);
    setTimeout(noTurn, 250);
  }
}


colorWin = function (first, second, third) {
  document.getElementById(first).classList.add('win');
  document.getElementById(second).classList.add('win');
  document.getElementById(third).classList.add('win');
}

toggleX = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("x-mark");
    x.src = 'assets/x.svg';
    evt.currentTarget.appendChild(x);
    setX(evt.currentTarget.id.split("-"));
    oTurn();
    console.log(board);
    checkBoard();
    setTimeout(showMarks, 200);
  }
}

showX = function (evt) {
  evt.currentTarget.firstChild.classList.add("show");
}

toggleO = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("o-mark");
    x.src = 'assets/o.svg';
    evt.currentTarget.appendChild(x);
    setO(evt.currentTarget.id.split("-"));
    xTurn();
    console.log(board);
    checkBoard();
    setTimeout(showMarks, 200);
  }
}

showMarks = function () {
  document.querySelectorAll(".square").forEach(square => {
    if (square.children.length > 0) {
      square.firstChild.classList.add("show");
    }
  })
}

xTurn = function () {
  document.querySelectorAll(".square").forEach(square => {
    square.removeEventListener('click', toggleX );
    square.removeEventListener('click', toggleO );
    square.addEventListener('click', toggleX );
  })
}

oTurn = function () {
  document.querySelectorAll(".square").forEach(square => {
    square.removeEventListener('click', toggleX);
    square.removeEventListener('click', toggleO);
    square.addEventListener('click', toggleO);
  })
}

noTurn = function () {
  document.querySelectorAll(".square").forEach(square => {
    square.removeEventListener('click', toggleX);
    square.removeEventListener('click', toggleO);
  })
}

newGame = function () {
  board.forEach((element, index) => {
    board[index] = null;
  })
  document.querySelectorAll(".square").forEach(square => {
    square.classList.remove("win");
    if (square.children.length > 0) {
      console.log(square);
      square.removeChild(square.firstElementChild);
    }
  })
  scoreBoard.innerHTML = "";
  xTurn();
}



// testSquare.addEventListener('click', () => toggleX(testSquare));
  
// document.querySelectorAll('.square').addEventListener