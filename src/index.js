import './styles/main.css';
import { taskManager } from './functions/task-manager';
import { render } from './functions/render';
import { infoBar } from './functions/info-bar';
import { taskWindow } from './functions/task-window';
import { leftMenu } from './functions/left-menu'


console.log("working fine");
console.log("I can start now");


// render.openTask();
document.addEventListener('DOMContentLoaded', () => {
    infoBar.init();
    taskWindow.init();
    leftMenu.init();
})
