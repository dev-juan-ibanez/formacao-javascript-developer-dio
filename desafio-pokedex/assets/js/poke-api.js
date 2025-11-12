const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    // Novos detalhes
    pokemon.stats = pokeDetail.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat
    }))
    
    pokemon.height = pokeDetail.height / 10 // Convertendo para metros
    pokemon.weight = pokeDetail.weight / 10 // Convertendo para kg
    
    pokemon.abilities = pokeDetail.abilities.map((abilityInfo) => abilityInfo.ability.name)

    return pokemon
}

// Nova função para obter a descrição do Pokémon
pokeApi.getPokemonDescription = async (pokemonId) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        const data = await response.json()
        
        // Buscar a descrição em português
        const descriptionEntry = data.flavor_text_entries.find(entry => 
            entry.language.name === 'en' // Mudar para 'pt' se quiser em português
        )
        
        return descriptionEntry ? descriptionEntry.flavor_text.replace(/\n/g, ' ') : 'No description available.'
    } catch (error) {
        return 'Description not available.'
    }
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}