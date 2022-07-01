<script setup>

</script>

<template>
  <body class="main-container">
    <nav class="top-center">
      <div>
        <label for="pokedex-search">Search the Pokedex:</label>
        <input type="search" id="pokedex-search" name="q" aria-label="Search through players pokedex" placeholder="try typing Bulbasur"  >
        <button>search</button>
      </div>
    </nav>
    <main class="mid-center">
      
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
.top-center > label{
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
