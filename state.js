//the rng item grabber will be how we sort damage and health
import { getRandomItem } from './utils.js';

// set state to an empty object
const state = {};

state.message = [];
state.player = [];
state.monsters = [];
state.damage = [];
state.health = [];

// initialize state, also used in test
export function initialize() {
    // What should state look like on load?
    state.player = [{
        name: 'Cid',
        health: 10,
        dead: false,
        kills: 0,
    }];

    state.health = [3, 4, 5];

    state.monsters = [{
        name: 'Gilgamesh',
        health: getRandomItem(state.health),
        enemy: true,
        dead: false,
        class: 'warrior'
    },
    {
        name: 'Lloyd',
        health: getRandomItem(state.health),
        enemy: true,
        dead: false,
        class: 'warrior'
    }];
    
    state.message = ['click enemies to defend yourself!'];
    state.damage = [0, 0, 1, 1, 1, 2, 2];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function setMessage(message) {
// since message is now an array we have to push onto it
    state.message.push(message);
}

// export function addMonster(monster) {
//     state.monsters.push(monster);
// }

export function addMonster(name) {
    const monster = {
        name,
        health: getRandomItem(state.health),
        enemy: true,
        dead: false,
        class: 'warrior'
    };
    state.monsters.push(monster);
}

export function removeMonster(monster) {
    const index = state.monsters.indexOf(monster);
    if (index !== -1) {
        state.monsters.splice(index, 1);
    }
}

