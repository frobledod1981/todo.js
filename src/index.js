
import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

// aca creamos el todo de javascript de forma en duro no persistente
// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);  


// hace persistente la informacion 'local storage y session storage'
// caract propia de navegador web es solo para web no backend
// se ve en pestaña aplicacion en consola

// localStorage.setItem('mi-key','ABC123');

// setTimeout(() =>{
//     localStorage.removeItem('mi-key');
// },1500);

todoList.todos.forEach(todo => crearTodoHtml(todo));

const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

// // hasta aca esto es un arreglo de objetos no de instancias de todos
console.log('todos',todoList.todos);

