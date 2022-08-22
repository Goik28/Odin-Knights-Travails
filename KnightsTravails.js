const chessBoard = [];
for (let line = 0; line < 8; line++) {
  for (let column = 0; column < 8; column++) {
    chessBoard.push([line, column]);
  }
}
console.log(chessBoard);

const knight = () => {
  const knightMoves = (from, to) => {};

  const possibleMoves = (from) => {
    const line = from[0];
    const column = from[1];
    const plays = [
      [line + 2, column + 1],
      [line + 2, column - 1],
      [line - 2, column + 1],
      [line - 2, column - 1],
      [line + 1, column + 2],
      [line - 1, column + 2],
      [line + 1, column - 2],
      [line - 1, column - 2],
    ];
    plays.forEach((value, index) => {
      if (value[0] < 0 || value[1] < 0) {
        plays.splice(index, 1);
      }
      if (value[0] > 7 || value[1] > 7) {
        plays.splice(index, 1);
      }
    });
    return plays;
  };

  const searchMove = (plays, to) => {
    let correct = null;    
    let queue = [...plays];
    queue.forEach((value) => {
      if (value[0] == to[0] && value[1] == to[1]) {
        correct = value;
      }
    });
    if (correct) {
      return correct;
    } else {
        queue.forEach((value) => {
            return searchMove(possibleMoves(value),to);
          });
    }
  };

  return { knightMoves, possibleMoves };
};
