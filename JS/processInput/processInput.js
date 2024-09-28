// processInput.js
// Author: Henrik Mattsson

import { BrowserInput } from '../browserInput/browserInput.js'

export class InputProcessor {
    constructor() {
        let selectedKey = ''
        let selectedWord = ''

        this.browserInput = new BrowserInput()

        this.browserInput.inputElement.addEventListener('keyPressed', (event) => {
            this.selectedKeyToProcess(event)
        })
        this.browserInput.inputElement.addEventListener('checkValidityOfKey', (event) => {
            this.checkValidityOfKey(event)
        })

    }

    // Lägga till en if-sats som inte lagrar knapptrycket om det inte är det vi vill ha, absraktionsnivå -> kanske tunnla genom annan funktion först som kollar reglerna. 
    // If-sats med reguljärt uttryck.
    selectedKeyToProcess(event) {
        console.log(event.detail.keySelected)
        console.log(event.detail.totalKeysSelected)
        this.selectedKey = event.detail.keySelected 
        this.browserInput.inputElement.dispatchEvent(new CustomEvent('checkValidityOfKey', {
            detail: {
                keySelected: this.selectedKey
            }
        }))
    }

    checkValidityOfKey(event) {
        if (this.selectedKey === '[a-z]') {
            console.log('correct, a is the character')
        } else {
            console.log('wrong, the stated character is not a')
        }
    } 
}








// let keySelected = browserInput.getKeyPress()
// let totaltKeysSelected = browserInput.getTotalKeysSelected()

// Kolla endast senaste tangent om booleanen i index.js är true, 
//om den är falsk kolla istället hela ordet för att säkerställa alla bokstäver lirar.
// Hur man nu ska gå tillväga att göra det eftersom totalkeys aldrig rensar.
