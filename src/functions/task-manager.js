import { render } from "./render";
import { infoBar } from "./info-bar";

class Task 
{
    constructor(description, date, priority, fromProject){
        this.description = description; //main task content
        this.date = date;   //end date
        this.priority = priority;   //low, med, high
        this.fromProject = fromProject; 
        this.completed = false;
    }

    getPriority(){
        return this.priority;
    }
    getDescription(){
        return this.description;
    }
    getDate(){
        return this.date;
    }
    getProject(){
        return this.fromProject;
    }
    getCompleted(){
        return this.completed;
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }

    //deletetask
};


class TaskList
{
    constructor(){
        this.taskList = [];
    }

    sortProject = "Today";
    sortBy = "";
    toggleLow = true;
    toggleMedium = true;
    toggleHigh = true;

    updateSortProject(project) {
        this.sortProject = project;
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

    getToggles(){
        return [this.toggleLow,this.toggleMedium,this.toggleHigh];
    }

    deleteTask(task){
        let index = this.taskList.indexOf(task);
        if(index !== -1) {
            this.taskList.splice(index, 1);
        }
    }

    //get total tasks, subtract per complete task
    getCompletedTasks(){
        let total = this.taskList.length;
        this.taskList.forEach((task) => {
            if(task.completed == true) {
                total -= 1;
            }
        })

        return total;
    }

}

//havent sorted in a while. lets just bubble sort by date number
function sortbyDate(myArray){
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for(let i=1; i < myArray.length; i++)
        {
            if(myArray[i].getDate() < myArray[i-1].getDate())
            {
                let temp = myArray[i];
                myArray[i] = myArray[i-1];
                myArray[i-1] = temp;
                sorted = false; // if it never sorts, then sorted stays true
            }
        }
    }
    return myArray;
}

let myTasks = new TaskList();
let renderedTasks = new TaskList();

//private var
let filteredTasks = [];
let unfilteredTasks = [];
let projectTasks = [];
let sortBy = "";
let sortPriority = "";




export const taskManager =
{
    init() {

    },

    deleteTask(taskDescription){
        console.log(taskDescription);
        myTasks.getTasks().forEach((task) => {
            if(task.getDescription() == taskDescription)
            {
                myTasks.deleteTask(task);
            }
        })
    },

    //using description, go over myTasks to find task with matching description then toggle that task
    toggleCompleted(taskDescription){
        myTasks.getTasks().forEach((task) => {
            if(task.getDescription() == taskDescription)
            {
                task.toggleCompleted();
            }
        })

        infoBar.updateTasksLeft(myTasks.getCompletedTasks());
    },

    getToggles()
    {
        return myTasks.getToggles();
    },

    //create new task, add it to the array, render tasklist
    addtask(inputDescription, inputDate, inputPriority, inputProject) {
        const newTask = new Task(inputDescription, inputDate, inputPriority, inputProject);
        myTasks.appendTask(newTask);

        this.filterProject(myTasks.sortProject);
    },

    edittask() {

    },

    updateProjectFilter(project){
        myTasks.updateSortProject(project);
        this.filterProject(project);
    },
    updateSortFilter(sort){
        myTasks.updateSort(sort);
    },
    updatePriorityFilter(priority){
        //call function from bar
    },

    //change tasks shown based on - project selected, sort, priority toggle
    filterProject(project) {
        unfilteredTasks = [];
        filteredTasks = [];

        //if passed project, make that new project, if not passed new project, take current project.
        if(project){myTasks.filterProject = project}
        else {project = myTasks.filterProject};

        //first make an array based on project selected, then apply sort and final apply toggle so 3 levels
        if (project == "All Tasks") 
        {
            filteredTasks = myTasks.getTasks();
        }
        else {
            unfilteredTasks = myTasks.getTasks()
            unfilteredTasks.forEach((task) => {
                if(task.getProject() == project)
                {
                    filteredTasks.push(task);
                }
            })
        }   

        
        filteredTasks.forEach((task) => {
            renderedTasks.appendTask(task);
        })
        
        projectTasks = filteredTasks;
        render.renderTasks(filteredTasks);//send a list of task objects
    },

    //create toggled list from base list, create filtered list from toggled list, then render
    filterSortBy(category)
    {
        if (category) {sortBy = category}
        else {category = sortBy};
        //reset tasks
        console.log(category);

        unfilteredTasks = projectTasks;
        filteredTasks = [];

        let toggledTasks = [];

        if(myTasks.toggleLow)
        {
            unfilteredTasks.forEach((task) => {
                if(task.getPriority() == "low"){
                    toggledTasks.push(task);
                }
            })
        }

        if(myTasks.toggleMedium)
        {
            unfilteredTasks.forEach((task) => {
                if(task.getPriority() == "medium"){
                    toggledTasks.push(task);
                }
            })
        }

        if(myTasks.toggleHigh)
        {
            unfilteredTasks.forEach((task) => {
                if(task.getPriority() == "high"){
                    toggledTasks.push(task);
                }
            })
        }

        unfilteredTasks = toggledTasks;
        //filter toggled list based on category
        switch(category)
        {
            //add low tasks, then medium, then high
            case "priority-down":
            {
                console.log("sorting by priority-down");

                unfilteredTasks.forEach((task) => {
                    
                    if(task.getPriority() == "low"){ filteredTasks.push(task)};
                })
                unfilteredTasks.forEach((task) => {
                    if(task.getPriority() == "medium"){ filteredTasks.push(task)};
                })
                unfilteredTasks.forEach((task) => {
                    if(task.getPriority() == "high"){ filteredTasks.push(task)};
                })
                break;
            }
            //add high tasks, then medium, then low
            case "priority-up":
                {
                    
                    console.log(" sorting by priority-up");

                    unfilteredTasks.forEach((task) => {
                        if(task.getPriority() == "high"){ filteredTasks.push(task)};
                    })
                    unfilteredTasks.forEach((task) => {
                        if(task.getPriority() == "medium"){ filteredTasks.push(task)};
                    })
                    unfilteredTasks.forEach((task) => {
                        if(task.getPriority() == "low"){ filteredTasks.push(task)};
                    })
                    break;
                }
                //sort array by date
            case "due-date":
                {
                    filteredTasks = sortbyDate(unfilteredTasks);
                    break;
                }
        }

        console.log("these are the new filtered tasks from sortby");
        console.log(filteredTasks);
        render.renderTasks(filteredTasks);
        infoBar.updateTasksLeft(myTasks.getCompletedTasks());
    },

    
    priorityToggle(button){

        //toggle priority state
        switch(button.textContent)
        {
            case "Low":
                {
                    myTasks.toggleLow = !(myTasks.toggleLow);
                    break;
                }

            case "Medium":
                {
                    myTasks.toggleMedium = !(myTasks.toggleMedium);
                    break;
                }
            case "High":
                {
                    myTasks.toggleHigh = !(myTasks.toggleHigh);
                    break;
                }
        }
    }

};


// export const taskManager = function() {

//     const taskList = [];

//     const addTaskBtn = document.querySelector("#add-task");
//     addTaskBtn.addEventListener('click', () => {
//         addTask();
//     })
//     const task = new Task("firstTask", "12/3/23", "high")
//     taskList.push(task):;

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

