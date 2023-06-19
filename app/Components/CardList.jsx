import React from "react";
import Card from "./Cards/Card";

const CardList = ({heroes}) => {

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-4/5 ">
      {heroes &&
        heroes.map((heroe) => (
          <Card
            key={heroe._id}
            nombre={heroe.name}
            nombrePersonaje={heroe.nameCharacter}
            biografia={heroe.biography}
            imagenHeroe={heroe.imagesPath[0].path}
            id={heroe._id}
          />
        ))}
    </section>
  );
};

export default CardList;
