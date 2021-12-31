

import def from './services/default.js';
import switchs from './modules/switch.js';
import checkLogic from './modules/checkLogic.js';


window.addEventListener('DOMContentLoaded',()=>{
    def();
    switchs();
    checkLogic();
});