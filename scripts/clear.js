const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener('click', () => {
    for(let i = 0; i <= 22; i++){
    setTimeout(() => {
        
        for(let j = 0; j <= 40; j++) {
        setTimeout(() => {
            
            let cell = document.getElementById(i + "," + j);

            //Removing classes from the canvas
            if (cell.classList.contains("wall")) {
                cell.classList.remove("wall");
            }
            if (cell.classList.contains("visited")) {
                cell.classList.remove("visited");
            }
            if (cell.classList.contains("neighbourColor1")) {
                cell.classList.remove("neighbourColor1");
            }
            if (cell.classList.contains("neighbourColor2")) {
                cell.classList.remove("neighbourColor2");
            }
            if (cell.classList.contains("neighbourColor3")) {
                cell.classList.remove("neighbourColor3");
            }
            if (cell.classList.contains("returningPath")) {
                cell.classList.remove("returningPath");
            }
            if (cell.classList.contains("endNodeReached")) {
                cell.classList.remove("endNodeReached");
                cell.classList.add("endNode");
            }
            if (cell.className && !cell.classList.contains("startNode") && !cell.classList.contains("endNode") && !cell.classList.contains("endNodeReached")) {   
                cell.removeAttribute("class");
            }

        }, 5 * j);
        }

    }, 10 * i);
    }
})