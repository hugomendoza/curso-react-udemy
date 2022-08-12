import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}:any) => {

  const { formState, onInputChange, onResetForm} = useForm({
    description: ""
  })

  const { description } = formState

  const onFormSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description
    }

    onNewTodo(newTodo);
    onResetForm()
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay quéhacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-2"
        >
            Agregar TODO
        </button>
      </form>
    </>
  )
}

