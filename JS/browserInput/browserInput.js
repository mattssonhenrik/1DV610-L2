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
            this.removeLastEntry()
            this.inputElement.dispatchEvent(new CustomEvent('keyPressed', 
                {
                    detail: {
                        keySelected: this.keySelected,
                        totalKeysSelected: this.totalKeysSelected
                    }
                }
            ))
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

    removeLastEntry() {
        this.totalKeysSelected = this.totalKeysSelected.slice(0, -1)
    }

    getKeyPress() {
        return this.keySelected
    }
    
    getTotalKeysSelected() {
        return this.totalKeysSelected
    }
}
