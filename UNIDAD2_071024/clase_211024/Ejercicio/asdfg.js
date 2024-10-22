const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    } else {
        alert('No se puede añadir la nada. Duuuuh.');
    }
});

const addTask = (task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        console.log(getTaskList());
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    console.log(getTaskList());
};

const getTaskList = () => {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(item => {
        tasks.push(item.textContent.replace('Eliminar', '').trim());
    });
    return tasks;
};
