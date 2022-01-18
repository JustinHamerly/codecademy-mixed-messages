const eeveelutions = [
  {
    name: 'Eevee',
    image: './images/eevee.gif',
    moves: ['quick attack', 'sand attack', 'swift', 'bite', 'copycat', 'baton pass', 'take down', 'charm', 'double-edge']
  },
  {
    name:'Vaporeon',
    image: './images/vaporeon.gif',
    moves: ['quick attack', 'sand attack', 'haze', 'water pulse', 'aurora beam', 'aqua ring', 'muddy water', 'acid armor', 'hydro pump']
   },
   {
    name:'Jolteon',
    image: './images/jolteon.gif',
    moves: ['quick attack', 'sand attack', 'thunder wave', 'double kick', 'thunder fang', 'pin missile', 'discharge', 'agility', 'thunder']
   },
   {
    name:'Flareon',
    image: './images/flareon.gif',
    moves: ['quick attack', 'sand attack', 'smog', 'bite', 'fire fang', 'fire spin', 'lava plume', 'scary face', 'flare blitz']
   },
   {
    name:'Espeon',
    image: './images/espeon.gif',
    moves: ['quick attack', 'sand attack', 'swift', 'psybeam', 'morning sun', 'power swap', 'psychic', 'psych up', 'future sight']
   },
   {
    name:'Umbreon',
    image: './images/umbreon.gif',
    moves: ['quick attack', 'sand attack', 'confuse ray', 'assurance', 'moonlight', 'guard swap', 'dark pulse', 'screech', 'mean look']
   },
   {
    name:'Leafeon',
    image: './images/leafeon.gif',
    moves: ['quick attack', 'sand attack', 'leech seed', 'magical leaf', 'synthesis', 'sunny day', 'giga drain', 'swords dance', 'leaf blade']
   },
   {
    name:'Glaceon',
    image: './images/glaceon.gif',
    moves: ['quick attack', 'sand attack', 'ice shard', 'bite', 'ice fang', 'hail', 'freeze-dry', 'mirror coat', 'blizzard']
   },
   {
    name:'Sylveon',
    image: './images/sylveon.gif',
    moves: ['quick attack', 'sand attack', 'swift', 'light screen', 'draining kiss', 'misty terrain', 'skill swap', 'psych up', 'moonblast']
   }
];

const infobox = document.getElementById("infobox");

function catchPokemon(){
  const pokemon = eeveelutions[Math.floor(Math.random() * 9)];
  const level = Math.ceil(Math.random()*100);
  const numbers = pickMoves();
  const moves = numbers.map(i => {
    return pokemon.moves[i];
  });
  infobox.innerHTML = `
  <p>You caught a level ${level} ${pokemon.name}!</p>
  
  <h2>${pokemon.name}</h2>
  
  <div id = "moves">
    <img src="${pokemon.image}">
    <h3>lvl ${level}</h3>
    <h3>MOVES</h3>
    <ul id="list">
      <li>${moves[0]}</li>
      <li>${moves[1]}</li>
      <li>${moves[2]}</li>
      <li>${moves[3]}</li>
    </ul>
  </div>`;
}

function pickMoves() {
  const moves = [];
  while(moves.length < 4 ){
    let number = Math.floor(Math.random() * 9);
    if (!moves.includes(number)){
      moves.push(number);
    }
  }
  return moves;
}

document.getElementById("ball").onclick = catchPokemon;

