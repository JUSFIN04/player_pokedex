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
  console.log("inside process api fucntion")
  console.log(jsonResults.sprites)
  let pokemonObj = new Pokemon(jsonResults.name, jsonResults.abilities, jsonResults.species, jsonResults.height, jsonResults.weight, jsonResults.types, jsonResults.sprites)
  return pokemonObj;
}


</script>

<template>

  <body class="main-container background">
    <div></div>
    <nav class="top-center nav">
      <ul>
        <li class="logo-list-item">
          <div class="logo-holder">
            <router-link to="/">
              <img class="logo" src="./assets/css-downloads/d5tyrqg-fcbb2428-7327-47fd-a31c-0ca7286169ba.png">
            </router-link>
          </div>
        </li>
        <li class="search-box-list-item">
          <div class="search-box">
            <label for="pokedex-search">Search the Pokedex: </label>
            <input type="search" id="pokedexSearch" name="q" aria-label="Search through players pokedex"
              placeholder="try typing Bulbasur">
            <router-link to="/">
              <button @click="search"><img class-="search-box-icon" src=""></button>
            </router-link>
          </div>
        </li>
        <li class="nav-list-item">
          <router-link to="/catalougue">Catalougue</router-link>
        </li>
        <li>Profile</li>
        <li>About</li>
      </ul>
    </nav>
    <router-view :displayedPokemon="displayedPokemon"></router-view>
    <footer class="footer-center footer">

    </footer>
  </body>
</template>

<style>
/* Main layout stylings (ex. nav, footer) */
.main-container {
  display: grid;
  margin: -10px;
  height: 100%;
  background-image: url('./assets/css-downloads/0bd597336767aa90da853644a08e1c5b--tumblr-backgrounds-th-birthday.jpg');
  grid-template-columns: .2fr 2fr .2fr;
  grid-template-rows: minmax(min-content, 4%) repeat(auto-fill, minmax(100vh, max-content)) minmax(4%, max-content);
  /* 4% 1fr 4%; */
  grid-template-areas:
    "top-center top-center top-center"
    " background mid-center ."
    "footer-center footer-center footer-center"
}

/* Navigation bar styling */
.top-center {
  grid-area: top-center;
  background-color: #ff9a68;

}

.nav {
  font-size: 20px;
  font-weight: bold;
  /* position: fixed; */
  height: 100%;
  width: 100%;
  display: flex;
  object-fit: contain;
  height: auto;
  border: 2px double #A1A762;
}

.nav ul {
  display: flex;
  object-fit: contain;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  list-style-type: none;
}

.nav li:hover {
  color: antiquewhite;
}

.nav-list-item {
  color: inherit;
  text-decoration: none;
}

.nav-list-item>a {
  color: inherit;
  text-decoration: none;
}

.logo-list-item {
  display: flex;
  width: 20%;
  height: min-content;
  object-fit: scale-down;

  justify-content: center;
  align-items: center;
  flex-wrap: none;
}

.logo-holder {
  max-height: 50%;
  max-width: 60%;

}

.logo {
  height: 100%;
  max-width: 100%;
  object-fit: scale-down;
}


.search-box-list-item {
  display: inline flex;
  width: 32%;
  justify-content: center;
  align-items: center;

}

.search-box-list-item :hover {
  color: black;
}

.search-box {
  font-size: 90%;

  border: 2px double #A1A762;
  border-radius: 5%;
  padding: .40%;
  background-color: #C5B26C;
  max-width: 100%x;
  max-height: 100px;
  min-width: 0;
  flex-flow: coloumn wrap;
  flex: 1 100%;

}

.search-box button {
  background: #ff9a68;
  height: auto;
  width: 8%;
  margin: 2%;
  border-radius: 50%;
}

.search-box-icon img {
  background-image: url('./assets/css-downloads/magnifying-glass-3-16.png');
  height: auto;
  width: auto;
  object-fit: cover;
  padding: 2px;
}


/* footer  */
.footer {
  height: 20px;

}
</style>
