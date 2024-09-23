let formInputValue = document.querySelector("input")
export let formInput = document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault()
    formInputValue = formInputValue.value
    console.log(formInputValue)
    console.log("did this formInput fire?")
})