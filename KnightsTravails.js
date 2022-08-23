/*const chessBoard = [];
for (let line = 0; line < 8; line++) {
  for (let column = 0; column < 8; column++) {
    chessBoard.push([line, column]);
  }
}
console.log(chessBoard);*/

class Play {
  coordinate = [];
  nextPlays = [];

  constructor(coordinate) {
    this.coordinate = coordinate;
  }
}

class Knight {
  knightFrom = [];
  knightTo = [];
  movesTree = [];

  knightMoves(from, to) {
    if (from == to) {
      return "Error- You are already there!";
    }
    this.knightFrom = new Play(from);
    this.knightTo = new Play(to);
    this.createPath(this.knightFrom, this.knightTo);
    console.log("yeah");
  }

  createNextPlays(play) {
    const line = play.coordinate[0];
    const column = play.coordinate[1];
    const allPlays = [
      [line + 2, column + 1],
      [line + 2, column - 1],
      [line - 2, column + 1],
      [line - 2, column - 1],
      [line + 1, column + 2],
      [line - 1, column + 2],
      [line + 1, column - 2],
      [line - 1, column - 2],
    ];
    const possiblePlays = allPlays.filter((value) => {
      if (value[0] >= 0 && value[0] < 8) {
        if (value[1] >= 0 && value[1] < 8) {
          return true;
        }
      }
      return false;
    });
    const nextPlays = possiblePlays.map((value) => {
      return new Play(value);
    });
    return nextPlays;
  }

  searchMove(movesTree, to) {
    for (let index = 0; index < movesTree.length; index++) {
      const element = movesTree[index];
      if (
        element.coordinate[0] == to.coordinate[0] &&
        element.coordinate[1] == to.coordinate[1]
      ) {
        return true;
      }
    }
    return false;
  }

  createPath(play, to) {
    play.nextPlays = this.createNextPlays(play);
    if (this.searchMove(play.nextPlays, to)) {
      return "found";
    }
    const queue = [play.nextPlays];
    let pointer;
    while (true) {
      pointer = queue.shift();
      for (let index = 0; index < pointer.length; index++) {
        const element = pointer[index];
        element.nextPlays = this.createNextPlays(element);
        if (this.searchMove(element.nextPlays, to)) {
          return console.log(element);
        } else {
          queue.push(element.nextPlays);
        }
      }
    }
  }
}

const knight = new Knight();
knight.knightMoves([3, 3], [4, 3]);
