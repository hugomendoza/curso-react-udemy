import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page:number = 0 ) => {

  return async ( dispatch:any, getState: any ) => {
    dispatch( startLoadingPokemons() );

    //TODO: realizar petición HTTP

    const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);
    
    dispatch( setPokemons({pokemons: data.results, page: page + 1}) );
  }
}