document.addEventListener("DOMContentLoaded", () => {
  // your code here

  
  const submitButton = document.getElementById('create-task-form')

  submitButton.addEventListener('submit', (e) => {  
  
    e.preventDefault()
  
    let taskValue = document.getElementById('new-task-description').value
    let taskUl = document.getElementById('tasks')
    let taskLi = document.createElement('li')
    taskLi.innerHTML = `${taskValue} - Due Date ${dateInput.value}`.fontcolor(selectColor.value)
    let taskButton = document.createElement('button')
    taskButton.innerText = 'X'
    taskLi.append(taskButton)
    taskUl.appendChild(taskLi)

    taskButton.addEventListener('click', (e) => {
      e.preventDefault
      taskLi.remove();
    })
  })
  const selectColor = document.createElement('select');
  selectColor.options.add( new Option("High Priority", 'red') );
  selectColor.options.add( new Option("Medium Priority", 'green') );
  selectColor.options.add( new Option("Low Priority", 'yellow') );
  document.getElementById('new-task-description').after(selectColor)

  const dateInput = document.createElement("INPUT")
  dateInput.setAttribute("type", "date");
  selectColor.after(dateInput);
});







    // taskLi.innerHTML = `${taskValue} <button id="${taskValue}">X</button>`

// nodeList = document.getElementById('main-content').querySelectorAll('li');
// let listArray = [...nodeList];
// let deleteTask = function(description) {
//   listArray = listArray.filter((task) => task.innerText.split(' ')[0] !== description);
// }


