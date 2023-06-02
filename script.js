function createTable() {
  const numRows = window.prompt("Input number of rows", 1);
  const numCols = window.prompt("Input number of columns", 1);
  
  const table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear the table before creating a new one

  for (let i = 0; i < parseInt(numRows, 10); i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < parseInt(numCols, 10); j++) {
      const cell = row.insertCell(j);
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}

// Get the button element
// const createBtn = document.getElementById('createBtn');

// // Add click event listener to the button
// createBtn.addEventListener('click', createTable);


// function createTable() { const numRows = window.prompt("Input number of rows", 1); const numCols = window.prompt("Input number of columns",1); for (let i = 0; i < parseInt(numRows,10); i++) { const table = document.getElementById('myTable').insertRow(i);
// for (let j = 0; j < parseInt(numCols,10); j++) {
// const cell = table.insertCell(j);
// cell.innerHTML = `Row-${i} Column-${j}`;
// }
// }
// }