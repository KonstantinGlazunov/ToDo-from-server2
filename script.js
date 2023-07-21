const olListTodo = document.getElementById('list_todo');
const addTaskButton = document.getElementById('addTask');
const task = document.getElementById('taskInput');

const url = 'https://jsonplaceholder.typicode.com/users/1/todos';

let data = [];

toDo();

async function toDo() {
  const response = await fetch(url);
  const dataList = await response.json();
  data = dataList;

  showData();
};

function showData() {
  let liHtml = '';
  data.forEach((element, index) => {
    let classDone = element.completed ? " done" : " ";
    const doneButton = `<button index=${index} class=btn-done ${classDone}> ${element.completed ? ' done' : 'not done'}</button>`
    let li = `<li class="li-task ${classDone}"> ${element.title}  ${doneButton}</li>`;
    liHtml += li;

  });
  olListTodo.innerHTML = liHtml;

  listners();
}

function listners() {

  let allButtons = document.getElementsByClassName('btn-done');
  Array.from(allButtons).forEach((btn) => {
    btn.addEventListener('click', () => {


      data[btn.getAttribute('index')].completed = !data[btn.getAttribute('index')].completed;

      showData();
    })

  });
}






