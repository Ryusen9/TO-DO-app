const menuBtn = document.getElementById('menuAvatar');
const minMenu = document.getElementById('minMenu');

menuBtn.addEventListener('click', () => {
  minMenu.classList.remove('hidden')
  minMenu.classList.add('block')
});

const closeBtn = document.getElementById('closeMenu');
closeBtn.addEventListener('click', () => {
  minMenu.classList.remove('block')
  minMenu.classList.add('hidden')
})

const addBtn = document.getElementById('addTask');
addBtn.addEventListener('click', function() {
  const taskSection = document.getElementById('taskContainer');
  const inputTask = document.getElementById('inputField');
  let task = inputTask.value;
  if (task === '') {
    alert('Please enter a task!')
    return;
  }
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `<div class="task1 w-full flex justify-between items-center gap-2">
                <div class="taskContainer flex justify-center items-center gap-4">
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <input type="checkbox" class="checkbox checkbox-primary" />
                    </label>
                  </div>
                  <p class="text-lg font-medium">${task}</p>
                </div>
                <button class="btn bg-purple-500 text-white" id="deleteBtn"><i class="fa-solid text-lg fa-trash"></i></button>
              </div>`
  taskSection.appendChild(newDiv);
  inputTask.value = '';
  const deleteTask = document.getElementById('deleteBtn');
  deleteTask.addEventListener('click', () => {
    taskSection.removeChild(newDiv)
  })
  
})