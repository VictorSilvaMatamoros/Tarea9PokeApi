
//nos aseguramos de que el dom este cargado antes de llmaar a la funcion
document.addEventListener("DOMContentLoaded", function () {
    cargarPokemonAleatorio();
});
//es asincrona esto nos permite uaser el await para sacar los datos del pokemon del json de la api
async function cargarPokemonAleatorio() {
    const numeroPokemon = Math.floor(Math.random() * 898) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}/`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    mostrarPokemon(data);
}
//sacamos los datos que nos interesen llamandolos o recorriendo el map oportuno
//y finalmente con  el innerhtml sacamos por el index la carta que hemos construido
function mostrarPokemon(pokemon) {
    const nombrePokemon = pokemon.name;
    const idPokemon = pokemon.id;
    const imagenPokemon = pokemon.sprites.front_default;
    const tipoPokemon = pokemon.types.map(type => type.type.name).join(', ');
    const habilidadesPokemon = pokemon.abilities.map(ability => ability.ability.name).join(', ');

    const infoContainer = document.getElementById("pokemon-info");
    infoContainer.innerHTML = `
        <p>${nombrePokemon}</p>
        <p>ID: ${idPokemon}</p>
        <p>TIPO: ${tipoPokemon}</p>
        <p>HABILIDADES: ${habilidadesPokemon}</p>
    `;
    document.getElementById("pokemon-image").src = imagenPokemon;
}