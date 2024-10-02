// browserInputUX.js
// Author Henrik Mattsson

export class BrowserInputUX {
    constructor() {
        this.inputElement = document.querySelector("input")
        this.correctInput = true
        this.totalKeysSelected = ''

        this.inputElement.addEventListener('keyPressed', (event) => {
            this.totalKeysSelected = event.detail.totalKeysSelected
            this.setColor()
        })

        this.inputElement.style.backgroundColor = "White"
    }


    setColor() {
        if (this.totalKeysSelected.length === 0) {
            this.setColorToWhite()
        } else if (this.totalKeysSelected.length > 0 && this.correctInput === true) {
            this.setColorToGreen()
        } else if (this.totalKeysSelected.length > 0 && this.correctInput === false) {
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
