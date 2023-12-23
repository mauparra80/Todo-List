import { render } from "./render";

class ProjectList
{
    constructor(){
        this.projectList = [];
    }

    addProject(project){
        this.projectList.push(project);
    }

    deleteProject(project){

    }

    getProjects(){
        return this.projectList;
    }

    printProjects(){console.log("project list" + this.projectList)}
}

let myProjects = new ProjectList();


export const leftMenu = 
{
    init() {

        //add new project, render, clearline
        const addProjectBtn = document.querySelector("#add-project-btn");
        addProjectBtn.addEventListener('click', () => {
            const newProjectName = document.querySelector('#input-project').value
            console.log("clicked" + newProjectName);
            if(newProjectName != "")
            {
                myProjects.addProject(newProjectName);
                myProjects.printProjects();
                render.renderProjects(myProjects.getProjects());
            }
        })
    },
};