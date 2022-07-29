import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";



function App() {

  const url = 'http://localhost:3001/pets'

  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  const filterPets = (e) => {setFilters(e.target.value)}
  
  const findPets = () => {
    if (filters === "all") {
      fetch(`${url}`)
        .then(r=>r.json())
        .then(newPets=>setPets(newPets))
    } else {
      fetch(`${url}?type=${filters}`)
        .then(r=>r.json())
        .then(newPets=>setPets(newPets))
    }
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={filterPets} onFindPetsClick={findPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
