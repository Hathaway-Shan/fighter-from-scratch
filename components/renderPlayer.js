

export default function renderPlayer(root) {
    const container = root;
    return ({ players }) => {
//clear out container
        container.innerHTML = '';
        for (let player of players) {
            let doge = { player };
            let newDoge = Player(doge);
            container.append(newDoge);
        }
    };
}

export function Player({ player }) {

    const monBox = document.createElement('div');
    let nameSpan = document.createElement('span');
    nameSpan.textContent = player.name;

    let healthSpan = document.createElement('span');
    healthSpan.textContent = player.health;

    let killSpan = document.createElement('span');
    killSpan.textContent = player.kills;


    const box1 = document.getElementById('player-box');
    box1.innerHTML = '';
    monBox.append('Name: ', nameSpan, '- Health ', healthSpan, ' Kills:', killSpan);
    box1.append(monBox);
    
    if (player.dead === false) {
        const img = document.createElement('img');
        img.src = 'assets/' + player.name + '.png';
        return img;} 
    if (player.dead === true) {
        const img = document.createElement('img');
        img.src = 'assets/dead-' + player.name + '.png';
        return img;} 
}
