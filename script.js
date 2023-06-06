// // Function to generate a random Sudoku grid
// function generateSudoku() {
//     // Initialize a 9x9 grid with zeros
//     var sudoku = [];
//     for (var i = 0; i < 9; i++) {
//       sudoku[i] = [];
//       for (var j = 0; j < 9; j++) {
//         sudoku[i][j] = 0;
//       }
//     }
  
//     // Function to check if a value is valid in a Sudoku grid
//     function isValid(grid, row, col, num) {
//       // Check row and column
//       for (var i = 0; i < 9; i++) {
//         if (grid[row][i] === num || grid[i][col] === num) {
//           return false;
//         }
//       }
  
//       // Check 3x3 box
//       var boxRow = Math.floor(row / 3) * 3;
//       var boxCol = Math.floor(col / 3) * 3;
//       for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//           if (grid[boxRow + i][boxCol + j] === num) {
//             return false;
//           }
//         }
//       }
  
//       return true;
//     }
  
//     // Function to solve the Sudoku using backtracking
//     function solveSudoku(grid) {
//       for (var row = 0; row < 9; row++) {
//         for (var col = 0; col < 9; col++) {
//           if (grid[row][col] === 0) {
//             for (var num = 1; num <= 9; num++) {
//               if (isValid(grid, row, col, num)) {
//                 grid[row][col] = num;
//                 if (solveSudoku(grid)) {
//                   return true;
//                 }
//                 grid[row][col] = 0;
//               }
//             }
//             return false;
//           }
//         }
//       }
//       return true;
//     }
  
//     // Solve the Sudoku
//     solveSudoku(sudoku);
  
//     return sudoku;
//   }
  
//   // Generate and display a random Sudoku grid
//   var sudokuGrid = generateSudoku();
//   console.log(sudokuGrid);
  








