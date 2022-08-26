import { Link } from "react-router-dom";

export interface PropsHeroes {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string
};

type CharactersHeroProps = Omit<PropsHeroes, "id" | "superhero" | "publisher" | "first_appearance">;

const CharactersByHero = ({alter_ego, characters}:CharactersHeroProps) => {
  return ( alter_ego === characters)
    ? <></>
    : <p>{ characters }</p>
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}:PropsHeroes) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  // const charactersByHero = (<p>{ characters }</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              {/* {
                ( alter_ego !== characters ) && charactersByHero
              } */}
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const defaultProps:PropsHeroes = {
  id: "",
  superhero: "",
  publisher: "",
  alter_ego: "",
  first_appearance:"",
  characters:"",
}

HeroCard.defaultProps = defaultProps;
