// processInput.js
// Author: Henrik Mattsson

import { BrowserInput } from '../browserInput/browserInput.js'
import { RuleForInput } from '../ruleForInput/ruleForInput.js'

export class InputProcessor {
    constructor() {
        this.selectedKey = ''
        this.selectedWord = ''
        this.currentRule = ''

        this.browserInput = new BrowserInput()
        this.ruleHandler = new RuleForInput()

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


    // Abstraktionsnivå, funktionsanrop beroende på regel som används. Egen klass för kontroll?
    checkValidityOfKey(event) {
        this.currentRule = this.ruleHandler.getChosenRule()
        const regularExpression = new RegExp(this.currentRule)
        console.log('this is the current rule' + this.currentRule)
        if (regularExpression.test(this.selectedKey)) {
            console.log('The character is not a-z, A-Z, 0-9')
        } else {
            console.log('Valid character!')
        }
    } 
}


// let keySelected = browserInput.getKeyPress()
// let totaltKeysSelected = browserInput.getTotalKeysSelected()

// Kolla endast senaste tangent om booleanen i index.js är true, 
//om den är falsk kolla istället hela ordet för att säkerställa alla bokstäver lirar.
// Hur man nu ska gå tillväga att göra det eftersom totalkeys aldrig rensar.
