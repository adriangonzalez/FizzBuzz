//CONTROLLER METHOD
//GET FORM VALUES
function getValues() {

	let fizzValue = document.getElementById("fizzValue").value;
	let buzzValue = document.getElementById("buzzValue").value;

	//parse for numbers
	fizzValue = parseInt(fizzValue);
	buzzValue = parseInt(buzzValue);

	//check that numbers are integers
	if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

		//call fizzBuzz
		let results = fizzBuzz(fizzValue, buzzValue);

		//call displayData and write values to the screen
		displayData(results);
	}
	else{
		alert("you must enter integers");
	}

}

//LOGIC METHOD
//GENERATE RESULTS
function fizzBuzz(fizzValue, buzzValue) {
	let items = [];

	for (let index = 1; index <= 100; index++) {
		let item = '';

		if( index % fizzValue == 0){
			item = "Fizz";
		}

		if( index % buzzValue == 0){
			item += "Buzz";
		}

		if ( item == '')
		{
			item = index;
		}

		items.push(item);
	}

	return items;
}

//VIEW METHOD
//DISPLAY RESULTS
function displayData(fbArray) {

	//get table body from the page
	let tableBody = document.getElementById("results");

	//get the template
	let templateRow = document.getElementById("fbTemplate");

	//clear the table first
	tableBody.innerHTML = "";

	for (let index = 0; index < fbArray.length; index += 5) {

		let tableRow = document.importNode(templateRow.content, true);

		//grab the tds and put into an array
		let rowCols = tableRow.querySelectorAll("td");

		rowCols[0].classList.add(fbArray[index]);
		rowCols[0].textContent = fbArray[index];

		rowCols[1].classList.add(fbArray[index+1]);
		rowCols[1].textContent = fbArray[index+1];

		rowCols[2].classList.add(fbArray[index+2]);
		rowCols[2].textContent = fbArray[index+2];

		rowCols[3].classList.add(fbArray[index+3]);
		rowCols[3].textContent = fbArray[index+3];

		rowCols[4].classList.add(fbArray[index+4]);
		rowCols[4].textContent = fbArray[index+4];


		tableBody.appendChild(tableRow);
	}
}