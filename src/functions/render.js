import { taskManager } from "./task-manager"
import { leftMenu } from "./left-menu";

const taskWindow = document.querySelector(".add-task-form");

let num = 0;

function clearRenderedTasks(){
    document.querySelector('#task-container').innerHTML = "";
}



export const render = {

    init(){
        this.toggleInfoBarPriority();
    },

    //toggle completed task
    completeTask(taskBtn){
        taskBtn.classList.add("completed-task")

        //change button color and cross out description
        let state = taskBtn.parentNode.dataset.complete;
        if (state == "true"){
            taskBtn.classList.add("completed-task")
            let task = taskBtn.parentNode.querySelector(".task");
            task.querySelector(".task-content").classList.add("completed-task-description");
            task.classList.add("task-gray-background");
            
        }
        else{
            taskBtn.classList.remove("completed-task")
            let task = taskBtn.parentNode.querySelector(".task");
            task.querySelector(".task-content").classList.remove("completed-task-description");
            task.classList.remove("task-gray-background");

        };

        //cross out description

    },

    updateAddTo(projectList){
        const addToContainer = document.querySelector("#choose-project");
        addToContainer.innerHTML = "";
    
        projectList.forEach((project) => {
            const newOption = document.createElement("option");
            newOption.value = project;
            newOption.textContent = project;
            addToContainer.appendChild(newOption);
        })
    
    },

    //called when "add task" click. opens newTask Window
    openTask()
    {
        taskWindow.classList.remove("hide");

    },

    closeTask()
    {
        taskWindow.classList.add("hide");
    },

    togglePriority(priority)
    {
        const toggleBtns = document.querySelectorAll('.priority-choose .priority-button');
        toggleBtns.forEach((btn) => btn.classList.remove('toggled'));
        priority.classList.add('toggled');
    },

    toggleInfoBarPriority()
    {
        let currentToggles = taskManager.getToggles()
        let btn = document.querySelector(".priority-toggle #sort-low");

        if (currentToggles[0])
        {
            btn.classList.add("infobar-toggled");
        }
        else{btn.classList.remove("infobar-toggled");}

        btn = document.querySelector(".priority-toggle #sort-medium");
        if (currentToggles[1])
        {
            btn.classList.add('infobar-toggled');
        }
        else{btn.classList.remove("infobar-toggled");}

        btn = document.querySelector(".priority-toggle #sort-high");
        if (currentToggles[2])
        {
            
            btn.classList.add('infobar-toggled');
        }
        else{btn.classList.remove("infobar-toggled");}
    },

    renderProjectName(projectName){
        let projectNameContainer = document.querySelector("#list-name");
        projectNameContainer.textContent = projectName;
    },

   

    //receive an array of task objects then build a task from the content of each task
    renderTasks(taskList){
        clearRenderedTasks();

        for (const task of taskList) {
      
            this.buildNewTask(task.getPriority(),task.getDescription(),task.getDate(), task.getCompleted());
        }

        //update render for taskButton complete
        const allTasks = document.querySelectorAll(".task-item .uncompleted-task"); 
        allTasks.forEach((taskBtn) => {
                this.completeTask(taskBtn);
            })
    },

    renderProjects(projects){

        const projectContainer = document.querySelector("#projects");
        projectContainer.innerHTML = "";

        projects.forEach((projectName) => {

            if ((projectName != "Today") && (projectName != "This Week"))
            {
                

                const projectButton = document.createElement("button");
                projectButton.classList.add("nav-item");
                projectButton.classList.add("project");
                projectButton.textContent = projectName;
                projectContainer.appendChild(projectButton);
            }
        })

        document.querySelector("#input-project").value = "";

        //recal left-menu init for event listeners
        leftMenu.init();
    },

    //set up taskPrioirtyColor and also update it
    setTaskPriorityColor(priorityElement, priority)
    {
        if (priority == "low"){
        priorityElement.style.backgroundColor = "rgb(127, 186, 127)";
        }
        else if (priority == "medium")
        {
            priorityElement.style.backgroundColor = "rgb(235, 235, 144)";
        }
        else if (priority == "high")
        {
            priorityElement.style.backgroundColor = "rgb(216, 135, 135)";
        }
    },

   buildNewTask(priority, description, date, completed)
    {
        const taskContainer = document.querySelector("#task-container");

        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.setAttribute('data-complete', completed);
        taskContainer.appendChild(taskItem);
        

        const completeTaskBtn = document.createElement("button");
        completeTaskBtn.classList.add("uncompleted-task");
        taskItem.appendChild(completeTaskBtn);

        const task = document.createElement("div");
        task.classList.add("task");
        taskItem.appendChild(task);

        const taskLeftContent = document.createElement("div");
        taskLeftContent.classList.add("task-leftcontent");
        task.appendChild(taskLeftContent);

        const priorityLabel = document.createElement("span");
        priorityLabel.classList.add("priority-label");
        this.setTaskPriorityColor(priorityLabel, priority);
        taskLeftContent.appendChild(priorityLabel);

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");
        taskContent.textContent = description//replace
        taskLeftContent.appendChild(taskContent);

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        task.appendChild(taskInfo);

        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        taskDate.textContent = date;
        taskInfo.appendChild(taskDate);

        const taskEditButtons = document.createElement("div");
        taskEditButtons.classList.add("task-edit-buttons");
        taskInfo.appendChild(taskEditButtons);

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("task-edit");
        taskEdit.classList.add("button-theme");
        taskEdit.setAttribute("disabled", "disabled");
        taskEdit.textContent = "Edit";
        taskEditButtons.appendChild(taskEdit);

        const taskDelete = document.createElement("div");
        taskDelete.classList.add("task-delete");
        taskDelete.classList.add("button-theme");
        taskDelete.textContent = "X";
        taskEditButtons.appendChild(taskDelete);

        return taskItem;
    }

    
};



