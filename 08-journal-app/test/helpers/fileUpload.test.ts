import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "djfxyhasn",
  api_key: "346199333438697",
  api_secret: "-SFNt2u4IQEfN_4bgFm7dMkvUFE",
  secure: true
})

describe('Pruebas en fileupload', () => {

  test('debe de subir el archivo correctamente a cloudinary', async() => {
    
    const imageUrl = "https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1";
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");
    
    const url = await fileUpload( file );
    expect( typeof url ).toBe("string");

    // console.log(url);

    const segments = url.split("/");
    // console.log(segements);
    const imageId = segments[ segments.length - 1].replace(".jpg", "");
    // console.log({imageId});
    
    /**
     * * Journal es la carpeta donde se guardan las imagenes en Cloudinary
     */

    // await cloudinary.api.delete_resources([ "journal/" + imageId ], {
    //   resource_type: "image"
    // });

    const clodResp = await cloudinary.api.delete_resources([ "journal/" + imageId ], {
      resource_type: "image"
    });

    // console.log({ clodResp });

  });

  test('debe de retornar null', async() => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload( file );
    expect( url ).toBe( null );
  })

})