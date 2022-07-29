import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {

  const renderPets = pets.map(pet => (<Pet key={pet.id} name={pet.name} gender={pet.gender} age={pet.age} weight={pet.weight} type={pet.type} isAdopted={pet.isAdopted} />) )

  return <div className="ui cards">{renderPets}</div>;
}

export default PetBrowser;
