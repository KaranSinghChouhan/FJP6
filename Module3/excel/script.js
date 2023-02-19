let cellsCont = document.querySelector(".cells-cont");

function initCells() {
    let cell = "";
    for (let i = 0; i < 100; i++) {
        cell += "<div class='row'>";
        //now for column
        for (let j = 0; j < 26; j++) {
            cell += "<div class = 'cell'>Cell</div>"
        }
        cell += "</div>"
    }
    cellsCont.innerHTML = cell;
}

initCells();