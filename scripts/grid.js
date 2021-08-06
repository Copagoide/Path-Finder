let condition1 = false;
let condition2 = false;

createGrid();

function createGrid() {
    let table = document.querySelector("#pixelCanvas");

    for(let i = 0; i <= 22; i++){
        
        //Creating the rows
        let row = document.createElement("tr");
        row.id = i;

        table.appendChild(row);
        let rowSpecific = document.getElementById(i);

        for(let j = 0; j <= 40; j++) {

            //Creating the columns and individual squares
            let cell = document.createElement("td");
            cell.id = i + "," + j;
            rowSpecific.appendChild(cell);

            //Painting squares by clicking and/or holding
            cell.addEventListener("mousedown", () => {
                condition1 = true;
                paintByHolding(cell);
            });
            cell.addEventListener("mouseover", () => {
                condition2 = true;
                paintByHolding(cell);
            });
            cell.addEventListener("mouseup", () => {
                condition1 = false;
                condition2 = false;
                paintByClicking(cell)
            });

            function paintByClicking(element){
                if (element.classList.contains("startNode") || element.classList.contains("endNode") || element.classList.contains("endNodeReached")) { }
                else {
                    element.classList.add("wallTransition");

                    setTimeout(function() {
                        if(element.classList.contains("wallTransition")){
                            element.classList.add("wall");
                        }
                    },150);

                    setTimeout(function() {
                        if(element.classList.contains("wall")){
                            element.classList.remove("wallTransition");
                        }
                    },300);
                }
            }
            
            function paintByHolding(element) {
                if (element.classList.contains("startNode") || element.classList.contains("endNode") || element.classList.contains("endNodeReached")) { }
                else if(condition1 == true && condition2 == true) {
                    element.classList.add("wallTransition");

                    setTimeout(function() {
                        if(element.classList.contains("wallTransition")){
                            element.classList.add("wall");
                        }
                    },150);

                    setTimeout(function() {
                        if(element.classList.contains("wall")){
                            element.classList.remove("wallTransition");
                        }
                    },300);
                    
                    //Repainting start and end node cause of bugs :p
                    if(i == 11 && j == 9) {
                        element.classList.add("startNode");
                        element.classList.remove("wall");
                    }
                    if(i == 11 && j == 31) {
                        element.classList.add("endNode");
                        element.classList.remove("wall");
                    }
                }
            }

            //Creating a default start-node and an end-node
            if(i == 11 && j == 9){
                cell.classList.add("startNode");
                cell.classList.remove("wall");
            }
            if(i == 11 && j == 31){
                cell.classList.add("endNode");
                cell.classList.remove("wall");
            }
        }
    }
}