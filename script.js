const board = [null, null, null, null, null, null, null, null, null];

setX = function(space) {
  board[space] = "x";
}

setO = function(space) {
  board[space] = "o";
}

checkBoard = function () {

  if (!board.includes(null)) {
    document.getElementById("right").innerHTML = 
      "<h1>DRAW</h1";
  }
}

toggleX = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("x-mark");
    x.src = 'assets/x.svg';
    evt.currentTarget.appendChild(x);
    x.classList.add("show");
    setX(evt.currentTarget.id.split("-"));
    oTurn();
    console.log(board);
    checkBoard();
  }
}

toggleO = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("o-mark");
    x.src = 'assets/o.svg';
    evt.currentTarget.appendChild(x);
    x.classList.add("show");
    setO(evt.currentTarget.id.split("-"));
    xTurn();
    console.log(board);
    checkBoard();
  }
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



// testSquare.addEventListener('click', () => toggleX(testSquare));
  
// document.querySelectorAll('.square').addEventListener