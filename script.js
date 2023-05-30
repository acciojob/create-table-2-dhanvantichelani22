function createTable() {
    //Write your code here
	const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");
	const table = document.getElementById('myTable');

	for(let i = 0; i < rn; i++){
		let tr = document.createElement('tr');
		for(let j = 0; j < cn; j++){
			let td = document.createElement('td');
			td.innerHTML = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}
}
