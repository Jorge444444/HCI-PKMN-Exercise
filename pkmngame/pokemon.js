var pokemonNum1 = Math.floor(Math.random() * 649) + 1;

var pokemonRandom1 = `${pokemonNum1}.png`; //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

var pokemonSource1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + pokemonRandom1;

var image1 = document.querySelectorAll("img")[2];

image1.setAttribute("src", pokemonSource1);

var pokemonNum2 = Math.floor(Math.random() * 649) + 1;

var pokemonRandom2 = `${pokemonNum2}.png`; //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

var pokemonSource2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + pokemonRandom2;

var image2 = document.querySelectorAll("img")[3];

image2.setAttribute("src", pokemonSource2);


var pokemonLvl1 = Math.floor(Math.random() * 99) + 1;

var pokemonLvl2 = Math.floor(Math.random() * 99) + 1;

var winner = "";

if (pokemonLvl1 > pokemonLvl2){
    winner = `Player1 has a pokemon with a level of ${pokemonLvl1} and  Player2 has a pokemon with a level of ${pokemonLvl2}. Player 1 wins!`
}else if (pokemonLvl2 > pokemonLvl1){
    winner = `Player1 has a pokemon with a level of ${pokemonLvl1} and  Player2 has a pokemon with a level of ${pokemonLvl2}. Player 2 wins!`
}else{
    winner = `Player1 has a pokemon with a level of ${pokemonLvl1} and  Player2 has a pokemon with a level of ${pokemonLvl2}. The result is a draw!`
}

document.getElementById("win").textContent = winner;