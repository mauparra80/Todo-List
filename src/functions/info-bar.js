import { taskManager } from "./task-manager";
import { render } from "./render";

export default function infoBar(){

    

    console.log("This is the render object" + render);
    //add task button listener
    const addTaskBtn = document.querySelector("#add-task");

    addTaskBtn.addEventListener('click', () => {
        console.log("addTask clicked");
        render.openTask();
    })

}


