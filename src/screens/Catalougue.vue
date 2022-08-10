<script>
export default {
    name: "Catalougue"
}
</script>

<template>
    <main class="mid-center">
        <div class="catalougue-display">
            <ul class="pokemon-card-grid">
                <li class="each-pokemon-grid-card">hspace-between

    The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The first item is flush with the start edge of the alignment container in the cross axis, and the last item is flush with the end edge of the alignment container in the cross axis.
space-around

    The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
space-evenly

    The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items, the start edge and the first item, and the end edge and the last item, are all exactly the same.
</li>
                <li class="each-pokemon-grid-card">hey</li>
                <li class="each-pokemon-grid-card">8</li>
                 <li class="each-pokemon-grid-card">hey</li>
                <li class="each-pokemon-grid-card">pie</li>
            </ul>
        </div>
    </main>

</template>

<style>
.catalougue-display {
    background: radial-gradient(#F8F4AB, antiquewhite, #F8F4AB);
    border: 9px double #ff9a68;
    border-radius: 1%;
    width: 100%;
    height: auto;
}

.pokemon-card-grid {
    display: flex;
    height: auto;
    width: auto;
    flex-wrap: wrap;
    flex-basis: auto;
    justify-content: flex-start;
    align-content: space-evenly;

    list-style-type: none;
}

.each-pokemon-grid-card{
  width: 150px;
  height: 500px;
  margin: 2%;
  border: 30px solid #8B7F37;
  border-radius: 1%;
  background: radial-gradient(#F8F4AB, #C5B26C);
  padding: 1%;
}
</style>