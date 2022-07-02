<script setup>
import Pokemon from "./modals/pokemon";
import { ref } from 'vue'

let displayedPokemon = ref(null)

async function search() {
  let pokeApiBase = "https://pokeapi.co/api/v2/pokemon/";

  let searchContent = document.getElementById("pokedexSearch").value

  // const ditto = new Pokemon("ditto", [], "pudding", 4.0, 8.0);

  let apiResults = await fetch(pokeApiBase + searchContent)
    .then(response => response.json())
  // console.log(apiResults)
    let pokemon = processPokeApi(apiResults)
    displayedPokemon.value = pokemon

  // console.log(processPokeApi(apiResults))
  
}

function processPokeApi(jsonResults) {
  let pokemonObj = new Pokemon(jsonResults.name, jsonResults.abilities, jsonResults.species, jsonResults.height, jsonResults.weight, jsonResults.types)
  return pokemonObj;
}
</script>

<template>

  <body class="main-container">
    <nav class="top-center">
      <div>"
        <label for="pokedex-search">Search the Pokedex:</label>
        <input type="search" id="pokedexSearch" name="q" aria-label="Search through players pokedex"
          placeholder="try typing Bulbasur">
        <button @click="search">search</button>
      </div>
    </nav>
    <main class="mid-center">
      <div v-if="displayedPokemon" class="pokemon-card">
        <div class="pokemon-card-header">
          <h3>Pokemon Name: </h3>
          <p> {{displayedPokemon.name}}</p>
        </div>
        <hr>
        <div class="pokemon-card-body">
          <h4>Pokemon abilites:</h4>
          <ul>
            <li v-for="pokeAbility in displayedPokemon.abilities" :key="pokeAbility">{{pokeAbility}}</li>
          </ul>
          <h4>Pokemon species:</h4>
          <p> {{displayedPokemon.species}}</p>
          <h4>Pokemon height:</h4>
          <p> {{displayedPokemon.height}}</p>
          <h4>Pokemon weight:</h4>
          <p> {{displayedPokemon.weight}}</p>
          <h4>Pokemon types:</h4>
          <ul> 
            <li v-for="pokeType in displayedPokemon.types" :key="pokeType">{{pokeType}}</li>
          </ul>
        </div>
      </div>
      <pre v-else>
        <p>Search for a pokemon</p>
      </pre>
    </main>
    <footer class="footer-center">

    </footer>
  </body>
</template>

<style>
/* Main layout stylings (ex. nav, footer) */
.main-container {
  display: grid;
  grid-template-columns: 0.7fr 2.4fr 1fr;
  grid-template-rows: 0.2fr 400px 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "top-center top-center top-center"
    ". mid-center ."
    "footer-center footer-center footer-center"
}

.top-center {
  grid-area: top-center;
  background-color: red;
  display: flex;


}

.top-center>label {
  font-size: 40%;
}

.mid-center {
  grid-area: mid-center;
  background-color: beige;
  display: flex;
}

.footer-center {
  grid-area: footer-center;
  background-color: red;

}
</style>
