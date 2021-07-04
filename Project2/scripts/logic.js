const findButton = document.querySelector("#findButton");
let lambda = 0;
let moveOn = false;
//var path = [];
findButton.addEventListener('click', () => {

    //To find the start node
    for (let i = 0; i <= 22; i++) {
        for (let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);

            //Finding all close nodes to the start node
            if ($(cell).hasClass("startNode")) {
                nextToUp(i, j);
                nextToDown(i, j);
                nextToLeft(i, j);
                nextToRight(i, j);
            }
        }
    }
    lambda++;


    //To find the end node
    for (let x = 0; x <= 22; x++) {
        for (let y = 0, z = 1; y <= 40; y++, z++) {
            setInterval(function () {
                let celll = document.getElementById(x + "," + y);
                while ($(celll).hasClass("endNode")) {
                    console.log("while");
                    for (let a = 0; a <= 22; a++) {
                        for (let b = 0; b <= 40; b++) {
                            let updatedCell = document.getElementById(a + "," + b);

                            let cellUp = document.getElementById(a - 1 + "," + b);
                            let cellDown = document.getElementById((a + 1) + "," + b);
                            let cellLeft = document.getElementById(a + "," + (b - 1));
                            let cellRight = document.getElementById(a + "," + (b + 1));

                            if ($(updatedCell).hasClass("endNode") && a != 0 && cellUp.classList.contains("visitedNode") ||
                                $(updatedCell).hasClass("endNode") && a != 22 && cellDown.classList.contains("visitedNode") ||
                                $(updatedCell).hasClass("endNode") && b != 0 && cellLeft.classList.contains("visitedNode") ||
                                $(updatedCell).hasClass("endNode") && b != 40 && cellRight.classList.contains("visitedNode")) {

                                $(updatedCell).removeClass("endNode");
                                $(updatedCell).addClass("endNodeReached");
                            }

                            else if ($(updatedCell).hasClass("visitedNode")) {
                                if (a != 0) { nextToUp(a, b); }
                                if (a != 22) { nextToDown(a, b); }
                                if (b != 0) { nextToLeft(a, b); }
                                if (b != 40) { nextToRight(a, b); }
                                console.log("yes");
                            }
                            setTimeout(function () {
                                if ($(updatedCell).hasClass("endNodeReached")){
                                    lambda--;lambda--;
                                    $(updatedCell).removeClass("visitedNode");
                                    //To get the returing path
                                    while(lambda >= 0) {
                                        for (let r = 0; r <= 22; r++) {
                                            for (let t = 0; t <= 40; t++) {
                                                let cellll = document.getElementById(r + "," + t);

                                                console.log(lambda); console.log(cellll);
                                                //Finding all close nodes to the end node
                                                if ($(cellll).hasClass("returningPath") || $(cellll).hasClass("path") || $(cellll).hasClass("endNodeReached")) {
                                                        console.log(lambda);
                                                        returnToUp(r, t);
                                                        if(moveOn == true) {}
                                                        else if(moveOn == false) { returnToDown(r, t); }
                                                        if(moveOn == true) {}
                                                        else if(moveOn == false) { returnToLeft(r, t); }
                                                        if(moveOn == true) {}
                                                        else if(moveOn == false) { returnToRight(r, t); }
                                                        moveOn = false;
                                                }
                                            }
                                        }
                                        lambda--;
                                    }
                                    
                                }
                            }, 50);
                        }
                    } lambda++;
                    
                    break;
                }
            }, 650);
        }
    }
})

function nextToUp(row, column) {
    let cellUp = document.getElementById(row - 1 + "," + column);
    if ($(cellUp).hasClass("wall")) {/*Do nothing*/ }
    else if ($(cellUp).attr("style")) { }
    else if ($(cellUp).hasClass("startNode")) { }
    else if ($(cellUp).hasClass("visitedNode")) { }
    else {
        $(cellUp).addClass("[" + lambda + "]");
        $(cellUp).addClass("nextTo");
        nextToElementColor(cellUp);
    }
}
function nextToDown(row, column) {
    let cellDown = document.getElementById((row + 1) + "," + column);
    if ($(cellDown).hasClass("wall")) {/*Do nothing*/ }
    else if ($(cellDown).attr("style")) { }
    else if ($(cellDown).hasClass("startNode")) { }
    else if ($(cellDown).hasClass("visitedNode")) { }
    else {
        $(cellDown).addClass("[" + lambda + "]");
        $(cellDown).addClass("nextTo");
        nextToElementColor(cellDown);
    }
}
function nextToLeft(row, column) {
    let cellLeft = document.getElementById(row + "," + (column - 1));
    if ($(cellLeft).hasClass("wall")) {/*Do nothing*/ }
    else if ($(cellLeft).attr("style")) { }
    else if ($(cellLeft).hasClass("startNode")) { }
    else if ($(cellLeft).hasClass("visitedNode")) { }
    else {
        $(cellLeft).addClass("[" + lambda + "]");
        $(cellLeft).addClass("nextTo");
        nextToElementColor(cellLeft);
    }
}
function nextToRight(row, column) {
    let cellRight = document.getElementById(row + "," + (column + 1));
    if ($(cellRight).hasClass("wall")) {/*Do nothing*/ }
    else if ($(cellRight).attr("style")) { }
    else if ($(cellRight).hasClass("startNode")) { }
    else if ($(cellRight).hasClass("visitedNode")) { }
    else {
        $(cellRight).addClass("[" + lambda + "]");
        $(cellRight).addClass("nextTo");
        nextToElementColor(cellRight);
    }
}

//Changing color of the nextTo element
function nextToElementColor(element) {
    setInterval(function () {
        if ($(element).hasClass("nextTo")) {
            $(element).addClass("nodeTransition");
        }
    }, 200);

    setInterval(function () {
        if ($(element).hasClass("nodeTransition")) {
            $(element).removeClass("nextTo");
            $(element).addClass("visitedNode");
        }
    }, 400);

    setInterval(function () {
        if ($(element).hasClass("visitedNode")) {
            $(element).removeClass("nodeTransition");
        }
    }, 600);
}

function returnToUp(row, column) {
    let cellUp = document.getElementById(row - 1 + "," + column);
    if ($(cellUp).hasClass("[" + lambda + "]")) {
        $(cellUp).addClass("returningPath");
        moveOn = true;
        returningPathElementColor(cellUp);
    }
}
function returnToDown(row, column) {
    let cellDown = document.getElementById((row + 1) + "," + column);
    if ($(cellDown).hasClass("[" + lambda + "]")) {
        $(cellDown).addClass("returningPath");
        moveOn = true;
        returningPathElementColor(cellDown);
    }
}
function returnToLeft(row, column) {
    let cellLeft = document.getElementById(row + "," + (column - 1));
    if ($(cellLeft).hasClass("[" + lambda + "]")) {
        $(cellLeft).addClass("returningPath");
        moveOn = true;
        returningPathElementColor(cellLeft);
    }
}
function returnToRight(row, column) {
    let cellRight = document.getElementById(row + "," + (column + 1));
    if ($(cellRight).hasClass("[" + lambda + "]")) {
        $(cellRight).addClass("returningPath");
        moveOn = true;
        returningPathElementColor(cellRight);
    }
}

//Changing color of the returningPath element
function returningPathElementColor(element) {
    setTimeout(function () {
        if ($(element).hasClass("returningPath")) {
            $(element).addClass("path");
        }
    }, 150);

    setTimeout(function () {
        if ($(element).hasClass("path")) {
            $(element).removeClass("returningPath");
        }
    }, 300);
}