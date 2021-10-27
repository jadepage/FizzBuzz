// get the values form the Page
// start or controller function
function getValues() {
    // get values from the page
    let fizzValue = document.getElementById('startValue').value;
    let buzzValue = document.getElementById('endValue').value;

    // need to validate input
    // parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
         // call displayNumbers 
        displayData(fbArray);
    } else {
        alert("You must enter integers");
    }
}


// generate numbers from startValue to the endValue
// logic function(s)
function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];


    // loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        // Check if values are divisible by 3 and 5
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz')
        // Check if values are divisible by 3
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
         // Check if values are divisible by 5
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

// display or view function
// loop over the array and create a tablerow for each item
function displayData(fbArray) {
    
    // get the table body element from the page
    let tableBody = document.getElementById('results');

    // get the templates row
    let templateRow = document.getElementById('fbTemplate');

    // clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
       
        let tableRow = document.importNode(templateRow.content, true); 

        // grab the td's and put into array
        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }
}
