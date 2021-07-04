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

            if ($(cell).hasClass("startNode")) {
                $(cell).removeClass("startNode");
            }
            if ($(cell).hasClass("endNode")) {
                $(cell).removeClass("endNode");
            }
            else if ($(cell).hasClass("endNodeReached")) {
                $(cell).removeClass("endNodeReached");
            }

            cell.addEventListener('click', () => {
                if (conds.condicion1 == false) {
                    $(cell).addClass("circleTransition");

                    setTimeout(() => {
                        $(cell).addClass("startNode");
                        $(cell).removeClass("circleTransition");
                    }, 250);

                    setTimeout(() => {
                        $(cell).removeClass("wall");
                    }, 300);

                    conds.setCondicion1(true);
                }
                else if (conds.condicion2 == false && conds.condicion1 == true) {
                    $(cell).addClass("circleTransition");

                    setTimeout(() => {
                        $(cell).addClass("endNode");
                        $(cell).removeClass("circleTransition");
                    }, 250);

                    setTimeout(() => {
                        $(cell).removeClass("wall");
                    }, 300);

                    conds.setCondicion2(true);
                }
            });
            
            cell.addEventListener("mouseover", function loll() {
                if (conds.condicion1 == false) {
                    $(cell).addClass("circleTransition");

                    setTimeout(() => {
                        $(cell).addClass("startNodeHover");
                        $(cell).removeClass("circleTransition");
                    }, 150);

                    setTimeout(() => {
                        $(cell).removeClass("startNodeHover");
                    }, 500);
                }
                else if (conds.condicion2 == false && conds.condicion1 == true) {
                    $(cell).addClass("circleTransition");

                    setTimeout(() => {
                        $(cell).addClass("endNodeHover");
                        $(cell).removeClass("circleTransition");
                    }, 150);

                    setTimeout(() => {
                        $(cell).removeClass("endNodeHover");
                    }, 500);
                }
            });
        }
    }
})
