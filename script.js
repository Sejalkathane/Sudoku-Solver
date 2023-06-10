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


let matrix=[];

const matrix2D = [];


function Generate(){
  const mt = [sudokuMatrix1, sudokuMatrix2, sudokuMatrix3, sudokuMatrix4,sudokuMatrix5,sudokuMatrix6,sudokuMatrix7,sudokuMatrix8,sudokuMatrix9,sudokuMatrix10];

 const randomIndex = Math.floor(Math.random() * mt.length);
 const randomMatrix = mt[randomIndex];
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


  const convertTo2DMatrix = (array, rows, cols) => {
    let rowIndex = 0;
  
    for (let i = 0; i < array.length; i += cols) {
      const row = array.slice(i, i + cols);
      matrix2D[rowIndex] = row;
      rowIndex++;
    }
  
    console.log(matrix2D);
    // console.log(matrix2D[3][4]);
  };
  convertTo2DMatrix(matrix, 9, 9);
  
}






function Clear()
{
  for(let i=0;i<=80;i++)
  {
   let inputs=document.querySelectorAll('input'); 
   inputs[i].value='';
  }
  console.clear();
}








//SOLVE FUNCTION

const solveSudoku = (matrix2D) => 
{
  const isValid = (matrix2D, row, col, num) => {
    // Check if the number already exists in the row
    for (let i = 0; i < 9; i++) {
      if (matrix2D[row][i] == num) {
        return false;
      }
    }

    // Check if the number already exists in the column
    for (let i = 0; i < 9; i++) {
      if (matrix2D[i][col] == num) {
        return false;
      }
    }

    // Check if the number already exists in the 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix2D[startRow + i][startCol + j] == num) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (matrix2D[row][col] == '') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(matrix2D, row, col, num)) {
              matrix2D[row][col] = num;

              if (solve()) {
                return true;
              }

              // Reset the cell if the solution is not valid
              matrix2D[row][col] = '';
            }
          }

          // If no valid number found, backtrack
          return false;
        }
      }
    }

    // All cells filled, solution found
    return true;
  };

  if (solve()) {
    return matrix2D;
  } else {
    return null; // No solution exists
  }
};

// Solve the Sudoku matrix

function Solve(){
console.log( solveSudoku(matrix2D));
let i=0;
for(let j=0;j<9;j++)
{
  for(let k=0;k<9;k++)
  {
     
    let inputs=document.querySelectorAll('input'); 
    inputs[i].value=matrix2D[j][k];
    i++;
  }
}

}



// function Check()
// {
//   for(let i=0;i<9;i++)
//   {
//     for(let j=0;j<9;j++)
//     {
//        if(inputs.value;)
//     }
//   }
// }

