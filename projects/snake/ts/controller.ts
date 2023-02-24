
var Board:HTMLElement[][] = [];
var boardElement:HTMLElement = <HTMLElement> document.getElementById("game-board");


for (let i = 0; i < 10; i++) {
    Board.push([]);
    for (let j = 0; j < 10; j++) {
        var temp = document.createElement("div");
        console.log(temp);
        boardElement.appendChild(temp);
        Board[i].push(temp);
         
    }
    
}