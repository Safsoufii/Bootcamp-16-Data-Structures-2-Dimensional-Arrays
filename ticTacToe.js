// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
  ];
  
  const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
  ];
  
  const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
  ];
  
  const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
  ];
  
  // evaluatePlay function.
  // Within this function, write the code to evaluate whether a winning play has been made or not
  // Your program must be able to evaluate all the grids defined above.
  // The function should inform the user of which sign has  won and which sign has lost
  // You may add additional parameters to assist you
  function evaluatePlay(grid) {
    // Initialise result variable to undefined
    let result;
  
    // Check rows for winning play
    for (let i = 0; i < 3; i++) {
      // Check if row has three Xs
      if (grid[i][0] === "X" && grid[i][1] === "X" && grid[i][2] === "X") {
        // If row has three Xs, set result to "X Won" and exit loop
        result = "X Won";
        break;
      }
      // Check if row has three Os
      if (grid[i][0] === "O" && grid[i][1] === "O" && grid[i][2] === "O") {
        // If row has three Os, set result to "O Won" and exit loop
        result = "O Won";
        break;
      }
    }
  
    // If no winning play has been found yet, check columns for winning play
    if (result === undefined) {
      for (let i = 0; i < 3; i++) {
        // Check if column has three Xs
        if (grid[0][i] === "X" && grid[1][i] === "X" && grid[2][i] === "X") {
          // If column has three Xs, set result to "X Won" and exit loop
          result = "X Won";
          break;
        }
        // Check if column has three Os
        if (grid[0][i] === "O" && grid[1][i] === "O" && grid[2][i] === "O") {
          // If column has three Os, set result to "O Won" and exit loop
          result = "O Won";
          break;
        }
      }
    }
  
    // If no winning play has been found yet, check diagonals for winning play
    if (result === undefined) {
      // Check if diagonal has three Xs
      if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") {
        // If diagonal has three Xs, set result to "X Won"
        result = "X Won";
      }
      // Check if diagonal has three Os
      if (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O") {
        // If diagonal has three Os, set result to "O Won"
        result = "O Won";
      }
      // Check if inverse diagonal has three Xs
      if (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
        // If inverse diagonal has three Xs, set result to "X Won"
        result = "X Won";
      }
      // Check if inverse diagonal has three Os
      if (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
        // If inverse diagonal has three Os, set result to "O Won"
        result = "O Won";
      }
    }
  
    // If no winning play has been found, set result to "No winner"
    if (result === undefined) {
      result = "No winner";
    }
  
    // Output result to console
    console.log(result);
  }
  
  // Call evaluatePlay function with each of the grids
  evaluatePlay(rowWin);
  evaluatePlay(colWin);
  evaluatePlay(diagonalWin);
  evaluatePlay(diagonalWinInverse);