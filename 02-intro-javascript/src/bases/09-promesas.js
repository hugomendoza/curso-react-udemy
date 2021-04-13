import { getHeroeById } from "./bases/08-importacion-exportacion";

// const promesa = new Promise ( ( resolve, reject ) =>  {
//   setTimeout( () => {
//     const heroe = getHeroeById(2);
//     // resolve(heroe);
//     reject( "No se pudo encontrar el héroe" );
//   }, 2000)
// });

// promesa.then( (heroe) => {
//   console.log("heroe", heroe);
// })
// .catch( error => console.warn (error) );

const getHeroesByIdAsync = (id) => {
  
  return new Promise ((resolve, reject) => {
    
    setTimeout(() => {
      const p1 = getHeroeById( id );
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000)
  
  });
}

getHeroesByIdAsync(1)
  .then(console.log)
  .catch(console.warn);