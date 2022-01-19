//! The x coordinate is the sum of the matrix rows of which are odd .
//! The y coordinate is the sum of the matrix rows of which are even.

matrix = [[0 ,8, 3, 2, 7, 7, 1, 6, 3, 0, 6, 3],[4, 6, 4, 1, 5, 5, 8, 1, 4, 9, 8, 9],[6, 6, 1, 5, 9, 2, 2, 4, 6, 9, 8, 7],
            [1, 7, 6, 6, 2, 8, 4, 8, 2, 9, 5, 9],[0, 6, 4, 9, 0 ,6, 1, 0, 9, 5, 0, 5],[6, 2, 6, 2, 7, 6, 9, 4, 9, 7, 9, 9],
            [0, 2, 7, 8, 2, 3, 0, 1, 1, 6, 6, 0],[9, 3, 5, 5, 1, 2, 0 ,9, 4, 3, 8, 2],[4, 8, 7, 4, 8, 8, 1, 0, 9, 6, 4, 8],
            [9, 4, 5, 9, 8, 2, 6, 8, 0, 7, 1, 9], [1, 2, 4, 5, 2, 4, 9, 3, 5, 8, 6, 9],
            [4, 1, 3, 5, 3, 4, 3, 7, 3, 9, 7, 5]]
//console.log(matrix);

  
 
let R = 12;
let C = 12;
 
// A function to rotate a matrix
// mat[][] of size R x C.
// Initially, m = R and n = C
function rotatematrix(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
     
    /*
    row - Staring row index
    m - ending row index
    col - starting column index
    n - ending column index
    i - iterator
    */
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break;
   
        // Store the first element of next
        // row, this element will replace
        // first element of current row
        prev = mat[row + 1][col];
   
        // Move elements of first row
        // from the remaining rows
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
   
        // Move elements of last column
        // from the remaining columns
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
   
        // Move elements of last row
        // from the remaining rows
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
 
    // Print rotated matrix
    for(let i = 0; i < R; i++)
    {
        for(let j = 0; j < C; j++)
            console.log( mat[i][j] + " ");
       console.log("\n");      
    }
}
 
// Driver code
 
// Test Case 1
rotatematrix(R, C, matrix);
console.log(matrix);
  //console.log(matrix);
  var x =0;
  var y =0;
 matrix.forEach(row => {
  let num = +row.join("");
  console.log(num);
  if (num%2 == 0) {
    y = y+num;
  }else{
    x =x+num;
  }
 });
console.log(x,':',y);