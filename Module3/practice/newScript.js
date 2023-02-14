let inputTag = document.querySelector(".inputTag");
let ulTag = document.querySelector(".ulTag");

inputTag.addEventListener("keydown",function(e){
    //console.log(e);
    let key = e.key;
    //console.log(key);
    if(key == "Enter"){
        let text = inputTag.value;
        inputTag.value = "";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${text}</div>
        <div class="delete"><i class="fa fa-trash"></i></div>`
        ulTag.appendChild(liTag);
        ulTag.appendChild(liTag);
    }
    
})