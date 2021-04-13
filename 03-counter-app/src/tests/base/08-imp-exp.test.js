import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Héroes', () => {

  test('debe de retornar un héroe por id', () => {

    const id = 1;
    const heroe = getHeroeById( id );

    const heroeData = heroes.find( heroe => heroe.id === id );

    expect( heroe ).toEqual( heroeData );
  });
  
  test('debe de retornar undefined si héroe no existe', () => {

    const id = 10;
    const heroe = getHeroeById( id );

    expect( heroe ).toBe( undefined );
  });

  test('debe de retornar héroes de DC', () => {

    const owner = "DC";

    const ownerHero = getHeroesByOwner( owner );

    const ownerData = heroes.filter( heroe => heroe.owner === owner );

    console.log(ownerData);

    expect(ownerHero).toEqual(ownerData);

  });


  test('debe de retornar héroes de Marvel', () => {

    const owner = "Marvel";

    const ownerHero = getHeroesByOwner( owner );

    const ownerData = heroes.filter( heroe => heroe.owner === owner );

    console.log(ownerData);

    expect(ownerHero).toEqual(ownerData);
    expect(ownerHero.length).toBe(2);

  });

})