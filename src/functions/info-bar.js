import { taskManager } from "./task-manager";
import { render } from "./render";

//dom variables
const addTaskBtn = document.querySelector("#add-task");
const sort = document.querySelector("#sort");
const listName = document.querySelector("#list-name");
const priorityToggle = document.querySelector(".priority-toggle");
const tasksLeft = document.querySelector(".tasks-left");


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

        //update sort array render list and buttons
        priorityToggle.addEventListener('click', () => {
            console.log("priority changed");
        });
    },
    

    //add task button listener
   

};


