const form1 = document.getElementById('PokemonName')
console.log(form1)

form1.addEventListener('submit', (e) =>{
    e.preventDefault();
    const PokemonName = e.path[0][0].value
    console.log(PokemonName)
    let x = getPokemon(PokemonName)
}); 

const pokemon_name = form1.pokemon_name.value

const getPokemon = async (PokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    const data = await res.json()
    console.log(data)
    let pname = data[name] 
        pimage = data[name][sprites][other][dreamworld]
        
    
    addToPokemon(pname, pimage)
    
};

// const loadData = async (PokemonName) => {
//     console.log('loading data')
//     const data = await getPokemon(PokemonName)
//     const pokemon = data.pokemon
//     pokemon.map(addToPokemon())

// };

const addToPokemon = async (pokemon) => {
    const p = document.createElement('p')
    p.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src=${pimage} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${pname}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
  
  document.querySelector('div.container div.row div.col section').insertAdjacentElement('beforeend', p)
};

const clearBtn = document.getElementById('clear')
const clearPokemon = () => {
    document.querySelector.innerHTML=''
};
// clearBtn.addEventListener('click', clearPokemon)

