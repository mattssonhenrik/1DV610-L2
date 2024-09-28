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
    getKeyPress() {
        return this.keySelected
    }
    
    getTotalKeysSelected() {
        return this.totalKeysSelected
    }
}
