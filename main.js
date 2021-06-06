const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: "Takezo",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["stick"],
    attack: function () {
        console.log(player1.name + '' + ' Fight...');
    }
};
console.log(player1.attack());

const player2 = {
    player: 2,
    name: "Kitano",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["bat"],
    attack: function () {
        console.log(player2.name + '' + ' Fight...');
    }
};
console.log(player2.attack());

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    

    return $tag;
};

function createPlayer(playerName) {

    const $player = createElement('div', 'player'+playerName.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');

    $name.innerText = playerName.name;
    $life.style.width = playerName.hp + '%';
    $img.src = playerName.img;

   
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    return $player;
};

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+player.player +' .life');
    

    if (player1.hp <= 0 || player2.hp <= 0) {
        $arenas.appendChild(playerWin(player.name));
        $randomButton.disabled = true;
        player.hp = 0;
        $playerLife.style.width = player.hp + '%'; 
    } else if (player.hp > 0) {
        player.hp -= Math.ceil(Math.random() *100);
        $playerLife.style.width = player.hp + '%';  
    } else if (player1.hp == 0 && player2.hp == 0){
        $randomButton.disabled = true;
        player.hp = 0;
        $playerLife.style.width = player.hp + '%'; 
    };
    console.log(player1.hp, player2.hp);
};


function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name === player2.name) {
        $winTitle.innerText = player1.name + ' Wins';
    } else if (name === player1.name){
        $winTitle.innerText = player2.name + ' Wins';
    } else if (name === player1.name && name === player2.name) {
        $winTitle.innerText = 'We have a TIE!';
    };

    return $winTitle;
};

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

