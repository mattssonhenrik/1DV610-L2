// browserInput.js
// Author: Henrik Mattsson

export let inputElement = document.querySelector("input")
let keySelected = '' 
let totalKeysSelected = ''

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

inputElement.addEventListener("keydown", event => {
    storeinputKeyPress(event)
    inputElement.dispatchEvent(new CustomEvent('keyPressed',
        {
            detail: {
                keySelected: keySelected,
                totalKeysSelected: totalKeysSelected
            }
        }
    ))
})

function storeinputKeyPress (event) {
    keySelected = event.key
    totalKeysSelected += event.key
}

export function getKeyPress () {
    return keySelected
}

export function getTotalKeysSelected () {
    return totalKeysSelected
}
// https://www.w3schools.com/jsref/event_oninput.asp

