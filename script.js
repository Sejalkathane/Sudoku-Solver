const sudokuMatrix1 = [
  5, 3, '', '', 7, '', '', '', '',
  6, '', '', 1, 9, 5, '', '', '',
  '', 9, 8, '', '', '', '', 6, '',
  8, '', '', '', 6, '', '', '', 3,
  4, '', '', 8, '', 3, '', '', 1,
  7, '', '', '', 2, '', '', '', 6,
  '', 6, '', '', '', '', 2, 8, '',
  '', '', '', 4, 1, 9, '', '', 5,
  '', '', '', '', 8, '', '', 7, 9
];

const sudokuMatrix2 = [
  1,'' , '', '', '', 7, '', 9, '',
  '', 3, '', '', 2, '', '', '', 8,
  '', '', 9, 6, '', '', 5, '', '',
  '', '', 5, 3, '', '', 9, '', '',
  '', 1, '', '', 8, '', '', '', 2,
  6, '', '', '', '', 4, '', '', '',
  3, '', '', '', '', '', '', 1, '',
  '', 4, '', '', '', '', '', '', 7,
  '', '', 7, '', '', '', 3, '', ''
];

const sudokuMatrix3 = [
  1,'' , '', 4, 8, 9, '', '', 6,
  7, 3, '', '', '', '', '', 4, '',
  '', '', '', '', '', 1, 2, 9, 5,
  '', '', 7, 1, 2, '', 6, '', '',
  5, '', '', 7, '', 3, '', '', 8,
  '', '', 6, '', 9, 5, 7, '', '',
  9, 1, 4, 6, '', '', '', '', '',
  '', 2, '', '', '', '', '', 3, 7,
  8, '', '', 5, 1, 2, '', '', 4
];

const sudokuMatrix4 = [
  '', 2, '', '', '', '', '', '', '',
  '', '', '', 6, '', '', '', '', 3,
  '', 7, 4, '', 8, '', '', '', '',
  '', '', '', '', '', 3, '', '', 2,
  '', 8, '', '', 4, '', '', 1, '',
  6, '', '', 5, '', '', '', '', '',
  '', '', '', '', 1, '', 7, 8, '',
  5, '', '', '', '', 9, '', '', '',
  '', '', '', '', '', '', '', 4, ''
];


const sudokuMatrix5 = [
  '','','','',1,7,2,'','',
  '','','',4,'','','','','',
  '','',9,'','',3,'','','',
  4,'','',7,8,'',5,'','',
  '',2,5,'','','',8,'','',
  '','','',6,'','','','','',
  6,'',1,5,'','','','','',
  '','','','','',6,'',3,'',
  2,'','','','',1,7,'',4
]


const sudokuMatrix6 = [
  3, '', 8, '', '', '', 1, '', 2,
  '', 1, '', 7, '', '', '', 9, '',
  '', '', '', 3, '', 8, '', '', '',
  5, '', '', '', '', '', '', '', 4,
  '', 9, '', '', '', '', '', 5, '',
  2, '', '', '', '', '', '', '', 9,
  '', 4, '', '', '', 6, '', 2, '',
  1, '', 6, '', '', '', 7, '', 3,
  '', '', '', 5, '', 7, '', '', ''
];

const sudokuMatrix7 = [
  '', '', '', 2, '', '', 8, '', '',
  '', 8, '', '', '', 7, '', '', 1,
  6, '', 2, '', 9, '', '', 4, '',
  '', '', '', '', '', 6, '', 7, '',
  '', 4, 1, '', '', '', 6, 8, '',
  '', 7, '', 1, '', '', '', '', '',
  '', 5, '', '', 6, '', 4, '', 7,
  8, '', '', 9, '', '', '', 2, '',
  '', '', 4, '', '', 2, '', '', ''
];


const sudokuMatrix8 = [
  3, '', '', '', 7, '', '', '', '',
  '', '', 8, 6, '', '', '', '', 4,
  6, '', 4, '', '', '', '', 7, '',
  '', 2, '', '', '', '', '', 5, '',
  1, 5, '', '', '', '', '', '', '',
  '', 4, '', 7, '', 9, '', '', 6,
  '', '', '', '', '', '', '', '', 8,
  '', '', 7, '', 5, 8, '', '', '',
  4, '', 6, '', '', '', '', '', ''
];

const sudokuMatrix9 = [
  8, 2, '', '', '', '', '', '', '',
  '', '', 3, 6, '', '', '', '', '',
  '', 7, '', '', 9, '', 2, '', '',
  '', 5, '', '', '', 7, '', '', '',
  '', '', '', '', 4, 5, 7, '', '',
  '', '', '', 1, '', '', '', 3, '',
  '', '', 1, '', '', '', '', 6, 8,
  '', '', 8, 5, '', '', '', 1, '',
  '', 9, '', '', '', '', 4, '', ''
];

const sudokuMatrix10 = [
  3, '', '', '', 1, '', 6, '', '',
  '', 9, '', 5, '', '', '', '', '',
  '', '', 5, 2, '', '', 4, 8, '',
  '', '', 9, '', 7, 4, '', 3, '',
  6, '', 2, '', '', '', 7, '', 8,
  '', 7, '', 3, 2, '', 9, '', '',
  '', 2, 8, '', '', 7, 1, '', '',
  '', '', '', '', '', 6, '', 4, '',
  '', '', 7, '', 9, '', '', '', 2
];



const matrix=[];

function Generate(){
  const matrix = [sudokuMatrix1, sudokuMatrix2, sudokuMatrix3, sudokuMatrix4,sudokuMatrix5,sudokuMatrix6,sudokuMatrix7,sudokuMatrix8,sudokuMatrix9,sudokuMatrix10];

 const randomIndex = Math.floor(Math.random() * matrix.length);
 const randomMatrix = matrix[randomIndex];
  for(let i=0;i<=80;i++)
   {
    let inputs=document.querySelectorAll('input'); 
    inputs[i].value=randomMatrix[i];
    if(randomMatrix[i]>0){
    inputs[i].style.color = 'red'
    inputs[i].style.fontWeight = 'bold'
    }
   }



   for(let i=0;i<=80;i++){
    let inputs=document.querySelectorAll('input')[i]; 
    matrix[i]=inputs.value;
  }
  console.log(matrix);

}



function Clear()
{
  for(let i=0;i<=80;i++)
  {
   let inputs=document.querySelectorAll('input'); 
   inputs[i].value='';
  }
}


// function Check()
// {

// }
// function Check()
// {
//   for(let i=0;i<=80;i++)
//   {
//     console.log(matrix[i]);
//   }
// }



// const convertTo2DMatrix = (array, rows, cols) => {
//   const matrix2D = [];
//   let rowIndex = 0;

//   for (let i = 0; i < array.length; i += cols) {
//     const row = array.slice(i, i + cols);
//     matrix2D[rowIndex] = row;
//     rowIndex++;
//   }

//   return matrix2D;
// };

// Convert matrix to 2D format
// const matrix = convertTo2DMatrix(matrix, 9, 9);










// function convertToMatrix(matrix) {
//   const matrix = [];

//   for (let i = 0; i < matrix.length; i += 9) {
//     const row = matrix.slice(i, i + 9);
//     matrix.push(row);
//   }

//   return matrix;
// }
// const matrix= convertToMatrix(matrix);













// function solve(matrix) 
// {
  
//   const isValid = (matrix, row, col, num) => {
//     for (let i = 0; i < 9; i++) {
//       const rowCheck = matrix[row][i] === num;
//       const colCheck = matrix[i][col] === num;
//       const boxCheck =
//         matrix[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + (i % 3)] === num;
//       if (rowCheck || colCheck || boxCheck) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const solveSudoku = () => {
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (matrix[row][col] === '') {
//           for (let num = 1; num <= 9; num++) {
//             if (isValid(matrix, row, col, num)) {
//               matrix[row][col] = num;
//               if (solveSudoku()) {
//                 return true;
//               } else {
//                 matrix[row][col] = ''; // Undo the assignment if it leads to an incorrect solution
//               }
//             }
//           }
//           return false; // No valid number found for this cell, backtrack
//         }
//       }
//     }
//     return true; // All cells filled, the Sudoku is solved
//   };

//   solveSudoku();
//   return matrix;
// }



// function Solve()
// {
//     console.log(solve(matrix));
// }



















// let matrix = [];
// function convertToMatrix(array) {

//   for (let i = 0; i < array.length; i += 9) {
//     const row = array.slice(i, i + 9);
//     matrix.push(row);
//   }

//   return matrix;
// }

// matrix = convertToMatrix(matrix);

// console.log(matrix);








// function solve() {
//   const size = 9;
//   const emptySpot = findEmptySpot();

//   const row = emptySpot[0];
//   const col = emptySpot[1];

//   for (let num = 1; num <= size; num++) {
//     if (isValid(matrix, row, col, num)) {
//       matrix[row][col] = num;

//       const solvedMatrix = solve(matrix);
//       if (solvedMatrix) {
//         return solvedMatrix;
//       }

//       matrix[row][col] = ''; 
//       // Backtrack and reset the value
//     }
//   }

//   return null; // No solution found
// }

// // Helper function to find the next empty spot in the matrix
// function findEmptySpot() {
//   const size = 9;

//   for (let row = 0; row < size; row++) {
//     for (let col = 0; col < size; col++) {
//       if (matrix[row][col] === '') {
//         return [row, col];
//       }
//     }
//   }

//   return null; // If no empty spot is found
// }

// // Helper function to check if a number is valid in a specific spot
// function isValid( row, col, num) {
//   const size = 9;

//   // Check if the number already exists in the row or column
//   for (let i = 0; i < size; i++) {
//     if (matrix[row][i] === num || matrix[i][col] === num) {
//       return false;
//     }
//   }

//   // Check if the number already exists in the 3x3 box
//   const boxStartRow = Math.floor(row / 3) * 3;
//   const boxStartCol = Math.floor(col / 3) * 3;

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (matrix[boxStartRow + i][boxStartCol + j] === num) {
//         return false;
//       }
//     }
//   }

//   return true; // Number is valid in the current spot
// }





// function Solve(){
//   solve();
//   for(let i=0;i<=80;i++)
//    {
//     let inputs=document.querySelectorAll('input'); 
//     inputs[i].value=matrix[i];
//     console.log(matrix[i]);
//    }
// }









// const solveSudoku = (matrix) => 
// {
//   const isValid = (matrix, row, col, num) => {
//     // Check if the number already exists in the row
//     for (let i = 0; i < 9; i++) {
//       if (matrix[row][i] === num) {
//         return false;
//       }
//     }

//     // Check if the number already exists in the column
//     for (let i = 0; i < 9; i++) {
//       if (matrix[i][col] === num) {
//         return false;
//       }
//     }

//     // Check if the number already exists in the 3x3 box
//     const startRow = Math.floor(row / 3) * 3;
//     const startCol = Math.floor(col / 3) * 3;
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (matrix[startRow + i][startCol + j] === num) {
//           return false;
//         }
//       }
//     }

//     return true;
//   };

//   const solve = () => {
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (matrix[row][col] === '') {
//           for (let num = 1; num <= 9; num++) {
//             if (isValid(matrix, row, col, num)) {
//               matrix[row][col] = num;

//               if (solve()) {
//                 return true;
//               }

//               // Reset the cell if the solution is not valid
//               matrix[row][col] = '';
//             }
//           }

//           // If no valid number found, backtrack
//           return false;
//         }
//       }
//     }

//     // All cells filled, solution found
//     return true;
//   };

//   if (solve()) {
//     return matrix;
//   } else {
//     return null; // No solution exists
//   }
// };

// // Solve the Sudoku matrix

// function Solve(){
// const solvedMatrix = solveSudoku(matrix);
// console.log(solvedMatrix);
// // Print the solution
//   console.log('Solution:');
//   // for (let row = 0; row < 9; row++) {
//   //   console.log(solvedMatrix[row].join(' '));
//   // }
// }






// function convertToMatrix(array) {
//   const mt = [];

//   for (let i = 0; i < array.length; i += 9) {
//     const row = array.slice(i, i + 9);
//     mt.push(row);
//   }

//   return mt;
// }

// // function Check()
// // {
// convertToMatrix(matrix);
// // console.log(m);
// // }

// console.log(matrix[3][3]);


console.log(matrix[6]);



