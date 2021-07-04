let condition1 = false;
let condition2 = false;

function makeGrid() {
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
                //element.style.background = "#555";
                $(element).addClass("wallTransition");

                setTimeout(function() {
                    if($(element).hasClass("wallTransition")){
                        $(element).addClass("wall");
                    }
                },150);

                setTimeout(function() {
                    if($(element).hasClass("wall")){
                        $(element).removeClass("wallTransition");
                    }
                },300);


                //Repainting start and end node cause of bugs :p
                if(i == 11 && j == 9) {
                    $(element).addClass("startNode");
                    $(element).removeClass("wall");//doesnt realy work (?
                }
                if(i == 11 && j == 31) {
                    $(element).addClass("endNode");
                    $(element).removeClass("wall");
                }
            }
            function paintByHolding(element) {
                if(condition1 == true && condition2 == true){
                    //element.style.background = "#555";
                    $(element).addClass("wallTransition");

                    setTimeout(function() {
                        if($(element).hasClass("wallTransition")){
                            $(element).addClass("wall");
                        }
                    },150);

                    setTimeout(function() {
                        if($(element).hasClass("wall")){
                            $(element).removeClass("wallTransition");
                        }
                    },300);
                    
                    //Repainting start and end node cause of bugs :p
                    if(i == 11 && j == 9) {
                        $(element).addClass("startNode");
                        $(element).removeClass("wall");
                    }
                    if(i == 11 && j == 31) {
                        $(element).addClass("endNode");
                        $(element).removeClass("wall");
                    }
                }
            }

            //Creating a start-node and an end-node
            if(i == 11 && j == 9){
                $(cell).addClass("startNode");
                $(cell).removeClass("wall");
            }
            if(i == 11 && j == 31){
                $(cell).addClass("endNode");
                $(cell).removeClass("wall");
            }
        }
    }
}

makeGrid();
