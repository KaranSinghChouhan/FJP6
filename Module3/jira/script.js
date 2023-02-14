let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let removeBtn = document.querySelector(".remove-btn");
let toolBoxColors = document.querySelectorAll(".color");
let addModal = true;
let removeFlag = false;
let colors = ['red', 'yellow', 'orange', 'green'];
let modalPriorityColor = colors[colors.length - 1];
var uid = new ShortUniqueId();

let ticketArr = [];

if(localStorage.getItem("tickets")){
    let str = localStorage.getItem("tickets");
    let arr = JSON.parse(str);
    ticketArr = arr;
    for(let i = 0; i < arr.length; i++){
        let ticketObj = arr[i];
        createTicket(ticketObj.color,ticketObj.task,ticketObj.id);
    }
}

for (let i = 0; i < toolBoxColors.length; i++) {
    toolBoxColors[i].addEventListener("click", function () {
        let currentColor = toolBoxColors[i].classList[1];
        let filteredArr = [];
        for (let j = 0; j < ticketArr.length; j++) {
            if (ticketArr[j].color == currentColor) {
                filteredArr.push(ticketArr[j]);
            }
        }
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let k = 0; k < allTickets.length; k++) {
            allTickets[k].remove();
        }

        for (let l = 0; l < filteredArr.length; l++) {
            let ticket = filteredArr[l];
            let color = ticket.color;
            let task = ticket.task;
            let id = ticket.id;
            createTicket(color, task, id);
        }
    })

    toolBoxColors[i].addEventListener("dblclick", function () {
        let allTickets = document.querySelectorAll(".ticket-cont");
        for (let j = 0; j < allTickets.length; j++) {
            allTickets[j].remove();
        }
        for (let i = 0; i < ticketArr.length; i++) {
            let ticket = ticketArr[i];
            let color = ticket.color;
            let task = ticket.task;
            let id = ticket.id;
            createTicket(color, task, id)
        }
    })
}

addBtn.addEventListener("click", function () {
    if (addModal) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
    addModal = !addModal;
})

for (let i = 0; i < allPriorityColor.length; i++) {
    allPriorityColor[i].addEventListener("click", function () {
        for (let j = 0; j < allPriorityColor.length; j++) {
            allPriorityColor[j].classList.remove("active");
        }
        allPriorityColor[i].classList.add("active");
        modalPriorityColor = allPriorityColor[i].classList[0];
    })
}

modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == 'Enter') {
        createTicket(modalPriorityColor, taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})

removeBtn.addEventListener("click", function () {
    if (removeFlag) {
        removeBtn.style.color = "black";
    } else {
        removeBtn.style.color = "red";
    }
    removeFlag = !removeFlag;
})

function createTicket(ticketColor, task, ticketId) {
    let id;
    if (ticketId == undefined) {
        id = uid();
    } else {
        id = ticketId;
    }
    // <div class="ticket-cont">
    // <div class="ticket-color"></div>
    // <div class="ticket-id">#qzop3o</div>
    // <div class="task-area">Some Task</div>
    // </div>

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id">#${id}</div>
                            <div class="task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa fa-lock"></i></div>`

    mainCont.appendChild(ticketCont);

    //lock-unloack toggle
    let lockunlockButton = ticketCont.querySelector(".lock-unlock i");//directly picking icon from lock unlock class
    let ticketTaskArea = ticketCont.querySelector(".task-area");
    lockunlockButton.addEventListener("click", function () {
        
        //Update UI
        if (lockunlockButton.classList.contains("fa-lock")) {
            lockunlockButton.classList.remove("fa-lock");
            lockunlockButton.classList.add("fa-unlock");
            ticketTaskArea.setAttribute("contenteditable", "true");
        } else {
            lockunlockButton.classList.remove("fa-unlock");
            lockunlockButton.classList.add("fa-lock");
            ticketTaskArea.setAttribute("contenteditable", "false");
        }

        //if thwe task changes after making ticket, so change the array
        let ticketIndex = getTicketIndex(id);
        ticketArr[ticketIndex].task =  ticketTaskArea.textContent;
        updateLocalStorage();
    })

    //Deleting Ticket
    ticketCont.addEventListener("click", function () {
        if (removeFlag) {
            //Delete from UI
            ticketCont.remove();
            //Delete from ticketArray
            let ticketIndex = getTicketIndex(id);
            ticketArr.splice(ticketIndex,1);
            updateLocalStorage();
        }
    })

    //changing color priority in ticket
    let ticketColorBand = ticketCont.querySelector(".ticket-color");
    //here instead of document ticketCont is used, because we are talking about the current ticket,
    //if we had used document, then it will see the first ticket
    ticketColorBand.addEventListener("click", function () {

        //Update UI
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIndex = -1;
        for (let i = 0; i < colors.length; i++) {
            if (currentTicketColor == colors[i]) {
                currentTicketColorIndex = i;
                break;//To know the index of current color
            }
        }
        let nextColorIndex = (currentTicketColorIndex + 1) % colors.length;
        let nextColor = colors[nextColorIndex];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(nextColor);

        //Update TicketArr if we change the color of ticket
        let ticketIndex = getTicketIndex(id);
        ticketArr[ticketIndex].color = nextColor;
        updateLocalStorage();
    })

    if (ticketId == undefined) {
        ticketArr.push({ "color": ticketColor, "task": task, "id": id })
        updateLocalStorage();
    }
    // console.log(ticketArr);
}

function getTicketIndex(id){
    for (let i = 0; i < ticketArr.length; i++) {
        if (ticketArr[i].id == id) {
            return i;
        }
    }
}

function updateLocalStorage(){
    let stringifyArr = JSON.stringify(ticketArr);
    localStorage.setItem("tickets",stringifyArr);
}