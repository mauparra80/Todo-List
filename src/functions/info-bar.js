import { taskManager } from "./task-manager";
import render from "./render";

export default function infoBar(){

    const addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.addEventListener('click', () => {
        render();
    })

}