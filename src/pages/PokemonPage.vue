<template>

  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este pokémon</h1>
    <!-- TDO: img -->
    <pokemon-picture :pokemonId='pokemon.id' :showPokemon="showPokemon" />
    <!-- TDO: options -->
    <pokemon-options
      :pokemons="pokemonArr" 
      @selection="checkAnswer" />

      <template v-if="showAnswer">
        <h2 class="fade-in"> {{ message }} </h2>
        <button @click="newGame">
          Nuevo Juego
        </button>
      </template>

  </div>

</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '@/helper/getPokemonOptions.js'

//console.log( getPokemonOptions() )

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer:false,
      message:''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(selectedId) {
      this.showPokemon= true;
      this.showAnswer= true;

      if( selectedId === this.pokemon.id ) {
        this.message = `Correcto, ${ this.pokemon.name }`
      } else {
        this.message = `Ooops, era ${ this.pokemon.name }`
      }

    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }

}
</script>

<style>

</style>