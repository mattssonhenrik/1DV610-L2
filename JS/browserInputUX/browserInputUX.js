// browserInputUX.js
// Author Henrik Mattsson

export class BrowserInputUX {
    constructor() {
        this.inputElement = document.querySelector("input")
        this.correctInput = true
        this.totalKeysSelected = ''

        this.inputElement.addEventListener('keyPressed', (event) => {
            this.totalKeysSelected=event.detail.totalKeysSelected
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
    }

    setColorToGreen() {
        this.inputElement.style.backgroundColor = "lightGreen"
        console.log('hello from setcolortogreen!')
    }

    setColorToRed() {
        this.inputElement.style.backgroundColor = "salmon"
        console.log('hello from setcolortoSALMON!')
    }

    setColorToGray() {
        this.inputelemnent.style.backgroundColor = "gray"
    }
}
