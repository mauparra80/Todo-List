

class Task 
{
    constructor(title, date, priority, fromProject){
        this.title = title; //main task content
        this.date = date;   //end date
        this.priority = priority;   //low, med, high
        this.fromProject = fromProject; 
    }

    getProject(){
        return this.fromProject;
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

    getTasks(){
        return this.taskList;
    }
}

let myTasks = new taskList();
//private var
let sortProject = "This Week";
let sortBy;
let sortPriority;



export const taskManager =
{
    init() {

    },

    //create new task, add it to the array, render tasklist
    addtask(inputDescription, inputDate, inputPriority, inputProject) {
        const newTask = new Task(inputDescription, inputDate, inputPriority, inputProject);
        myTasks.appendTask(newTask);
        console.log("list of tasks" + myTasks.printTasks());
        this.filterTasks();
    },

    edittask() {

    },

    //change tasks shown based on - project selected, sort, priority toggle
    filterTasks() {
        let filteredTasks = [];
        let unfilteredTasks = [];

        //first make an array based on project selected, then apply sort and final apply toggle so 3 levels
        unfilteredTasks = myTasks.getTasks()
        unfilteredTasks.forEach((task) => {
            if(task.getProject() == sortProject)
            {
                filteredTasks.push(task);
            }
        })

        console.log("list of filtered tasks " + filteredTasks);
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

