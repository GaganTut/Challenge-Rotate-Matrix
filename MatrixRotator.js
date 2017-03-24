const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    var newMatrix = [];
    if (direction === "ClockWise") {
      for (var i = 0; i < this.matrix.length; i++) {
        var newArr = [];
        for (var j = this.matrix.length-1; j >= 0; j--) {
          newArr.push(this.matrix[j][i]);
        }
        newMatrix.push(newArr);
      }
      this.matrix = newMatrix;
      return this.matrix;

    } else if(direction === "CounterClockWise") {
      console.log(this.matrix);
      for (var k = this.matrix.length-1; k >= 0; k--) {
        var newCCWArr = [];
        for (var l = 0; l < this.matrix.length; l++) {
          newCCWArr.push(this.matrix[l][k]);
        }
        newMatrix.push(newCCWArr);
      }
      this.matrix = newMatrix;
      return this.matrix;
    }
  }
};
