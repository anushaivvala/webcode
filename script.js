// Function to fetch/get Pokémon data
async function fetchPokemonDataResponse() {
  try {
    const pokemonresponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await pokemonresponse.json();
    const pokemonList = data.results;

    // Iterate through each Pokémon
    for (const pokemonarray of pokemonList) {
      await displayPokemonInfoResponse(pokemonarray);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

// Function to Display Pokemon Information
async function displayPokemonInfoResponse(pokemon) {
  try {
    const pokemonresponse = await fetch(pokemon.url);
    const data = await pokemonresponse.json();

    const pokemonContainer = document.getElementById('pokemon-container');
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const nameElement = document.createElement('h1');
    nameElement.textContent = 'Pokemon Name: '+ data.id +' - '+ data.name;
    pokemonElement.appendChild(nameElement);

    const imageElement = document.createElement('img');
    imageElement.src = data.sprites.front_default;
    pokemonElement.appendChild(imageElement);

    const abilitiesElement = document.createElement('h2');
    abilitiesElement.textContent = 'Pokemon Abilities:';
    pokemonElement.appendChild(abilitiesElement);

    const abilitiesListElement = document.createElement('ul');
    for (const ability of data.abilities) {
      const abilityElement = document.createElement('li');
      abilityElement.textContent = ability.ability.name;
      abilitiesListElement.appendChild(abilityElement);
    }
    pokemonElement.appendChild(abilitiesListElement);

    const movesElement = document.createElement('h3');
    movesElement.textContent = 'Pokemon Moves:';
    pokemonElement.appendChild(movesElement);

    const movesListElement = document.createElement('ol');
    for (const move of data.moves) {
      const moveElement = document.createElement('li');
      moveElement.textContent = move.move.name;
      movesListElement.appendChild(moveElement);
    }
    pokemonElement.appendChild(movesListElement);

    const weightElement = document.createElement('h4');
    weightElement.textContent = 'Pokemon Weight: ' + data.weight;
    pokemonElement.appendChild(weightElement);

    pokemonContainer.appendChild(pokemonElement);
  } catch (error) {
    console.log('Error:', error);
  }
}

// Fetch/get Pokemon data and display it in webpage
fetchPokemonDataResponse();