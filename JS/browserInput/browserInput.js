// inputFromBrowser.js
// Author: Henrik Mattsson

let formInputElement = document.querySelector("input")
let formInput = ''
let formInputKeyPress = ''

export let formInputSubmission = document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault()
    formInput = formInputElement.value
    console.log(formInput)
})

export function getFormInput() {
    return formInput
}


// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

export let formInputValueElement = formInputElement.addEventListener("keydown", event => {
    if(formInputElement.value != undefined) {
        formInputKeyPress += formInputElement.value
        console.log(formInputKeyPress)
    }
})

