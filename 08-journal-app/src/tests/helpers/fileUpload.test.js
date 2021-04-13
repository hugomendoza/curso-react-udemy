import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
  cloud_name: 'djfxyhasn', 
  api_key: '346199333438697', 
  api_secret: '-SFNt2u4IQEfN_4bgFm7dMkvUFE' 
});

describe('Pruebas en fileUpload', () => {
  
  test('debe de cargar un archivo y retornar el URL', async() => { //Se puede mane con done como argumento
    
    const resp = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Grib_skov.jpg/250px-Grib_skov.jpg');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload( file );

    expect(  typeof url ).toBe('string');

    //Borrar imagen por ID
    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace('.jpg','');

    // console.log(imageId);

    cloudinary.v2.api.delete_resources(imageId, {}, ()=> {}); //done(); genera un error pero se puede manejar sin el done();
                                                              //Revisar fallas con done();
  });

  test('debe de retornr un error', async() => {

    const file = new File([], 'foto.png');
    const url = await fileUpload( file );

    expect( url ).toBe( null );

  });
  
});
