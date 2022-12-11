import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useAppDispatch();
  const {isLoading, page, pokemons} = useAppSelector(state => state.pokemons)
  
  useEffect(() => {
    dispatch( getPokemons() )
  }, [])

  return (
    <>
      <h1>Pokemon APP</h1>
      <hr />
      <span>Loading: {isLoading ? "true": "false"}</span>

      <ul>
        {
          pokemons.map(({name}) => (
            <li key={ name }>{name}</li>
          ))
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons( page ))}
      >
        Next
      </button>
    </>
  )
}


