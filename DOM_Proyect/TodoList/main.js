//---------------- IMPORT --------------------

import { v4 as uuidv4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";

//----------------- Capturar los elementos del DOM --------------------------------

const newTaskInput = document.querySelector("#new-task-input");
const taskListUl = document.querySelector(".tasks-list-ul");
const addTaskBtn = document.querySelector(".add-task-btn");

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
  if (newTaskTitle) {
    const newTask = createNewTask(newTaskTitle);
    app.tasks.push(newTask);
    addTaskToList(newTask, app.taskListUl);
    app.newTaskInput.value = "";
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

  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Eliminar tarea";
  taskDeleteBtn.className = "delete-btn";

  //Crear los eventos de este li.
  taskDeleteBtn.addEventListener("click", () => {
    //lo que quiero hacer cuando pulso el boton de eliminar
    taskElementLi.remove();
  });

  taskCheckBox.addEventListener("change", () => {

    // taskTitleElement.classList = taskCheckBox.checked
    // ? "tachado"
    // : (remove = "tachado");

    taskCheckBox.checked ? (taskTitleElement.className = "tachado") : (taskTitleElement.classList.remove = "tachado");

    // document.getElementsByClassName("tachado")
    //   ? (taskTitleElement.className = "tachado")
    //   : (taskTitleElement.classList.remove = "tachado");
  });


  // Añados los elementos al li.
  taskElementLi.appendChild(taskCheckBox);
  taskElementLi.appendChild(taskTitleElement);
  taskElementLi.appendChild(taskDeleteBtn);

  return taskElementLi;
}

/**
 * Funcion para editar texto de la tarea.
 */

// function editarTexto() {
//   const elementoTexto = document.querySelector("#editable");
//   const textoActual = ;

//   const nuevoTexto = prompt("Edita el texto:", textoActual);

//   if (nuevoTexto !== null) {
//     elementoTexto.innerText = nuevoTexto;
//   }
// }

/**
 * Funcion para buscar una tarea en el buscador.
 */

/**
 * Funcion para el checkbox de la tarea, en su texto estará trachado.
 */

//------------------- Eventos del formulario -------------------------
addTaskBtn.addEventListener("click", addTask);

//-------------------- Inicializacion -----------------------------
function init() {
  //lo que quiero hacer cunado arranque...
  //loadTasksFromLocalStorage()
}

document.addEventListener("DOMContentLoaded", init);
