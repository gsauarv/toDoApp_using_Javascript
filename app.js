let btn = document.getElementById("inputBtn");
let inputTodos = document.getElementById("toDo");
let todoMain = document.getElementById("todoMain");
let spanMain = document.getElementById("spanMain");
let mainDiv = document.getElementById("todos");
btn.addEventListener("click", () => {
  let value = inputTodos.value;
  if (value != "") {
    let div = document.createElement("div");
    div.classList.add("todoContainer");
    let p = document.createElement("p");
    p.setAttribute("id", "todoMain");
    p.innerHTML = value;
    div.appendChild(p);
    mainDiv.appendChild(div);
  } else {
    console.log("Cannot Insert Empty Todo");
  }
});
