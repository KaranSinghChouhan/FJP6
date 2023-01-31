let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keydown',function(e){
    //console.log(e);
    let key = e.key;
    if(key == "Enter"){
        let value = inputTag.value;//gives the value from input
        //console.log(value);
        if(value.length == 0){
            return;  //so it will not enter the empty tasks
        }
        inputTag.value= "";//empty the input tag
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${value}</div>
        <div class="delete"><i class="fa fa-trash"></i></div>`
        ulTag.appendChild(liTag);
        handleremoval(liTag);
    }
})

function handleremoval(liTag){
    let deleteDiv = liTag.querySelector(".delete");
    deleteDiv.addEventListener('click',function(){
        liTag.remove();
    })
}