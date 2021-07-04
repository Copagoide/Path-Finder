const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener('click', () => {
    for(let i = 0; i <= 22; i++){
        for(let j = 0; j <= 40; j++) {
            let cell = document.getElementById(i + "," + j);

            //Removing color from the canvas
            if($(cell).attr("style")){
                $(cell).removeAttr("style");
            }
            if ($(cell).hasClass("wall")) {
                $(cell).removeClass("wall");
            }
            //Removing classes from the canvas
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

            //Adding color to the start and end node
            if(i == 11 && j == 9){
                cell.style.background = "#a8dadc";
                cell.style.zindex = "100";
            }
            if(i == 11 && j == 31){
                cell.style.background = "#e63946";
            }
        }
    }
})