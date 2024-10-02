/**
 * InputProcessor is responsible for processing input events, validating input based on predefined rules,
 * and updating the input field's appearance through the BrowserInputUX class. It listens for custom events
 * related to key presses and input validation.
 * 
 * @author Henrik Mattsson
 */

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

    /**
     * Processes the key pressed by the user and updates the selectedKey and totalKeysSelected properties.
     * It dispatches a custom event to check the validity of the selected key.
     * 
     * @param {CustomEvent} event - The custom 'keyPressed' event dispatched by BrowserInput.
     */
    selectedKeyToProcess(event) {
        this.selectedKey = event.detail.keySelected
        this.totaltKeysSelected = event.detail.totalKeysSelected
        this.browserInput.inputElement.dispatchEvent(new CustomEvent('checkValidityOfKey', {
            detail: {
                keySelected: this.selectedKey
            }
        }))
    }

    /**
     * Validates the selected key against the active input rule. If the key does not pass the rule, 
     * it triggers an event to update the input field to indicate incorrect input.
     * 
     * @param {CustomEvent} event - The custom 'checkValidityOfKey' event dispatched by selectedKeyToProcess.
     */
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

    /**
     * Validates the entire input string (totalKeysSelected) against the active input rule.
     * If the string is valid, it updates the input field to indicate correct input and dispatches a custom event.
     */
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
