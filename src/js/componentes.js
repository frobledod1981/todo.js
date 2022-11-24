import{Todo} from '../classes';

import {todoList} from '../index';

//Referencias en el Html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



export const crearTodoHtml = (todo) => {
 //   `` = Permite colocar string multilineas
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);//solo me interesa retornar este nodo hijo

    return div.firstElementChild;

}

// Eventos
// keyup = Cuando persona suelta tecla(escribe algo)
txtInput.addEventListener('keyup', (event) => {

    if(event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        // console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (evento) => {

    // console.log('click');
    const nombreElemento = evento.target.localName;//input,label,boton etc
    const todoElemento = evento.target.parentElement.parentElement;//referencia al <li> completamente,tb trae el Id (ojo los diferencia)
    const todoId = todoElemento.getAttribute('data-id');

    // console.log(todoElemento);
    // console.log(todoId);

    if(nombreElemento.includes('input')){ // hizo click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');//cambia entre clases

    }else if(nombreElemento.includes('button')){// hay q borrar el todo

        todoList.eliminarTodo(todoId);//se borra pero sigue en el html
        divTodoList.removeChild(todoElemento);// remueve html
    }
    // console.log(todoList);
});

btnBorrar.addEventListener('click',()=>{

    todoList.eliminarCompletados();//elimina pero siguen en el html

    for(let i = divTodoList.children.length -1; i >= 0;i --){// si elimino haci la pocision indice sigue siendo la misma
            const elemento = divTodoList.children[i];
            // console.log(elemento);
            if(elemento.classList.contains('completed')){
                divTodoList.removeChild(elemento);
            }

    }
});

ulFiltros.addEventListener('click',(event) => {
    // console.log(event.target.text);//este metodo es para que muestre texto de donde hago click
    const filtro = event.target.text;
    if(!filtro){
        return;
    }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));

    // console.log(event.target);
    event.target.classList.add('selected');


    for(const elemento of divTodoList.children){
        // console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){

            case 'Pendientes': 
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados': 
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;    
        }

    }


});