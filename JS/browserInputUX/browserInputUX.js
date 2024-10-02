/**
 * BrowserInputUX is responsible for updating the visual appearance (color) of the input field 
 * based on the validity of the user input. It listens for the 'keyPressed' event and updates 
 * the input field's background and border colors accordingly.
 * 
 * @author Henrik Mattsson
 */

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


    /**
     * Determines which color to set based on the current state of the input field.
     * It checks if the field is empty or if the input is valid/invalid and sets the background color accordingly.
     */
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

    /**
     * Sets the input field's background color to white and its border color to gray.
     */
    setColorToWhite() {
        this.inputElement.style.backgroundColor = "White"
        this.inputElement.style.borderColor = "gray"
    }

    /**
     * Sets the input field's background color to light green and its border color to green.
     */
    setColorToGreen() {
        this.inputElement.style.backgroundColor = "lightGreen"
        this.inputElement.style.borderColor = "green"
    }

    /**
     * Sets the input field's background color to salmon (red) and its border color to red.
     */
    setColorToRed() {
        this.inputElement.style.backgroundColor = "salmon"
        this.inputElement.style.borderColor = "red"
    }

    /**
     * Sets the input field's background color to gray.
     */
    setColorToGray() {
        this.inputElement.style.backgroundColor = "gray"
    }
}
