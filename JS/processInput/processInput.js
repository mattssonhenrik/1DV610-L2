// processInput.js
// Author: Henrik Mattsson

import { BrowserInput } from '../browserInput/browserInput.js'
import { RuleForInput } from '../ruleForInput/ruleForInput.js'
import { BrowserInputUX } from '../browserInputUX/browserInputUX.js'

export class InputProcessor {
    constructor() {
        this.selectedKey = ''
        this.totaltKeysSelected = ''
        this.currentRule = ''

        this.browserInput = new BrowserInput()
        this.ruleHandler = new RuleForInput()
        this.inputElementColor = new BrowserInputUX()

        this.browserInput.inputElement.addEventListener('keyPressed', (event) => {
            this.selectedKeyToProcess(event)
        })
        this.browserInput.inputElement.addEventListener('checkValidityOfKey', (event) => {
            this.checkValidityOfKey(event)
        })
        this.browserInput.inputElement.addEventListener('checkForInvalidCharacters', (event) => {
            console.log('Checking for invalid characters from listener checkForInvalidCharacters')
            this.checkForInvalidKeys()
        })

    }

    // Lägga till en if-sats som inte lagrar knapptrycket om det inte är det vi vill ha, absraktionsnivå -> kanske tunnla genom annan funktion först som kollar reglerna. 
    // If-sats med reguljärt uttryck.
    selectedKeyToProcess(event) {
        console.log(event.detail.keySelected)
        console.log(event.detail.totalKeysSelected)
        this.selectedKey = event.detail.keySelected 
        this.totaltKeysSelected = event.detail.totalKeysSelected
        this.browserInput.inputElement.dispatchEvent(new CustomEvent('checkValidityOfKey', {
            detail: {
                keySelected: this.selectedKey
            }
        }))
    }

    checkValidityOfKey(event) {
        this.currentRule = this.ruleHandler.getChosenRule()
        const regularExpression = new RegExp(this.currentRule)

        if (regularExpression.test(this.selectedKey)) {
            this.inputElementColor.correctInput = false
            this.inputElementColor.setColor()
        } else {
            console.log('Valid character!')
        }
        this.checkForInvalidKeys()
    }
    
    checkForInvalidKeys() {
        const regularExpression = new RegExp(this.currentRule)
        if (!regularExpression.test(this.totaltKeysSelected)) {
            this.inputElementColor.correctInput = true
            this.inputElementColor.setColor()
            console.log(this.inputElementColor.correctInput)
        } else {
            // Behöver ju inte sätta röd färg igen
        }
    }
}


// let keySelected = browserInput.getKeyPress()
// let totaltKeysSelected = browserInput.getTotalKeysSelected()

// Kolla endast senaste tangent om booleanen i index.js är true, 
//om den är falsk kolla istället hela ordet för att säkerställa alla bokstäver lirar.
// Hur man nu ska gå tillväga att göra det eftersom totalkeys aldrig rensar.
