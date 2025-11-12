# Pokedex - Projeto Completo

## 📋 Descrição do Projeto
Uma Pokedex web interativa que exibe os 151 Pokémon da primeira geração, com funcionalidades de busca, filtros e visualização detalhada de cada Pokémon.

## 🚀 Funcionalidades Implementadas

### 🎯 Funcionalidades Principais
- **Listagem de Pokémon**: Exibe todos os 151 Pokémon da primeira geração
- **Carregamento Progressivo**: Sistema de "Load More" para carregar Pokémon em lotes
- **Busca por Nome**: Campo de busca para filtrar Pokémon por nome
- **Filtro por Tipo**: Dropdown para filtrar Pokémon por tipo (Normal, Fogo, Água, etc.)
- **Limpeza de Filtros**: Botão para remover todos os filtros e voltar à lista completa
- **Modal de Detalhes**: Visualização detalhada ao clicar em qualquer Pokémon

### 🔍 Detalhes do Modal
- **Informações Básicas**: Nome, número, tipos e imagem do Pokémon
- **Descrição**: Texto descritivo obtido da PokeAPI
- **Estatísticas**: HP, Attack, Defense, Speed, etc.
- **Informações Físicas**: Altura e peso
- **Habilidades**: Lista de habilidades do Pokémon
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela

### 🎨 Características de Design
- **Cores por Tipo**: Cada tipo de Pokémon tem sua cor característica
- **Efeitos Visuais**: Hover effects e transições suaves
- **Pokebola Background**: Efeito de pokebola atrás das imagens
- **Design Responsivo**: Adaptação para mobile, tablet e desktop
- **Modal Atraente**: Interface moderna para exibição de detalhes

## 📁 Estrutura de Arquivos

```text
pokedex/
│
├── index.html
├── assets/
│ ├── css/
│ │ ├── global.css
│ │ └── pokedex.css
│ └── js/
│ ├── main.js
│ ├── poke-api.js
│ └── pokemon-model.js
└── README.md
```


## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Grid e Flexbox para layout, Media Queries para responsividade
- **JavaScript ES6+**: Fetch API, Async/Await, manipulação dinâmica do DOM

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge);
- Servidor web local (opcional, mas recomendado).

### Passos para Execução

1. **Clone ou baixe o projeto**

2. **Abra o arquivo principal**
   - Navegue até a pasta do projeto;
   - Abra o arquivo `index.html` em seu navegador.

3. **Ou use um servidor local (recomendado)**
```bash
# Com Python
python -m http.server 8000
```
```bash
# Com Node.js (se tiver http-server instalado)
npx http-server
```

4. Acesse no navegador
```text
http://localhost:8000
```


### 📱 Responsividade
O projeto é totalmente responsivo e se adapta a:

- Mobile: 1-2 colunas (até 380px);
- Tablet: 3 colunas (576px - 992px);
- Desktop: 4 colunas (acima de 992px).

### 🎯 Funcionalidades de Busca e Filtro
1. 🔍 Busca por Nome
- Busca em tempo real enquanto digita;
- Suporte a tecla Enter para busca;
- Busca case-insensitive.

2. 🎚️ Filtro por Tipo
- 18 tipos diferentes disponíveis;
- Combinação com busca por nome;
- Dropdown intuitivo.

3. 🧹 Limpeza de Filtros
- Botão "Limpar" para remover todos os filtros;
- Restaura a lista completa instantaneamente.

### 📊 API Utilizada
PokeAPI - https://pokeapi.co/

- Endpoint principal: https://pokeapi.co/api/v2/pokemon

- Endpoint de espécies: https://pokeapi.co/api/v2/pokemon-species/

- Limite: 151 Pokémon (primeira geração)

### 🎨 Cores dos Tipos de Pokémon
| Tipo       | Cor       |
|------------|-----------|
| Normal     | #a6a877   |
| Grama      | #77c850   |
| Fogo       | #ee7f30   |
| Água       | #678fee   |
| Elétrico   | #f7cf2e   |
| Gelo       | #98d5d7   |
| Lutador    | #bf3029   |
| Veneno     | #a040a0   |
| Terrestre  | #dfbf69   |
| Voador     | #a98ff0   |
| Psíquico   | #f65687   |
| Inseto     | #a8b720   |
| Pedra      | #b8a137   |
| Fantasma   | #6e5896   |
| Dragão     | #6f38f6   |
| Sombrio    | #725847   |
| Metálico   | #b9b7cf   |
| Fada       | #f9aec7   |

### 🔄 Fluxo da Aplicação
1. Carregamento Inicial: Busca os primeiros Pokémon;
2. Load More: Carrega mais Pokémon a cada clique;
3. Busca/Filtro: Filtra a lista baseada nos critérios;
4. Detalhes: Modal com informações completas ao clicar;
5. Navegação: Botão voltar para fechar o modal.

### 🐛 Possíveis Melhorias Futuras
- Paginação numérica além do "Load More";
- Favoritos/local storage;
- Comparação entre Pokémon;
- Modo escuro/claro;
- Cache de dados para melhor performance.

### 👨‍💻 Desenvolvido por
Juan Ibanez

**⭐ Se este projeto foi útil, deixe uma estrela no repositório!**