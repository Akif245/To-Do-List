let box = document.getElementById("box")
let list = document.getElementById("list")
function addtask() {
          if (box.value === '') {
                    alert("Write something ")
          }
          else{
                    let li = document.createElement("li")
                    li.innerHTML = box.value
                    list.appendChild(li )
          }
          
}