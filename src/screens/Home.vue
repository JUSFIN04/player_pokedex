<script>
export default {
    props: {
        displayedPokemon: {}
    }
}
</script>

<template>
     <main v-if="displayedPokemon" class="mid-center">
      <div v-if="displayedPokemon" class="pokemon-display">
        <div class="pokemon-card">
          <div class="pokemon-card-frame">
            <div class="pokemon-card-header">
              <h3> {{ displayedPokemon.name }}</h3>
            </div>
            <div class="pokemon-card-image">
              <img v-bind:src="displayedPokemon.sprites" alt="Pokemon image goes here">
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
</template>

<style>

/* Middle content area */
.mid-center {
  grid-area: mid-center;
  /* // background-color: beige; */
  background: radial-gradient(#F8F4AB, #8B7F37);
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
  background: radial-gradient(#F8F4AB, antiquewhite, #F8F4AB);
  border: 9px double #ff9a68;
  border-radius: 1%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.pokemon-card {
  width: 70%;
  height: auto;
  margin: 2%;
  border: 30px solid #8B7F37;
  border-radius: 1%;
  background: radial-gradient(#F8F4AB, #C5B26C);
  padding: 1%;
}

.pokemon-card-frame {
  padding: 20px;
  border: 20px double #8B7F37;
}

.pokemon-card h4 {
  background-color: #A1A762;
  font-size: 120%;
  
}

.pokemon-card-header {
  background-color: #A1A762;
  margin-top: -4%;
  margin-bottom: -1%;
  font-size: 200%;
  padding-left: 2%;
  border-left: 80px double #F8F4AB;
  border-right: 88px ridge #C5B26C;
  text-transform: capitalize;
  
}

.pokemon-card-image {
display: flex;
background-color: #897e5c71;
  border: 4px solid #C5B26C;
  justify-content: center;
  align-content: center;
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
  background: radial-gradient(transparent, transparent, #C5B26C);
  font-size: 120%;
}

</style>