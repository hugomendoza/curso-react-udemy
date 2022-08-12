interface reducerTodo  {
  type: string,
  payload: {
    id:number,
    todo:string,
    done: false | true
  }
}

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false
  }
];

const todoReducer = ( state = initialState, action:reducerTodo = {
  type: "",
  payload: {
    id: 0,
    todo: "",
    done: false
  }
}) => {

  if(action.type === "[TODO] add todo" ) {
    return [...state, action.payload];
  }

  return state;

}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false
}

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo
}

todos = todoReducer( todos, addTodoAction );


console.log(todos)

export {}