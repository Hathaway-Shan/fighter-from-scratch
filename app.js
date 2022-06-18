// import services and utilities

// import component creators
import renderMonster from './components/renderMonsters.js';
import renderPlayer from './components/renderPlayer.js';
import createMessage from './components/Message.js';
import state from './state.js';
import createAddMonster from './components/handleAddMonster.js';
import { addMonster } from './state.js';
// import state and dispatch functions
// import state, {
//     updateMonster,
//     updateHealth,
//     removeMonster,
// } from './state.js'

// Create each component:
//imports the component function that targets the html element 
//and turns it into a constant the constant now acts as that function
const Monster = renderMonster(document.querySelector('#monster-image'));
const Player = renderPlayer(document.querySelector('#player-image'));
const Message = createMessage(document.querySelector('#game-text'));


// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object



const newMonster = createAddMonster(document.querySelector('#form-input'), {
    handleAddMonster: (name) => {
        addMonster(name);
        state.message.push(`${name} accepts your challenge!`);
        
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
export default function display() {
//the constant which is a function now runs the code targeting 
//the HTML element in the display function
    newMonster({});
    Player({ players: state.player });
    Monster({ monsters: state.monsters });
    Message({ message: state.message });
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
display();
