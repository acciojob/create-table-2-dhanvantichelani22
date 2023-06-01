function createTable() {
    //Write your code here
	// Prompt for the number of rows
  const numRows = window.prompt("Input number of rows", 1);

  // Prompt for the number of columns
  const numCols = window.prompt("Input number of columns",1);

  // Clear the existing table
 // table.innerHTML = '';

  // Create the table rows and columns
  for (let i = 0; i < parseInt(numRows,10); i++) {
	  // Get the table element
  
const table = document.getElementById('myTable').insertRow(i);
    for (let j = 0; j < parseInt(numCols,10); j++) {
      const cell = table.insertCell(j);
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}

// Get the button element
// const createBtn = document.getElementById('createBtn');

// // Add click event listener to the button
// createBtn.addEventListener('click', createTable);
}
