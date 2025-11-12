const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonDetailModal = document.getElementById('pokemonDetailModal')
const pokemonDetail = document.getElementById('pokemonDetail')
const backButton = document.getElementById('backButton')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const typeFilter = document.getElementById('typeFilter')
const clearFiltersButton = document.getElementById('clearFiltersButton')

const maxRecords = 151
const limit = 151 // Carrega todos os 151 de uma vez para busca
let offset = 0;
let currentPokemonType = '';
let allPokemons = []; // Array para armazenar todos os Pokémon
let filteredPokemons = []; // Array para Pokémon filtrados
let currentDisplayCount = 10; // Quantos mostrar inicialmente
let isSearching = false;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" data-pokemon-number="${pokemon.number}">
            <div class="header">
                <div class="name-number">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span>
                </div>
            </div>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <div class="image-container">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
        </li>
    `
}

async function showPokemonDetail(pokemonNumber) {
    try {
        // Buscar os detalhes do Pokémon
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        const pokemonData = await pokemonResponse.json()
        const pokemon = convertPokeApiDetailToPokemon(pokemonData)

        // Buscar a descrição do Pokémon
        const description = await pokeApi.getPokemonDescription(pokemonNumber)

        // Atualizar o tipo atual para o botão
        currentPokemonType = pokemon.type

        const detailHtml = `
            <div class="detail-header">
                <div class="header-info">
                    <span class="number">#${pokemon.number.toString().padStart(3, '0')}</span>
                    <h2 class="name ${pokemon.type}">${pokemon.name}</h2>
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
            </div>
            
            <div class="image-section ${pokemon.type}">
                <div class="image-container">
                    <img class="detail-image" src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
            
            <div class="physical-info">
                <div>
                    <div class="info-label">Altura</div>
                    <div class="info-value">${pokemon.height}m</div>
                </div>
                <div>
                    <div class="info-label">Peso</div>
                    <div class="info-value">${pokemon.weight}kg</div>
                </div>
            </div>

            <div class="description-section">
                <h3 class="${pokemon.type} no-bg">Descrição</h3>
                <div class="description">
                    <p>${description}</p>
                </div>
            </div>
            
            <div class="stats">
                <h3 class="${pokemon.type} no-bg">Estatísticas</h3>
                ${pokemon.stats.map(stat => `
                    <div class="stat">
                        <span class="stat-name">${stat.name.replace('-', ' ')}</span>
                        <span class="stat-value">${stat.value}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="stats">
                <h3 class="${pokemon.type} no-bg">Habilidades</h3>
                ${pokemon.abilities.map(ability => `
                    <div class="stat">
                        <span class="stat-name">${ability.replace('-', ' ')}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        pokemonDetail.innerHTML = detailHtml;
        pokemonDetailModal.style.display = 'flex';
        
        // Atualizar a cor do botão voltar
        updateBackButtonColor();
        
    } catch (error) {
        console.error('Error loading Pokémon details:', error)
    }
}

function updateBackButtonColor() {
    if (currentPokemonType) {
        // Remove todas as classes de tipo do botão
        backButton.className = 'back-button';
        // Adiciona a classe do tipo atual
        backButton.classList.add(currentPokemonType);
    }
}

function closePokemonDetail() {
    pokemonDetailModal.style.display = 'none';
    // Resetar a cor do botão quando fechar
    backButton.className = 'back-button';
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Adiciona os novos Pokémon ao array geral
        allPokemons = [...allPokemons, ...pokemons];
        
        // Se é o carregamento inicial, mostra os primeiros 10
        if (offset === 0) {
            filteredPokemons = [...allPokemons];
            displayPokemons();
        }
    })
}

function displayPokemons() {
    pokemonList.innerHTML = '';
    
    // Determina quais Pokémon mostrar
    const pokemonsToShow = isSearching ? 
        filteredPokemons.slice(0, currentDisplayCount) : 
        allPokemons.slice(0, currentDisplayCount);
    
    pokemonsToShow.forEach(pokemon => {
        pokemonList.innerHTML += convertPokemonToLi(pokemon);
    });

    // Atualiza o botão Load More
    updateLoadMoreButton();
    
    // Adicionar eventos de clique
    addPokemonClickEvents();
}

function updateLoadMoreButton() {
    if (isSearching) {
        // Durante busca, mostra Load More se houver mais resultados filtrados
        const hasMoreResults = currentDisplayCount < filteredPokemons.length;
        loadMoreButton.style.display = hasMoreResults ? 'block' : 'none';
        loadMoreButton.textContent = hasMoreResults ? 'Load More' : 'Todos os resultados carregados';
    } else {
        // Sem busca, mostra Load More se houver mais Pokémon totais
        const hasMorePokemon = currentDisplayCount < allPokemons.length;
        loadMoreButton.style.display = hasMorePokemon ? 'block' : 'none';
        loadMoreButton.textContent = hasMorePokemon ? 'Load More' : 'Todos os Pokémon carregados';
    }
}

function addPokemonClickEvents() {
    const pokemonElements = document.querySelectorAll('.pokemon');
    pokemonElements.forEach(pokemonElement => {
        pokemonElement.addEventListener('click', function () {
            const pokemonNumber = this.getAttribute('data-pokemon-number');
            showPokemonDetail(pokemonNumber);
        });
    });
}

// Função de busca
function searchPokemon() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedType = typeFilter.value;
    
    isSearching = searchTerm !== '' || selectedType !== '';
    currentDisplayCount = 10; // Reseta para mostrar apenas 10 resultados inicialmente
    
    if (!isSearching) {
        // Se não está buscando, mostra todos os Pokémon
        filteredPokemons = [...allPokemons];
    } else {
        // Filtra todos os Pokémon
        filteredPokemons = allPokemons.filter(pokemon => {
            const nameMatch = pokemon.name.toLowerCase().includes(searchTerm);
            const typeMatch = selectedType === '' || pokemon.types.includes(selectedType);
            return nameMatch && typeMatch;
        });
    }
    
    // Atualiza a lista
    displayPokemons();
}

// Função para limpar todos os filtros
function clearFilters() {
    searchInput.value = '';
    typeFilter.value = '';
    isSearching = false;
    currentDisplayCount = 10;
    filteredPokemons = [...allPokemons];
    displayPokemons();
}

function loadMore() {
    currentDisplayCount += 10;
    displayPokemons();
}

// Event Listeners
searchButton.addEventListener('click', searchPokemon);

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchPokemon();
    }
});

typeFilter.addEventListener('change', searchPokemon);

clearFiltersButton.addEventListener('click', clearFilters);

// Botão para limpar busca
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        searchPokemon();
    }
});

// Carregamento inicial - carrega todos os 151 Pokémon
loadPokemonItens(0, 151)

loadMoreButton.addEventListener('click', loadMore);

backButton.addEventListener('click', closePokemonDetail);

// Fechar modal clicando fora do conteúdo
pokemonDetailModal.addEventListener('click', (event) => {
    if (event.target === pokemonDetailModal) {
        closePokemonDetail();
    }
});