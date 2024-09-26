// browserInput.js
// Author: Henrik Mattsson

export let formInputElement = document.querySelector("input")
let inputKeyPress = '' 


// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

export let inputValue = formInputElement.addEventListener("keydown", event => {
    storeinputKeyPress(event)
    let customEventKeyPress = new CustomEvent('keyPressed',
        {
            detail: {
                inputKeyPress: inputKeyPress
            }
        }
    )
    formInputElement.dispatchEvent(customEventKeyPress)
})

function storeinputKeyPress (event) {
    inputKeyPress += event.key
    // console.log(inputKeyPress)
}

export function getKeyPress () {
    return inputKeyPress
}

// https://www.w3schools.com/jsref/event_oninput.asp

