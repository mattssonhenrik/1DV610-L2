// browserDisplayOutput.js
// Author Henrik Mattsson

import { RuleForInput } from '../ruleForInput/ruleForInput.js'

export class BrowserDisplayOutput {
    constructor() {
        this.textField = document.querySelector('#text-container')
        this.ruleHandler = new RuleForInput()
        // this.currentRule = this.ruleHandler.getChosenRule()

        window.addEventListener('load', () => {
            this.checkRules()
        })
    }


    checkRules() {
        if (this.ruleHandler.lowerAndUpperLettersPlusNumbers) {
            this.textField.textContent = 'Uppercase, lowercase and numbers are valid'
        } else if (this.ruleHandler.lowerLetters) {
            this.textField.textContent = 'Only lowercase letters'
        } else if (this.ruleHandler.upperLetters) {
            this.textField.textContent = 'Only uppercase letters'
        } else {
            this.textField.textContent = 'Only number (0-9)'
        }
    }
}