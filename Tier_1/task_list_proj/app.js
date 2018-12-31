// dom elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
}

// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please Enter a Task')
    return
  }

  //create new li element
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-times"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Delete Item?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault()

}