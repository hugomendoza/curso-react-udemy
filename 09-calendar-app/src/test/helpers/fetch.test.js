import { fetchConToken, fetchSinToken } from "../../helpers/fetch";

describe('Pruebas en el helper sin fetch', () => {


  let token = '';
  
  test('fetchSinToken debe funcionar', async() => {
    
    const resp = await fetchSinToken('auth', {email: 'hugo@gmail.com', password: '1234567'}, 'POST');

    expect(resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect(body.ok).toBe(true);

    token = body.token;

  });

  test('fetchConToken debe funcionar', async() => {
    
    localStorage.setItem('token', token);

    const resp = await fetchConToken('events/6073aa30772d670a8c355547', {}, 'DELETE');
    const body = await resp.json();

    expect(body.msg).toBe('No tiene privilegio para eliminar este evento');

  });
  

});
