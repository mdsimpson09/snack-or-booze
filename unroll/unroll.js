function unroll(squareArray) {
    const result = [];
    let startRow = 0, endRow = squareArray.length - 1;
    let startCol = 0, endCol = squareArray[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
     
      for (let col = startCol; col <= endCol; col++) {
        result.push(squareArray[startRow][col]);
      }
      startRow++;
  
  
      for (let row = startRow; row <= endRow; row++) {
        result.push(squareArray[row][endCol]);
      }
      endCol--;

      if (startRow <= endRow) {
       
        for (let col = endCol; col >= startCol; col--) {
          result.push(squareArray[endRow][col]);
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
      
        for (let row = endRow; row >= startRow; row--) {
          result.push(squareArray[row][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
