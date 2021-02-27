//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const pokemove1 = document.querySelector('#one')
  let pokeStore = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('img').src = data.sprites.front_shiny

        pokemove1.innerText = data.moves[0].move.name
        console.log(data)
        document.querySelector('#two').innerText = data.moves[1].move.name
        document.querySelector('#three').innerText = data.moves[2].move.name
        document.querySelector('#four').innerText = data.moves[3].move.name
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}