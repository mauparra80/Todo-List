

class Task {
    constructor(title, date, priority){
        this.title = title; //main task content
        this.date = date;   //end date
        this.priority = priority;   //low, med, high
    }

    fromProject = "all";


};


export const taskManager = function() {

    const taskList = [];

    const addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.addEventListener('click', () => {
        addTask();
    })
    const task = new Task("firstTask", "12/3/23", "high")
    taskList.push(task);

    //pop task from list
    function deleteTask(task){

    };

    //push task to end of list
    function addTask(){
        
    }

    function edditTask(task){

    }

    function completeTask(task){

    }

    return taskList
}

