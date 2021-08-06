const moveButton = document.querySelector("#moveButton");

class condiciones {
    constructor (condicion1, condicion2) {
        this.condicion1 = condicion1;
        this.condicion2 = condicion2;
    }
    setCondicion1(boolean) {
        this.condicion1 = boolean;
    }
    setCondicion2(boolean) {
        this.condicion2 = boolean;
    }
}

moveButton.addEventListener('click', () => {
    let conds = new condiciones(false, false);

    for(let i = 0; i <= 22; i++){
        for(let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);

            if (cell.classList.contains("startNode")) {
                cell.classList.remove("startNode");
            }
            if (cell.classList.contains("endNode")) {
                cell.classList.remove("endNode");
            }
            else if (cell.classList.contains("endNodeReached")) {
                cell.classList.remove("endNodeReached");
            }

            cell.addEventListener('click', () => {
                if (conds.condicion1 == false) {
                    cell.classList.add("circleTransition");

                    setTimeout(() => {
                        cell.classList.add("startNode");
                        cell.classList.remove("circleTransition");
                    }, 250);

                    setTimeout(() => {
                        cell.classList.remove("wall");
                        cell.classList.remove("wallTransition");
                    }, 300);

                    conds.setCondicion1(true);
                }
                else if (conds.condicion2 == false && conds.condicion1 == true) {
                    cell.classList.add("circleTransition");

                    setTimeout(() => {
                        cell.classList.add("endNode");
                        cell.classList.remove("circleTransition");
                    }, 250);

                    setTimeout(() => {
                        cell.classList.remove("wall");
                        cell.classList.remove("wallTransition");
                    }, 300);

                    conds.setCondicion2(true);
                }
            });
            
            cell.addEventListener("mouseover", function loll() {
                if (conds.condicion1 == false) {
                    cell.classList.add("circleTransition");

                    setTimeout(() => {
                        cell.classList.add("startNodeHover");
                        cell.classList.remove("circleTransition");
                    }, 100);

                    setTimeout(() => {
                        cell.classList.remove("startNodeHover");
                        cell.classList.remove("wallTransition");
                    }, 400);
                }
                else if (conds.condicion2 == false && conds.condicion1 == true) {
                    cell.classList.add("circleTransition");

                    setTimeout(() => {
                        cell.classList.add("endNodeHover");
                        cell.classList.remove("circleTransition");
                    }, 100);

                    setTimeout(() => {
                        cell.classList.remove("endNodeHover");
                        cell.classList.remove("wallTransition");
                    }, 400);
                }
            });
        }
    }
})
