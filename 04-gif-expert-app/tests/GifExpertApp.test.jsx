import { render, screen,fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {

  test("Debe hacer snapshot del componente", () => {
    const { container } = render(<GifExpertApp />);
    expect( container ).toMatchSnapshot();
  });

});