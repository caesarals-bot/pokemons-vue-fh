import pokemonApi from "../api/pokemonApi"

//creamos una array funtions para id de lo pokemons
export const getPokemons = () => {

    const pokemonsArr = Array.from( Array(650) )
   
    return pokemonsArr.map( (_ , index ) => index + 1 )

}

// mesclamos los id de lo pokemons
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5)
     // sacamos los primeros cuatro numeros del array
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )

    return pokemons

}
//desestructuramos para sacar cada nombre de los pokemons
export const getPokemonNames = async( [a,b,c,d] = [] ) => {

    //const resp = await pokemonApi.get(`/1`)
    //console.log( resp.data.name, resp.data.id)
   /// console.log(a,b,c,d)

   const promiserArr = [
       pokemonApi.get(`/${ a }`),
       pokemonApi.get(`/${ b }`),
       pokemonApi.get(`/${ c }`),
       pokemonApi.get(`/${ d }`),
   ]

   const [ p1, p2, p3, p4] = await Promise.all( promiserArr )
   
   return [
       {name: p1.data.name, id: p1.data.id},
       {name: p2.data.name, id: p2.data.id},
       {name: p3.data.name, id: p3.data.id},
       {name: p4.data.name, id: p4.data.id},
   ]

}


export default getPokemonOptions