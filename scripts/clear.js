const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener('click', () => {
    for(let i = 0; i <= 22; i++){
        for(let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);

            //Removing classes from the canvas
            if ($(cell).hasClass("wall")) {
                $(cell).removeClass("wall");
            }
            if ($(cell).hasClass("nextTo")) {
                $(cell).removeClass("nextTo");
            }
            if ($(cell).hasClass("visitedNode")) {
                $(cell).removeClass("visitedNode");
            }
            if ($(cell).hasClass("transition1")) {
                $(cell).removeClass("transition1");
            }
            if ($(cell).hasClass("transition2")) {
                $(cell).removeClass("transition2");
            }
            if ($(cell).hasClass("endNodeReached")) {
                $(cell).removeClass("endNodeReached");
                $(cell).addClass("endNode");
            }
        }
    }
})