
import pokemonApi from '@/api/pokemonApi'


describe('pokemonApi', () => {
    test('should axios debe de estar configurado con el api de pokemon', () => {
        console.log( pokemonApi )
        expect( pokemonApi.defaults.baseURL )
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
    
})