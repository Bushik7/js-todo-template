const tasks = [
    {"id":"1","text":"Wake up","completed":true},
    {"id":"2","text":"To drink coffee","completed":false},
    {"id":"3","text":"Smoke","completed":true},
    {"id":"4","text":"Eat","completed":false},
    {"id":"5","text":"Work","completed":false},
    {"id":"6","text":"Relax","completed":true},
    {"id":"7","text":"Sleep","completed":true}
];

// ОТОБРАЖЕНИЕ

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'text';

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

// ДОБАВЛЕНИЕ

const createTaskForm = document.querySelector('.create-task-block')
  createTaskForm.addEventListener('submit', event => {
    event.preventDefault()
  
    const newTaskText = event.target.taskName.value || ''
    if (newTaskText) {
      const newTask = {
        id: Date.now().toString(),
        text: newTaskText,
      }
      tasks.push(newTask)
      const taskItem = createTaskItem(newTask.id, newTask.text)
      tasksListContainer.append(taskItem)
    }
  })

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});

// УДАЛЕНИЕ


const createDeleteModal = (text) => {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay modal-overlay_hidden';

  const deleteModal = document.createElement('div');
  deleteModal.className = 'delete-modal';

  modalOverlay.append(deleteModal);

  const modalTitle = document.createElement('h3');
  modalTitle.className = 'delete-modal__question';
  modalTitle.innerText = text;
  const modalButtons = document.createElement('div');
  modalButtons.className = 'delete-modal__buttons';
  
  const cancelButton = document.createElement('button');
  cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
  cancelButton.innerText = 'Отмена'
  const confirmButton = document.createElement('button');
  confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
  confirmButton.innerText = 'Удалить';

  deleteModal.append(modalTitle, modalButtons); 
  modalButtons.append(cancelButton, confirmButton);

  return {
      deleteModal,
      cancelButton,
      confirmButton,
      modalOverlay,
  };
}


let targetTaskIdToDelete = null;
const {
  deleteModal, cancelButton, confirmButton, modalOverlay,
} = createDeleteModal('Вы действительно хотите удалить эту задачу?');
document.body.prepend(modalOverlay);
cancelButton.addEventListener('click', () => {
  modalOverlay.classList.add('modal-overlay_hidden');
});
confirmButton.addEventListener('click', () => {
  const deleteIndex = tasks.findIndex((task) => task.id === targetTaskIdToDelete);
  if (deleteIndex >= 0) {
      tasks.splice(deleteIndex, 1);
      const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
      taskItemHTML.remove();
      modalOverlay.classList.add('modal-overlay_hidden');
  }
});

const tasksList = document.querySelector('.tasks-list');
tasksList.addEventListener('click', (event) => {
  const { target } = event;
  const closestTarget = target.closest('.task-item__main-container');
  if (closestTarget) {
      const closestTask = closestTarget.closest('.task-item');
      if (closestTask) {
          const taskId = closestTask.dataset.taskId;
          targetTaskIdToDelete = taskId;
          modalOverlay.classList.remove('modal-overlay_hidden');
      }
  }
});



