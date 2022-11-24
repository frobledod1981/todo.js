import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }


    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo =>todo.id != id); //intruccion regresa un arreglo excluyendo el todo que coincida con el id que yo tengo
        this.guardarLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){

            // console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }
    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));//JSON.stringify = transforma arreglo de Todo a json perfecto
    }

    cargarLocalStorage(){
        //necesitamos leer el objeto JSON
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('cargarLocal : ',this.todos);
        // }else{
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : this.todos = [];

        //map = metodo de arreglos que permite barrer cada uno de los elementos retornar un 
        // un nuevo arreglo con cada uno de esos elementos mutados
        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }


}