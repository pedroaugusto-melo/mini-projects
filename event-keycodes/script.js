const divInitialState = document.getElementById('initial-state');
const divFinalState = document.getElementById('final-state');  
const eventKeyValue = document.getElementById('event-key-value');
const eventKeyCodeValue = document.getElementById('event-key-code-value');
const eventCodeValue = document.getElementById('event-code-value');

document.addEventListener('keydown', e => {
    divInitialState.style.display = 'none';
    divFinalState.style.display = 'flex';
    
    eventKeyValue.innerHTML = e.key;
    eventKeyCodeValue.innerHTML = e.keyCode;
    eventCodeValue.innerHTML = e.code;
});