import { taskManager } from "./task-manager"

const render = function(){

    buildNewTask();



    function buildNewTask()
    {
        console.log("appending new task now");

        const taskContainer = document.querySelector("#task-container");

        const taskItem = document.createElement("div");
        taskItem.classList.add="task-item";
        taskContainer.appendChild(taskItem);
        

        const completeClass = document.createElement("button");
        completeClass.classList.add="completed-task";
        taskItem.appendChild(completeClass);

        const task = document.createElement("div");
        task.classList.add("task");
        taskItem.appendChild(task);

        const priorityLabel = document.createElement("span");
        priorityLabel.classList.add("priority-label");
        task.appendChild(priorityLabel);

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");
        taskContent.textContent = "task description" //replace
        task.appendChild(taskContent);

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        task.appendChild(taskInfo);

        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        taskDate.textContent = "3/12/23" //replace
        taskInfo.appendChild(taskDate);

        const taskEditButtons = document.createElement("div");
        taskEditButtons.classList.add("task-edit-buttons");
        taskInfo.classList.add("taskEditbuttons");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("task-edit");
        taskEditButtons.appendChild(taskEdit);

        const taskDelete = document.createElement("div");
        taskDelete.classList.add("task-delete");
        taskEditButtons.appendChild(taskDelete);
    }

    
}


export default render;