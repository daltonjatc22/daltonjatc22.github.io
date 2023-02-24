var Board = [];
var boardElement = document.getElementById("game-board");
for (var i = 0; i < 10; i++) {
    Board.push([]);
    for (var j = 0; j < 10; j++) {
        var temp = document.createElement("div");
        console.log(temp);
        boardElement.appendChild(temp);
        Board[i].push(temp);
    }
}
