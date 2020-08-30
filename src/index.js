document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector("#create-task-form")

    // defining form + listening for submittal
    taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let descField = e.target.querySelector('#new-task-description')

    const taskLi = document.createElement('li')
    taskLi.innerText = descField.value + ' '
      
    tasksSection = document.querySelector('#tasks')
    const xButton = document.createElement('button')
    xButton.innerText = 'x'
    
    e.target.reset()

    // creating dropdown from array
    let prioArray = ['High', 'Medium', 'Low']

    const droppyThingy = document.createElement('select')
    droppyThingy.id = "task-priorities"
    tasksSection.appendChild(taskLi).appendChild(droppyThingy)
  
    for (const prio of prioArray) {
      let option = document.createElement("option")
      option.value = prio
      option.text = prio
      droppyThingy.appendChild(option)
    }
    
    // appending priority dropdown + taskDescription + delete button
    taskLi.append(droppyThingy)
    tasksSection.appendChild(taskLi).appendChild(xButton)

    // priority coloring
    droppyThingy.onchange = () => {
      
      let order
      let color
      if (droppyThingy.value === 'High') {
        color = 'red'
        order = 1
      } else if (droppyThingy.value === 'Medium') {
        color = 'yellow'
        order = 2
      } else if (droppyThingy.value === 'Low') {
        color = 'green'
        order = 3
      }
          
      taskLi.style.color = color
      taskLi.id = order

    }

    // delete
    xButton.addEventListener('click', (e) =>{
      e.preventDefault()
      taskLi.remove()
    })

  })

});

