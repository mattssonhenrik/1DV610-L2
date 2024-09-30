// browserDisplayOutput.js
// Author Henrik Mattsson

import { RuleForInput } from '../ruleForInput/ruleForInput.js'

export class BrowserDisplayOutput {
    constructor() {
        this.textField = document.querySelector('#text-container')
        this.ruleHandler = new RuleForInput()

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
        } else if (this.ruleHandler.lowerAndUpperLetters) {
            this.textField.textContent = 'Only lower- and uppercase letters'
        } else if (this.ruleHandler.lowercaseAndNumbers){
            this.textField.textContent = 'Only lowercase letters and numbers'
        } else if (this.ruleHandler.uppercaseAndNumbers) {
            this.textField.textContent = 'Only uppercase letters and numbers'
        } else {
            this.textField.textContent = 'Only number (0-9)'
        }
    }
}