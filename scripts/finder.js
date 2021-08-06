const findButton = document.querySelector("#findButton");

findButton.addEventListener('click', () => {

    let startNodeY;
    let startNodeX;
    let neighbourDirectionsY = [-1, 1, 0, 0];
    let neighbourDirectionsX = [0, 0, 1, -1];
    let currentCell;
    let timerBasedCount = 0;

    let startNode = document.getElementById(findStartNode());
    let endNode = document.getElementById(findEndNode());

    if (startNode.classList.contains("startNode") && endNode.classList.contains("endNode")) {
        algorithm(startNodeY, startNodeX);
        countTimer();
    }
    
    async function algorithm(column, row) {
        await waitThisTime(20);
        currentCell = document.getElementById(column + "," + row);

        if (endNode.classList.contains("endNode")) {    //Until it reaches the end node, and then it becomes "endNodeReached".
            exploreNeighbours(column, row);
        }
        else if (currentCell.classList.contains("endNodeReached")) {
            timerBasedCount -= 2;
            returningPath(column, row);
        }
    }

    function exploreNeighbours(column, row) {
        //Looping through the up, down, right and left directions:
        for (let i = 0; i < 4; i++) {
            let neighbourY = column + neighbourDirectionsY[i];
            let neighbourX = row + neighbourDirectionsX[i];
            let neighbourCell = document.getElementById(neighbourY + "," + neighbourX);
            
            if (neighbourCell != null && !neighbourCell.classList.contains("wall") && !neighbourCell.classList.contains("visited")) {
                neighbourCell.classList.add("visited");  //Even though the algorithm works without adding this class, adding it reduces the number of total iterations.

                if (neighbourCell.classList.contains("endNode")) {  //If we got to the endNode, we change its class to stop the recursion.
                    neighbourCell.classList.remove("endNode")
                    neighbourCell.classList.add("endNodeReached")
                }
                else {                                              //Else, it is a neighbour cell and its style will be changed.
                    neighbourCell.classList.add("[" + timerBasedCount + "]");

                    neighbourCell.classList.add("neighbourColor1");
                    setTimeout(() => {
                        neighbourCell.classList.remove("neighbourColor1");
                        neighbourCell.classList.add("neighbourColor2");
                    }, 150);
                    setTimeout(() => {
                        neighbourCell.classList.remove("neighbourColor2");
                        neighbourCell.classList.add("neighbourColor3");
                    }, 450);
                }
                algorithm(neighbourY, neighbourX);
            }
        }
    }

    async function returningPath(column, row) {
        await waitThisTime(7);

        //Looping through the up, down, right and left directions:
        for (let i = 0; i < 4; i++) {
            let neighbourY = column + neighbourDirectionsY[i];
            let neighbourX = row + neighbourDirectionsX[i];
            let neighbourCell = document.getElementById(neighbourY + "," + neighbourX);
            
            if (neighbourCell != null && neighbourCell.classList.contains("[" + timerBasedCount + "]")) {
                neighbourCell.classList.remove("[" + timerBasedCount + "]")
                neighbourCell.classList.add("returningPath");
                timerBasedCount--;
                
                returningPath(neighbourY, neighbourX);
            }
        }
    }

    async function countTimer() {
        while (endNode.classList.contains("endNode")) {
            await waitThisTime(20);
            timerBasedCount++;
        }
    }

    function findStartNode() {
        for (let i = 0; i <= 22; i++) {
            for (let j = 0; j <= 40; j++) {
                let cell = document.getElementById(i + "," + j);

                //Returning the startNode and marking is as "visited".
                if (cell.classList.contains("startNode")) {
                    cell.classList.add("visited");
                    startNodeY = i;
                    startNodeX = j;
                    
                    return i + "," + j;
                }
            }
        }
        //Otherwise, it returns a string indicating that there is no start node.
        return "notFound";
    }

    function findEndNode() {
        for (let i = 0; i <= 22; i++) {
            for (let j = 0; j <= 40; j++) {
                let cell = document.getElementById(i + "," + j);

                //Returning the endNode.
                if (cell.classList.contains("endNode")) {
                    return i + "," + j;
                }
            }
        }
        return "notFound";
    }

    function waitThisTime(ms) {
        return new Promise (resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
})

