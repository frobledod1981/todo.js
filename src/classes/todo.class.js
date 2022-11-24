
export class Todo{

    static fromJson({id,tarea,completado,creado}){//destructuracion de objetos
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }


    // metodos no son almacenados en localstorage para eso debemos hacer un metodo estatico que permita recuperar objeto
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }

}