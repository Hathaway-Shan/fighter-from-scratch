// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    state.hp = 10;
    state.message = '';
    state.type = ['monster', 'monster2', 'monster3'];
    state.damage = [0, 0, 0, 1, 1, 1, 2, 2, 3];
    state.monsters = [
        { name: 'Heathcliff', health: 4, },
        { name: 'Lloyd', health: 4, },
        { name: 'Gilgamesh', health: 5, },
    ];
    // For example:
    // state.game = null;
    // state.pastGames = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function setMessage(message) {
    state.message = message;
}

export function addMonster()