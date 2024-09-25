// index.js
// Author: Henrik Mattsson

import { getFormInput } from "./inputFromBrowser/inputFromBrowser.js"

let isInputInCorrectformat = true

let testButtonElement = document.querySelector("#test-button")
testButtonElement.addEventListener("click", (event) => {
    let formInput = getFormInput()
    event.preventDefault()
    console.log('test-button says the value is = ' + formInput)
    console.log('this eventlistener is firing')
})

console.log('index.js has fired')