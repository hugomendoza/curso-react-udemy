import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "Strider",
    email: "fernando@google.com"
  })

  const { username, email} = formState;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect( () => {
    // console.log("useEffect called")
  }, []);

  useEffect( () => {
    // console.log("formState change")
  }, [formState]);

  useEffect( () => {
    // console.log("email change")
  }, [email]);

  useEffect(() => {
    return () => {
    }
  }, [])
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />
      
      {
        username === "strider2" && <Message />
      }
      

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
    </>
  )
}
