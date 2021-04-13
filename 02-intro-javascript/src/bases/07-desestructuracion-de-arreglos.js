const personajes = ["Goku", "Vegeta", "Trunks"];

const [ p1 ] = personajes;
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

const useState = ( valor ) => {
  return [ valor, () => { console.log("Hola Mundo"); } ];
};

const [ nombre, setNombre ] = useState("Goku");

console.log(nombre)

setNombre();

// arr[1]();

