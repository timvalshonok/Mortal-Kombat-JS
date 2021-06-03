

const player1 = {
    name: "Takezo",
    hp: 60,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["stick"],
    attack: function() {
        console.log(player1.name + '' + ' Fight...');
    } 
};
console.log(player1.attack());

const player2 = {
    name: "Kitano",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["bat"],
    attack: function() {
        console.log(player2.name + '' + ' Fight...');
    } 
};
console.log(player2.attack());


function createPlayer(playerId, playerName) {

   const $arenas = document.querySelector('.arenas');
     const $player = document.createElement('div');
     $player.classList.add(playerId);
        const $progressbar = document.createElement('div');
        $progressbar.classList.add('progressbar');
            const $life = document.createElement('div');
            const $name = document.createElement('div')
            $life.classList.add('life');
            $name.classList.add('name');
                $name.innerText = playerName.name;
                $life.style.width = playerName.hp + '%';
                
        const $character = document.createElement('div');
        $character.classList.add('character');
                const $img = document.createElement('img');
                $img.src = playerName.img;
            

            $arenas.appendChild($player);
            $player.appendChild($progressbar);
            $progressbar.appendChild($life);
            $progressbar.appendChild($name);
            $player.appendChild($character);
            $character.appendChild($img);
}

createPlayer('player1', player1);
createPlayer('player2', player2);






