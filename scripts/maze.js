function waitThisTime(ms) {
    return new Promise (resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}

const mazeButton = document.querySelector("#mazeButton");

mazeButton.addEventListener('click', async () => {

    let stackY = [1];
    let stackX = [1];
    let mazeWidth = 20;
    let mazeHeight = 11;
    let visitedElements = 0;

    for (let i = 0; i <= 22; i++) {
        for (let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);
            
            if (cell.classList.contains("startNode") || cell.classList.contains("endNode")) { }
            else {
                cell.classList.add("wall");
            }
        }
    }

    for (let k = 0; k < 22*40; k++) {

        if (visitedElements < mazeWidth * mazeHeight) {
            
            let y = stackY[stackY.length - 1]   //setting Y to the last index of the Y stack.
            let x = stackX[stackX.length - 1]   //setting X to the last index of the X stack.
            let neighbours = [];

            let neighbourUp = null;
            let neighbourRight = null;
            let neighbourDown= null;
            let neighbourLeft = null;

            let middleCellUp = null;
            let middleCellRight = null;
            let middleCellDown= null;
            let middleCellLeft = null;


            //Get all close neighbours:
            //Check if it can't go up         it is represented by the number 0
            if (stackY[stackY.length - 1] > 2) {
                neighbourUp = document.getElementById(y - 2 + "," + x);
                middleCellUp = document.getElementById(y - 1 + "," + x);
                if (!neighbourUp.classList.contains("visitedMazePath")) { 
                    neighbourUp.classList.add("neighbour");
                    neighbours.push(0);
                }
            }
            //Check if it can't go right      it is represented by the number 1
            if (stackX[stackX.length - 1] < 38) {
                neighbourRight = document.getElementById(y + "," + (x + 2));
                middleCellRight = document.getElementById(y + "," + (x + 1));
                if (!neighbourRight.classList.contains("visitedMazePath")) {
                    neighbourRight.classList.add("neighbour");
                    neighbours.push(1);
                }
            }
            //Check if it can't go down       it is represented by the number 2
            if (stackY[stackY.length - 1] < 20) {
                neighbourDown = document.getElementById(y + 2 + "," + x);
                middleCellDown = document.getElementById(y + 1 + "," + x);
                if (!neighbourDown.classList.contains("visitedMazePath")) {
                    neighbourDown.classList.add("neighbour");
                    neighbours.push(2);
                }
            }
            //Check if it can't go left       it is represented by the number 3
            if (stackX[stackX.length - 1] > 2) {
                neighbourLeft = document.getElementById(y + "," + (x - 2));
                middleCellLeft = document.getElementById(y + "," + (x - 1));
                if (!neighbourLeft.classList.contains("visitedMazePath")) {
                    neighbourLeft.classList.add("neighbour");
                    neighbours.push(3);
                }
            }

            if (neighbours.length != 0) {
                await waitThisTime(4);

                let changeDirection = neighbours[Math.floor(Math.random() * neighbours.length)];      //randomly chooses a neighbour
                switch(changeDirection) {
                    case 0:     //up
                        neighbourUp.classList.remove("neighbour");
                        neighbourUp.classList.add("visitedMazePath");
                        middleCellUp.classList.remove("wall")
                        neighbourUp.classList.remove("wall");
                        visitedElements++;
                        stackY.push((y - 2));
                        stackX.push(x);
                        break;
                    case 1:     //right
                        neighbourRight.classList.remove("neighbour");
                        neighbourRight.classList.add("visitedMazePath");
                        middleCellRight.classList.remove("wall")
                        neighbourRight.classList.remove("wall");
                        visitedElements++;
                        stackY.push(y);
                        stackX.push((x + 2));
                        break;
                    case 2:     //down
                        neighbourDown.classList.remove("neighbour");
                        neighbourDown.classList.add("visitedMazePath");
                        middleCellDown.classList.remove("wall")
                        neighbourDown.classList.remove("wall");
                        visitedElements++;
                        stackY.push((y + 2));
                        stackX.push(x);
                        break;
                    case 3:     //left
                        neighbourLeft.classList.remove("neighbour");
                        neighbourLeft.classList.add("visitedMazePath");
                        middleCellLeft.classList.remove("wall")
                        neighbourLeft.classList.remove("wall");
                        visitedElements++;
                        stackY.push(y);
                        stackX.push((x - 2));
                        break;
                }
            }
            else {
                stackY.pop();    //backtracking
                stackX.pop();
            }
        }
    }

    for (let i = 0; i <= 22; i++) {
        for (let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);
            
            cell.classList.remove("visitedMazePath");
            cell.classList.remove("neighbour");  
        }
    }
    
})