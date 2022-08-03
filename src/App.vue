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

  <body class="main-container background">
    <div></div>
    <nav class="top-center nav">
      <ul>
        <li class="logo-list-item">
          <div class="logo-holder">
            <img class="logo" src="./assets/css-downloads/d5tyrqg-fcbb2428-7327-47fd-a31c-0ca7286169ba.png">
          </div>
        </li>
        <li class="search-box-list-item">
          <div class="search-box">
            <label for="pokedex-search">Search the Pokedex: </label>
            <input type="search" id="pokedexSearch" name="q" aria-label="Search through players pokedex"
              placeholder="try typing Bulbasur">
            <button @click="search"><img class-="search-box-icon" src=""></button>
          </div>
        </li>
        <li>All Pokemon</li>
        <li>Profile</li>
        <li>About</li>
      </ul>
    </nav>
    <main v-if="displayedPokemon" class="mid-center">
      <div v-if="displayedPokemon" class="pokemon-display">
      <div class="pokemon-card">
        <div class="pokemon-card-frame">
        <div class="pokemon-card-header">
            <h3> {{ displayedPokemon.name }}</h3>
        </div>
        <div class="pokemon-card-image">
        <img src="404" alt="Pokemon image goes here">
        </div>
        <div>
            <div class="pokemon-card-body">
              <h4>Pokemon abilites:</h4>
              <ul>
                <li v-for="pokeAbility in displayedPokemon.abilities" :key="pokeAbility">{{ pokeAbility }}</li>
              </ul>
              <h4>Pokemon species:</h4>
              <p> {{ displayedPokemon.species }}</p>
              <h4>Pokemon height:</h4>
              <p> {{ displayedPokemon.height }}</p>
              <h4>Pokemon weight:</h4>
              <p> {{ displayedPokemon.weight }}</p>
              <h4>Pokemon types:</h4>
              <ul>
                <li v-for="pokeType in displayedPokemon.types" :key="pokeType">{{ pokeType }}</li>
              </ul>
            </div>
        </div>
        </div>
      </div>
      </div>
      <pre v-else>
        <p>Search for a pokemon</p>
      </pre>
    </main>
    <pre v-else class="mid-center-blank">
      <p>Search for a pokemon</p>
    </pre>
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
.nav li:hover{
  color:antiquewhite;
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
.search-box-list-item :hover{
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

/* Middle content area */
.mid-center {
  grid-area: mid-center;
  /* // background-color: beige; */
  background: radial-gradient(  #F8F4AB,#8B7F37 );
  border: 4px solid #8B7F37;
  border-image: radial-gradient(#F8F4AB 80%, #8B7F37) 1;
  display: flex;
  padding: 2%;
  
}

.mid-center-blank {
  grid-area: mid-center;
  background-color: #F8F4AB;
  border: 1vh solid #8B7F37;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  font-size: 5vh;
}

.pokemon-display {
  display: flex;
  background: radial-gradient(  #F8F4AB,antiquewhite, #F8F4AB);
  border: 9px double #ff9a68; 
  border-radius: 1%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.pokemon-card{
  width: 70%;
  height:auto;
  margin: 2%;
  border: 30px solid #8B7F37;
  border-radius: 1%;
  background: radial-gradient(#F8F4AB, #C5B26C);
  padding: 1%;
}

.pokemon-card-frame{
  padding: 20px;
  border: 20px double #8B7F37;
}
.pokemon-card  h4 {
background-color: #A1A762;
}

.pokemon-card-header {
  background-color: #A1A762;
  margin-top: -4%;
  margin-bottom: -1%;
  font-size: 200%; 
  padding-left: 2%;
  border-left: 80px double #F8F4AB;
  border-right: 88px ridge #C5B26C;
}
.pokemon-card-image {
   border: 4px solid #C5B26C;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   min-height: 300px;
}



.pokemon-card-body {
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 4%;
  border: 4px dotted #C5B26C;
  border-radius: 1%;
  width: auto;
  height: auto;
  background: radial-gradient( transparent, transparent, #C5B26C);
  font-size: 120%;
}

/* footer content area */
.footer-center {
  grid-area: footer-center;
  background-color: #ff9a68;
  display: flex;
  
}

.footer {
  height: 20px;

}
</style>
