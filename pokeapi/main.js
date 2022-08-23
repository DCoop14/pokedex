// const getPokemon = async (PokemonName) => {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon/${PokemonName}")
//     const data = await res.json()
//     return data
// };

// const loadData = async (PokemonName) => {
//     console.log('loading data')
//     const data = await getPokemon(PokemonName)
//     const pokemon = data.pokemon
//     pokemon.map(addToPokemon)

// };

// const addToPokemon = async (pokemon) => {
//     const p = document.createElement('p')
//     p.innerHTML = `
//     <div class="card" style="width: 18rem;">
//       <img src="${pokemon.sprites.front_shiny}" class="card-img-top" alt="...">
//       <div class="card-body">
//       <p class="card-text"></p>
//       </div>
//   </div>`
  
//   document.querySelector('div.container div.row div.col section').insertAdjacentElement('beforeend', p)
// };

// const clearBtn = document.getElementById('clear')
// const clearPokemon = () => {
//     document.querySelector.innerHTML=''
// };
// clearBtn.addEventListener('click', clearPokemon)