enum ActionTodo {
  ADD_TODO = "[TODO] Add Todo"
}

type StateTodos = [{
  id: number,
  done: boolean
  description: string
}]


export const todoReducer = ( initialState:StateTodos , action:{type:string, payload:{}}) => {
  switch (action.type) {
    case ActionTodo.ADD_TODO:
      return [ ...initialState, action.payload ];

    case "[TODO] Remove Todo":
      return initialState.filter( todo => todo.id !== action.payload );

    case "[TODO] Toggle Todo":
      return initialState.map(todo => {

        if( todo["id"] === action.payload ) {
          return {
            ...initialState,
            done: !todo.done
          }
        }

        return todo
      })
  
    default:
      return initialState;
  }
}
