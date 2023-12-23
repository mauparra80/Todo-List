import { render } from "./render";
import { taskManager } from "./task-manager";

//global var
let inputDescription;
let inputDate;
let inputPriority = "low";
let inputProject;

//dom variables
const closeBtn = document.querySelector(".exit-add-task");
const submitBtn = document.querySelector('#submit-newtask');
const taskDescription = document.getElementById('task-description')

const lowPriorityBtn = document.querySelector("#choose-low-priority");
const mediumPriorityBtn = document.querySelector("#choose-medium-priority");
const highPriorityBtn = document.querySelector("#choose-high-priority");

//private functions

//return false if description is null
function inputCheck()
{
    if (taskDescription !== null && taskDescription.checkValidity()) {
        taskDescription.classList.remove('invalid-input');
        return true;
    } else {
        taskDescription.classList.add('invalid-input');
        console.log("invalid input");
        return false;
    }
}

//toggle priority button and save state. called when clicked
function togglePriority(priority){
    inputPriority = priority;
}

//save state of all new task inputs
function captureInput()
{
    inputDescription = document.getElementById('task-description').value;
    inputDate = document.getElementById('task-date').value;
    //input priority already saved
    inputProject = document.getElementById("choose-project");
}

//clear input from form
function clearInput()
{
    inputDescription = "";
    inputDate = "";
    inputPriority = "low";
    inputProject = "";

    document.getElementById('task-description').value = "";
    document.getElementById('task-date').value = "";
    togglePriority("low");
    render.togglePriority(lowPriorityBtn);
    document.getElementById('choose-project').value = "Today";
    
}


//public 
export const taskWindow = 
{
    init(){

        //reset New Task Input and close window
        closeBtn?.addEventListener('click', () => {
            //reset info
            render.closeTask();
        });

        //capture input, add new task to tasks, close task window, render tasks
        submitBtn?.addEventListener(
            'click', () => {
                event.preventDefault(); 
                console.log("submit clicked");
                if (inputCheck()){
                    captureInput();
                    taskManager.addtask(inputDescription, inputDate, inputPriority, inputProject);
                    render.closeTask();
                    clearInput();
                }
        });

        //save toggle state and render button
        lowPriorityBtn.addEventListener('click', () => {
            togglePriority("low");
            render.togglePriority(lowPriorityBtn);
        });
        mediumPriorityBtn.addEventListener('click', () => {
            togglePriority("medium");
            render.togglePriority(mediumPriorityBtn);
        });
        highPriorityBtn.addEventListener('click', () => {
            togglePriority("high");
            render.togglePriority(highPriorityBtn);
        });
    },


    //save window input into object and return





};