//create variable for inputHeight,inputWidth and colorTheGrid;
let inputHeight, inputWidth, colorTheGrid;
let form = document.querySelector("form");
/*add an event listener to listen for submit,then grab the value of heigh and width inputed by the user*/
form.addEventListener("submit", (event) => {
    //to prevent the page om eloading on submitting the om 
    event.preventDefault()
    inputHeight = document.querySelector("#inputHeight").value;
    inputWidth = document.querySelector("#inputWidth").value;
    makeGrid(inputHeight, inputWidth);
})




/*when the value of height and width has been collected, 
@param makeGrid is created and within it the table using its id #pixelcanvas  is called out and assigned to an empty string*/
function makeGrid(x, y) {
    document.querySelector("#pixelCanvas").innerHTML = " ";
    // a forloop is then used to loop through the tablerow 
    for (let i = 1; i <= x; i++) {
        //if the conditionals are met,tableows are formed using the inputed value of the user
        document.querySelector("#pixelCanvas").innerHTML += `<tr id='tablerow-${i}'></tr>`;
        /*and another loop is then nested inside the previous loop making it a nested forloop and this loop is used to loop though the tablerow
         using innerhtml to create  a tabledata with an id of tablecell*/
        for (let k = 1; k <= y; k++) {
            //and if the conditions are met,tablecells are formed using the inputed value of the user
            document.querySelector(`#tablerow-${i}`).innerHTML += `<td class='tablecells'></td>`;
        }
    }

    addClickEventToTablecells()
}

/* when grid consisting of tablerows and tablecells is created accoding to the inputed value of the user
  by the submit @param addClickEventToTablecells is called then tablecells and colopicker are assigned to variable using their id within the function*/
function addClickEventToTablecells() {
    colorTheGridCells = document.querySelector("#colorPicker");
    let tableCells = document.getElementsByClassName("tablecells");
    /*a for loop is then created to loop over the tablecells and if the conditions of the loop are met,
    the tablecells appear*/
    for (let i = 0; i < tableCells.length; i++) {
        let theGridCells = tableCells[i];
        //add an event listener to listen fo the click,to add colo to thegridcells
        theGridCells.addEventListener(
            "click",
            function(event) {
                theGridCells.style.backgroundColor = colorTheGridCells.value;
            }
        );
    }
}