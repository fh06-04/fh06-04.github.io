
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');


addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    taskInput.value = '';
});


function createTaskElement(taskText) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'task-buttons';

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
        li.remove();
        const completedTask = document.createElement('li');
        completedTask.textContent = taskText;
        completedList.appendChild(completedTask);
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    return li;
}
