

class Task 
{
    constructor(title, date, priority, fromProject){
        this.title = title; //main task content
        this.date = date;   //end date
        this.priority = priority;   //low, med, high
        this.fromProject = fromProject; 
    }

    //deletetask
};


class taskList
{
    constructor(){
        this.taskList = [];
    }

    appendTask(newTask) {
        this.taskList.push(newTask);
    }

    printTasks(){
        console.log(this.taskList);
    }
}

let myTasks = new taskList();




export const taskManager =
{
    init() {

    },

    //create new task, add it to the array, render tasklist
    addtask(inputDescription, inputDate, inputPriority, inputProject) {
        const newTask = new Task(inputDescription, inputDate, inputPriority, inputProject);
        myTasks.appendTask(newTask);
        console.log("list of tasks" + myTasks.printTasks());
       
    },

    edittask() {

    }
};


// export const taskManager = function() {

//     const taskList = [];

//     const addTaskBtn = document.querySelector("#add-task");
//     addTaskBtn.addEventListener('click', () => {
//         addTask();
//     })
//     const task = new Task("firstTask", "12/3/23", "high")
//     taskList.push(task);

//     //pop task from list
//     function deleteTask(task){

//     };

//     //push task to end of list
//     function addTask(){
        
//     }

//     function edditTask(task){

//     }

//     function completeTask(task){

//     }

//     return taskList
// }

