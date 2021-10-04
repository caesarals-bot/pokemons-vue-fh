
import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helper/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('should de regresar un arreglo de numeros', () => {
        
        const pokemons = getPokemons()
        
        expect( pokemons.length).toBe(650)
        expect( pokemons[0]).toBe(1)
        expect( pokemons[500]).toBe(501)
        expect( pokemons[649]).toBe(650)

    })

    test('should de retornar un arreglos de cuatro elementos con nombres de pokemos', async() => {
        
        const pokemons = await getPokemonNames([1,2,3,4])
       

        expect( pokemons[0].name).toBe( "bulbasaur")
        expect( pokemons[1].name).toBe('ivysaur')
        expect( pokemons[2].name).toBe('venusaur')
        expect( pokemons[3].name).toBe('charmander')
        expect( pokemons).toStrictEqual([
            {"id": 1, "name": "bulbasaur"},
            {"id": 2, "name": "ivysaur"},
            {"id": 3, "name": "venusaur"},
            {"id": 4, "name": "charmander"}
        ])

    })

    test('should de retornar un arreglo mezclado', async() => {
        

        const pokemons = await getPokemonOptions()
        console.log(pokemons)
        expect( pokemons.length ).toBe(4)
        expect( pokemons).toEqual([
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            }
        ])
    })
    
    
    
})