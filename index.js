const tasks = [
    {"id":"1","text":"Wake up","completed":true},
    {"id":"2","text":"To drink coffee","completed":false},
    {"id":"3","text":"Smoke","completed":true},
    {"id":"4","text":"Eat","completed":false},
    {"id":"5","text":"Work","completed":false},
    {"id":"6","text":"Relax","completed":true},
    {"id":"7","text":"Sleep","completed":true}
];

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement('div');
    taskItemText.className = 'text';
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'delete';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

    return taskItem;
}

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});


// function getTodoList(allTasks) {
//     const createTaskForm = document.querySelector('.task-input');
//     // console.log('createTaskForm', createTaskForm);

//     const tasksListContainerElements = allTasks.map((elem) => {
//         const tasksListContainer = document.createElement('div');
//         tasksListContainer.classList.add('text');

//         tasksListContainer.append(elem.text);
//         console.log('div', tasksListContainer);
//         return tasksListContainer
//     })
// //    console.log('liElements', liElements)
//     return createTaskForm.append(...tasksListContainerElements);
//     }
    
// getTodoList(tasks);


// function addNewTask() {
//     const taskInput = document.getElementById('task-input');
//     console.log('taskInput', taskInput.value)
//     const createTaskForm = document.querySelector('.task-input');
//     const tasksListContainer = document.createElement('div');
//     tasksListContainer.classList.add('text');
//     tasksListContainer.onclick = () => {
//         tasksListContainer.classList.add('active');
//     } 

//     const button = document.createElement('button');
//     button.classList.add('btn', 'btn-success');
//     button.innerText = 'DELETE'
//     button.onclick = () => {
//         tasksListContainer.remove();
//     }

    
//     tasksListContainer.append(button, taskInput.text);
//     createTaskForm(tasksListContainer);

// }


// function getTodoList(allTasks) {
//     const createTaskForm = document.querySelector('.task-input');
//     // console.log('createTaskForm', createTaskForm);

//     const tasksListContainerElements = allTasks.map((elem) => {
//         const tasksListContainer = document.createElement('div');
//         tasksListContainer.classList.add('text');
//         tasksListContainer.onclick = () => {
//             tasksListContainer.classList.add('active');
//         } 

//         const button = document.createElement('button');
//         button.classList.add('btn', 'btn-success');
//         button.innerText = 'DELETE'
//         button.onclick = () => {
//             tasksListContainer.remove();
//         }

        
//         tasksListContainer.append(button, elem.text);
//         // console.log('div', tasksListContainer);
//         return tasksListContainer
//     })
// //    console.log('liElements', liElements)
//     return createTaskForm.append(...tasksListContainerElements);
//     }
    
// getTodoList(tasks);


// const createTaskItem = (taskId, taskText) => {
//     const taskItem = document.createElement('li');
//     li.classList.add('list-group-item');

// }








