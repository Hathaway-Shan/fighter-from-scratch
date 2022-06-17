export default function renderMonster(root) {
    const container = root.querySelector('#monster-image');

    return ({ monsters }) => {
//clear out container
        container.innerHTML = '';
        for (let monster of monsters) {
            let doge = { monster };
            let newDoge = Monster(doge);
            container.append(newDoge);
        }
    };
}

export function Monster({ monster }) {
    const img = document.createElement('img');
    img.src = 'assets/' + monster.type + '.png';
    img.alt = monster.type;
    return img;
}