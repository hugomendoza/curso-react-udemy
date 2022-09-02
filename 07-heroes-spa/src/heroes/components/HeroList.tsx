import { PropsHeroes, HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

type PublisherHeroProps = Omit<PropsHeroes, "id" | "superhero" | "alter_ego" | "first_appearance" | "characters">;

export const HeroList = ({ publisher }:PublisherHeroProps) => {

  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] ) ;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        heroes.map( hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
