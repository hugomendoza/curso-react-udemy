const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccon: {
    ciudad: "New york",
    zip: 52536352,
    lat: 14.125364,
    lgn: 24.3658963,
  }
};

//console.table( persona );

const persona2 = { ...persona }; //clonación de objeto
persona2.nombre = "Peter";

console.log( persona );
console.log( persona2 );