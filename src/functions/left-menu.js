import { render } from "./render";
import { taskManager } from "./task-manager";

class ProjectList
{
    constructor(){
        this.projectList = ["Today", "This Week"];
    }

    addProject(project){
        this.projectList.push(project);
    }

    deleteProject(project){

    }

    getProjects(){
        return this.projectList;
    }

    printProjects(){console.log("project list " + this.projectList)}
}





let myProjects = new ProjectList();


export const leftMenu = 
{
    init() {

        //add new project, render, clearline
        const addProjectBtn = document.querySelector("#add-project-btn");
        addProjectBtn.addEventListener('click', () => {
            const newProjectName = document.querySelector('#input-project').value
            if(newProjectName != "")
            {
                myProjects.addProject(newProjectName);
                myProjects.printProjects();
                render.renderProjects(myProjects.getProjects());

                //update add task project list
                render.updateAddTo(myProjects.getProjects());
            }
        })

        //listen if click on any project tab. render selection, and update renderedTaskList for that project
        const projectBtns = document.querySelectorAll(".project")
        projectBtns.forEach((project) => {
            project.addEventListener('click', () => {
                //update renderedList with project
                taskManager.updateProjectFilter(project.textContent);
                render.renderProjectName(project.textContent);
            })
        })

        //if click on all tasks, set project to all tasks
        const allTasksBtn = document.querySelector(".all-tasks");
        allTasksBtn.addEventListener('click', () => {
            render.renderProjectName("All Tasks");
            taskManager.updateProjectFilter("All Tasks");
        })
    },
};