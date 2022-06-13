const add = document.querySelector("#add")
const input = document.querySelector("#input");
var todo = document.querySelector("#todo__value")

add.addEventListener("click", function() {
    const value = input.value
    const box = document.createElement('div')
    box.classList.add("todo__value-box")
    if(value == ""){
        alert('you must write something');
        return
    }
    var text = document.createElement("span")
    text.textContent = value
    text.className = "todo__value-box-text";

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "delete";
    del.addEventListener("click", function() {
        todo.removeChild(box)
    })

    box.appendChild(text);
    box.appendChild(del);
    todo.appendChild(box)
    input.value = ""
})
