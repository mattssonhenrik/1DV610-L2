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
            this.checkForInvalidKeys()
        })

    }

    selectedKeyToProcess(event) {
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
            document.dispatchEvent(new CustomEvent('incorrectInput'))
        } else {
            // Do nothing for now
        }
        this.checkForInvalidKeys()
    }

    checkForInvalidKeys() {
        const regularExpression = new RegExp(this.currentRule)
        if (!regularExpression.test(this.totaltKeysSelected)) {
            this.inputElementColor.correctInput = true
            this.inputElementColor.setColor()
            document.dispatchEvent(new CustomEvent('correctInput'))
        } else {
            // Do nothing for now
        }
    }
}
