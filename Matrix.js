class Matrix {
  constructor(numRow, numCol) {
    this.matrix = this.generateMatrix(numRow, numCol);
  }

  generateMatrix(numRow, numCol) {
    let matrix = [];
    for (let i = 0; i < numRow; i++) {
      let row = [];
      for (let j = 0; j < numCol; j++) {
        if (i == 0 && j == 0) {
          row.push(1);
        } else if (i == numRow - 1 && j == numCol - 1) {
          row.push(2);
        } else {
          row.push(".");
        }
      }
      matrix.push(row);
    }
    return matrix;
  }
  alter(r, c, v) {
    this.matrix[r][c] = v;
  }
  printRow(rowNum) {
    for (let i = 0; i < this.matrix[rowNum].length; i++) {
      console.log(this.matrix[rowNum][i]);
    }
  }

  printColumn(colNum) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][colNum]);
    }
  }
  print() {
    for (let i = 0; i < this.matrix.length; i++) {
      let line = "";
      for (let j = 0; j < this.matrix[i].length; j++) {
        line += this.matrix[i][j] + "\t";
      }
      console.log(line);
    }
  }
  get(rowNum, colNum) {
    if(this.matrix[rowNum]){
      return this.matrix[rowNum][colNum];
    } 
    return undefined
  }
  findCoordinate(val) {
    let coords = {};
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === val) {
          coords.x = j;
          coords.y = i;
          return coords;
        }
      }
    }
    return "not found";
  }
}
