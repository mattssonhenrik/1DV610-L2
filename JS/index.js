// import { formInput } from "./inputFromBrowser/inputFromBrowser.js"

let isInputInCorrectformat = true

let formInputValueReference = document.querySelector("input")
let formInputValue = ''
export let formInput = document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault()
    formInputValue = formInputValueReference.value
    console.log(formInputValue)
    console.log("did this formInput fire?")
    // formInputValue = ''
})

console.log("index.js has fired")
console.log("Well now inputForm is firing from index.js" + formInput)

