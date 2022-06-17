

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
    if (player.dead === false) {
        const img = document.createElement('img');
        img.src = 'assets/' + player.name + '.png';
        return img;} 
    if (player.dead === true) {
        const img = document.createElement('img');
        img.src = 'assets/dead-' + player.name + '.png';
        return img;} 
}
