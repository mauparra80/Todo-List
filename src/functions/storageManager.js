import { taskManager } from "./task-manager";

export const storageManager = 
{
    //if localStorage contains taskObject, fill tasks
    //taskList is an array of task objects
    init() {
        console.log("checking previous storage");

        if(localStorage.getItem("storedTaskList")){
            console.log("previous storage found, setting taskList now");
            let tempList = JSON.parse(localStorage.getItem("storedTaskList"));
            console.log(tempList);
            taskManager.initiateTaskList(tempList);
        }

        // localStorage.clear();
    },

    //when we add new task, it deletes its contents?
    //messed up before we add the task. the task object has undefined data.
    addTasktoStorage(taskList) {
        console.log(taskList);
        console.log("adding task to storage");
        localStorage.setItem("storedTaskList", JSON.stringify(taskList));
        console.log(localStorage.getItem("storedTaskList"));
    }
}