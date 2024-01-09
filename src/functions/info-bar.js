import { taskManager } from "./task-manager";
import { render } from "./render";

//dom variables
const addTaskBtn = document.querySelector("#add-task");
const sort = document.querySelector("#sort");
const listName = document.querySelector("#list-name");
const priorityToggle = document.querySelector(".priority-toggle");
const tasksLeft = document.querySelector(".tasks-left");
const sortByBtn = document.querySelector("#sort");


export const infoBar = {
    
    //initialize variable listeners
    init(){

        //open newTask 
        addTaskBtn.addEventListener('click', () => {
            render.openTask();
        });

        //update sort array and render list and sort
        sort.addEventListener('click', () => {
            console.log("sort changed")
        });

        //set toggle state, update render, sort toggle state
        priorityToggle.addEventListener('click', (e) => {
            taskManager.priorityToggle(e.target);
            taskManager.filterSortBy(sortByBtn.value);
            render.toggleInfoBarPriority();
        });

        //update filterSortby
        sortByBtn.addEventListener('click', () => {
            taskManager.filterSortBy(sortByBtn.value);
            
        })
    },
    
    updateTasksLeft(total){
        let tasksLeft = total + " tasks left";
        document.querySelector("#tasks-left").textContent = tasksLeft;
    }

    //add task button listener
};


