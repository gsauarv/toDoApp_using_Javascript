let btn = document.getElementById("inputBtn");
let inputTodos = document.getElementById("toDo");
let todoMain = document.getElementById("todoMain");
let spanMain = document.getElementById("spanMain");
let mainDiv = document.getElementById("todos");
let date = new Date();
let time = new Date().getDate();
console.log();
// console.log(date, time);

let todoList = [];
let count = 0;
// Event Listner For adding To do tasks.
btn.addEventListener("click", () => {
  let value = inputTodos.value;
  if (value != "") {
    todoList.push(value);
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("dateContainer");
    let dateParagraph = document.createElement("p");
    dateParagraph.innerHTML =
      time +
      " " +
      date.toLocaleString("default", {
        month: "short",
      });
    dateDiv.appendChild(dateParagraph);
    mainDiv.appendChild(dateDiv);
    let div = document.createElement("div");
    div.classList.add("todoContainer");
    let p = document.createElement("p");
    p.innerHTML = todoList[count];
    ++count;
    div.appendChild(p);
    let removeBtn = document.createElement("BUTTON");
    removeBtn.setAttribute("class", "imgBtn");
    removeBtn.setAttribute("value", count);
    removeBtn.innerHTML = "<img src='images/1214926.svg'>";
    div.appendChild(removeBtn);
    mainDiv.appendChild(div);
    removeBtn.addEventListener("click", () => {
      console.log(removeBtn.value);
      dateParagraph.parentNode.parentNode.removeChild(dateParagraph.parentNode);
      removeBtn.parentNode.parentNode.removeChild(removeBtn.parentNode);
    });
  } else {
    console.log("Cannot Insert Empty Todo");
  }
});
