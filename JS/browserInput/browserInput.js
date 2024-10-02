// browserInput.js
// Author: Henrik Mattsson

export class BrowserInput {
    constructor() {
        this.inputElement = document.querySelector("input")
        this.keySelected = ''
        this.totalKeysSelected = ''

        this.inputElement.addEventListener("keydown", event => {
            this.storeKeyPress(event)
        })
    }

    storeKeyPress(event) {
        if (event.key === 'Backspace') {
            setTimeout(() => { // Should refactor to trigger Backspace on keyup instead of keydown because keydown stores the value before the Backspace executes, a timeout fixed this.
                let inputValue = this.inputElement.value
                this.totalKeysSelected = inputValue
                this.inputElement.dispatchEvent(new CustomEvent('keyPressed',
                    {
                        detail: {
                            keySelected: this.keySelected,
                            totalKeysSelected: this.totalKeysSelected
                        }
                    }
                ))
            }, 1)
        } else if (event.key === 'Shift' || event.key === 'Alt' || event.key === 'Ctrl' || event.key === 'Control' || event.key === 'Meta' || event.key === 'CapsLock' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            return
        } else {
            this.keySelected = event.key
            this.totalKeysSelected += event.key


            this.inputElement.dispatchEvent(new CustomEvent('keyPressed',
                {
                    detail: {
                        keySelected: this.keySelected,
                        totalKeysSelected: this.totalKeysSelected
                    }
                }
            ))
        }
    }

    getKeyPress() {
        return this.keySelected
    }

    getTotalKeysSelected() {
        return this.totalKeysSelected
    }
}
