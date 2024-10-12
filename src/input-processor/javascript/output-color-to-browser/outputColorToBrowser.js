export class OutputColorToBrowser {
    constructor () {
        this.inputElement = document.querySelector("input")
        this.correctInput = true

        this.inputElement.addEventListener("keyPressed", (event) => {
            this.setColor()
        })
        this.inputElement.style.backgroundColor = "White"
    }


setColor () {
    let inputValue = this.inputElement.value
    if (inputValue === '') {
        this.setColorToWhite()
    } else if (inputValue !== '' && this.correctInput === true) {
        this.setColorToGreen()
    } else if (inputValue !== '' && this.correctInput === false) {
        this.setColorToRed()
    } else {
        this.setColorToGray()
    }
}
setColorToWhite() {
    this.inputElement.style.backgroundColor = "White"
    this.inputElement.style.borderColor = "gray"
}

setColorToGreen() {
    this.inputElement.style.backgroundColor = "lightGreen"
    this.inputElement.style.borderColor = "green"
}

setColorToRed() {
    this.inputElement.style.backgroundColor = "salmon"
    this.inputElement.style.borderColor = "red"
}

setColorToGray() {
    this.inputElement.style.backgroundColor = "gray"
}
}