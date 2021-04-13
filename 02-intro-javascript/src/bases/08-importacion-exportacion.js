import heroes, { owners } from "../data/heroes";

// const getHeroeById = (id) => {
//   return heroes.find( (heroe) => heroe.id === id );
// }

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// export default getHeroeById;

// console.log( getHeroeById(5) );

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner("Marvel") );
// console.log(owners);
