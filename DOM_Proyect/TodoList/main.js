//---------------- IMPORT --------------------

import { stringify, v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import crearGrafico from "./componets/grafico";

//----------------- Capturar los elementos del DOM --------------------------------

const newTaskInput = document.querySelector("#new-task-input");
const taskListUl = document.querySelector(".tasks-list-ul");
const addTaskBtn = document.querySelector(".add-task-btn");
const showGraphicsBtn = document.querySelector(".mostrar-grafico-link");

//---------------- animacion --------------------------------
autoAnimate(taskListUl, {
  duration: 350,
  easing: "ease-in-out",
});

//---------------- Objeto para almacenar mi aplicacion  --------------------------------
const tasks = [];

const app = {
  tasks,
  newTaskInput,
  taskListUl,
};

/**
 * Esto ejemplifica como es una tarea logica no en el dom.
 * @param {*} title
 * @param {*} isCompleted
 * @returns
 */
function createNewTask(title, isCompleted = false) {
  return {
    id: uuidv4().toString(),
    title,
    isCompleted,
  };
}

/**
 * Funcion que guarda en el Ul el li generado con la tarea
 * @param {} task
 * @param {*} taskListUl
 */
function addTaskToList(task, taskListUl) {
  const taskElement = createTaskElement(task);
  // taskElement.setAttribute("aondblclick", "editarTexto()");
  // taskElement.setAttribute("id", "editable");
  taskListUl.appendChild(taskElement);
}

function addTask() {
  const newTaskTitle = app.newTaskInput.value;

  //const isDuplacate
  const isDuplacate = app.tasks.some((task) => task.title === newTaskTitle);

  if (isDuplacate) {
    alert("Igual");
  } else {
    const newTask = createNewTask(newTaskTitle);
    app.tasks.push(newTask);
    addTaskToList(newTask, app.taskListUl);
    app.newTaskInput.value = "";
    saveTaskToLocalStorage();
  }
}

/**
 * Funcion que genera un elemento del dom de tipo li con cheackBox, texto y boton de eliminar la tarea.
 */

function createTaskElement(task) {
  const taskElementLi = document.createElement("li");

  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;

  const taskTitleElement = document.createElement("span");
  taskTitleElement.textContent = task.title;
  taskTitleElement.classList.toggle("completed", task.isCompleted);
  taskTitleElement.style.width = "80%";

  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Eliminar tarea";
  taskDeleteBtn.className = "delete-btn";

  const taskPrintBtn = document.createElement("i");
  taskPrintBtn.className = "fa-solid fa-print";

  //Crear los eventos de este li.
  //Eliminar
  taskDeleteBtn.addEventListener("click", () => {
    //lo que quiero hacer cuando pulso el boton de eliminar
    const taskIndex = app.tasks.indexOf(task);
    if (taskIndex !== - 1){
      app.tasks.splice(taskIndex, 1);
      taskElementLi.remove();
    }
    //Save localstorage
    saveTaskToLocalStorage();
  });

  taskCheckBox.addEventListener("change", () => {
    // taskTitleElement.classList = taskCheckBox.checked
    // ? "tachado"
    // : (remove = "tachado");

    task.isCompleted = taskCheckBox.checked;
    const taskIndex = app.tasks.indexOf(task);
    

    if (taskIndex !== - 1){
      app.tasks[taskIndex].isCompleted = task.isCompleted;
      taskTitleElement.classList.toggle("completed", task.isCompleted);
      
    }

    //Save LocalStorage

    saveTaskToLocalStorage();

    // taskCheckBox.checked
    //   ? (taskTitleElement.className = "completed")
    //   : (taskTitleElement.classList.toggle("completed"), task.isCompleted);

    // document.getElementsByClassName("tachado")
    //   ? (taskTitleElement.className = "tachado")
    //   : (taskTitleElement.classList.remove = "tachado");
  });

  taskTitleElement.addEventListener("dblclick", () => {
    const newTitle = prompt("Introduce un nuevo texto a la tarea:", task.title);

    const isDuplacate = app.tasks.some((task) => task.title === newTitle);

    if (isDuplacate) {
      alert("Titulo duplicado");
      return false;
    }

    if (newTitle !== null) {
      task.title = newTitle;
      taskTitleElement.textContent = newTitle;
      saveTaskToLocalStorage();
    }
  });

  // Añados los elementos al li.
  taskElementLi.appendChild(taskCheckBox);
  taskElementLi.appendChild(taskTitleElement);
  taskElementLi.appendChild(taskPrintBtn);
  taskElementLi.appendChild(taskDeleteBtn);
  saveTaskToLocalStorage();

  return taskElementLi;
}

/**
 * Funcion para buscar una tarea en el buscador.
 */

//------------------- Eventos del formulario -------------------------
addTaskBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

showGraphicsBtn.addEventListener("click", ()=>crearGrafico(app.tasks));


//------------------- Local Storage ------------------------

function saveTaskToLocalStorage(){
  localStorage.setItem("TareasTodoList", JSON.stringify(app.tasks));
}

function loadTasksFromLocalStorage(){
  const listTasks = localStorage.getItem("TareasTodoList");
  if (listTasks) {
    app.tasks = JSON.parse(listTasks);
    app.tasks.forEach(task => addTaskToList(task, app.taskListUl));
  }
}

//-------------------- Inicializacion -----------------------------
function init() {
  //lo que quiero hacer cunado arranque...
  loadTasksFromLocalStorage();
}

document.addEventListener("DOMContentLoaded", init);
