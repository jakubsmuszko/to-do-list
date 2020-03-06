const inputButton = document.getElementById("inputbutton");
const ul = document.querySelector("ul");
const newtask = document.getElementById("newtask");

newtaskLength = () => {
  return newtask.value.length;
};

addTask = () => {
  if (newtaskLength() > 0) {
    createTask();
  }
};

createTask = () => {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(newtask.value));
  li.classList.add("txt");
  ul.appendChild(li);
  newtask.value = "";
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("red");
  li.appendChild(btn);
  btn.onclick = removeTask;
};

addListAfterKeypress = event => {
  if (newtaskLength() > 0 && event.keyCode === 13) {
    createTask();
  }
};

doneTask = d => {
  if (d.target.tagName === "LI") {
    d.target.classList.toggle("done");
  }
  console.log("test");
};

removeTask = event => {
  let taskButton = event.target.parentNode;
  taskButton.parentNode.removeChild(taskButton);
};

inputButton.addEventListener("click", addTask);
ul.addEventListener("click", doneTask);
newtask.addEventListener("keypress", addListAfterKeypress)