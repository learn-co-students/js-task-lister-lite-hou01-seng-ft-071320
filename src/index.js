document.addEventListener("DOMContentLoaded", () => {
  var forms = document.getElementById('create-task-form')
  var input = document.getElementById('new-task-description')
  var lists = document.querySelector('ul')
 

  forms.addEventListener ('submit',(e)=>{
    e.preventDefault()
    var ele=document.createElement('li')
    var butt=document.createElement('button')
    butt.innerText="X"
    ele.innerText = input.value
    ele.append(butt);
    lists.appendChild(ele); 
    input.value=""
    butt.addEventListener ('click',(e)=>{
      e.preventDefault()
      ele.remove()
      butt.remove()
    }
    )
  }
  )
}); 


