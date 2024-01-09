
import { render } from "./render";
import { taskManager } from "./task-manager";

//toggle task completion
function toggleTaskCompletion(task){
    
    let state = task.parentNode.dataset.complete;
    if (state == "true"){
        task.parentNode.dataset.complete = "false"

    }
    else{
        task.parentNode.dataset.complete = "true"
    };

    //this will crash if two tasks have the same description
    taskManager.toggleCompleted(task.parentNode.querySelector(".task-content").textContent);

}

export const task = {

    init(){
        //updated. toggle completion, render completion 
        const taskContainer = document.querySelector("#task-container");
        taskContainer.addEventListener('click', (e) => {

            //updated. toggle completion, render completion 
            if(e.target.classList.contains('uncompleted-task')) {
                let task = e.target.closest("task-item");
                toggleTaskCompletion(e.target);
                render.completeTask(e.target);
            }

            //exit button. Delete task from manager. render tasks
            if(e.target.classList.contains('task-delete')) {
                taskManager.deleteTask(e.target.parentNode.parentNode.parentNode.querySelector(".task-content").textContent);//send .task

                //need to filter and render tasks again. this could be easier if I would have split the toggle and render functions on taskManager
                taskManager.filterProject();
                taskManager.filterSortBy();
                
            }
        })


    }
};