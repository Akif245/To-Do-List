let box = document.getElementById("box")
let list = document.getElementById("list")
function addtask() {
          if (box.value === '') {
                    alert("Write something ")
          }
          else{
                    let li = document.createElement("li")
                    li.innerHTML = box.value
                    list.appendChild(li)
                     let span = document.createElement("span")
                     span.innerHTML = "  \u00d7"   
                     li.appendChild(span)
          }
          box.value ="";
          
}
list.addEventListener("click",function (e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("over")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)