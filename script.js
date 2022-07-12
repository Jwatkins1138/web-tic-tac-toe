// var testSquare = document.getElementById("square1A");
toggleX = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("x-mark");
    x.src = 'assets/x.svg';
    evt.currentTarget.appendChild(x);
    x.classList.add("show");
  }
}

toggleO = function (evt) {
  if (evt.currentTarget.children.length == 0) {
    x = document.createElement("img");
    x.classList.add("o-mark");
    x.src = 'assets/o.svg';
    evt.currentTarget.appendChild(x);
    x.classList.add("show");
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
    square.removeEventListener('click', toggleX );
    square.removeEventListener('click', toggleO );
    square.addEventListener('click', toggleO );
  })
}



// testSquare.addEventListener('click', () => toggleX(testSquare));
  
// document.querySelectorAll('.square').addEventListener