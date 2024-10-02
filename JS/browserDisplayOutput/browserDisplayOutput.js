/**
 * BrowserDisplayOutput is responsible for managing the text display based on input rules and input correctness.
 * It listens for 'incorrectInput' and 'correctInput' events to change the text color.
 * It also checks the current rule set and updates the displayed message accordingly.
 * 
 * @author Henrik Mattsson
 */


import { RuleForInput } from '../ruleForInput/ruleForInput.js'

export class BrowserDisplayOutput {
    constructor() {
        this.textField = document.querySelector('#text-container')
        this.ruleHandler = new RuleForInput()

        document.addEventListener('incorrectInput', (event) => {
            this.textField.style.color = "red"
        })

        document.addEventListener('correctInput', (event) => {
            this.textField.style.color = "black"
        })
    }

    /**
     * Checks the current active input rule from RuleForInput and updates the text container with the appropriate message.
     * It displays which types of input (e.g., lowercase, uppercase, numbers) are allowed based on the rule set.
     */
    checkRules() {
        if (this.ruleHandler.lowerAndUpperLettersPlusNumbers) {
            this.textField.textContent = 'Upper- and lowercase letters and numbers are valid'
        } else if (this.ruleHandler.lowerLetters) {
            this.textField.textContent = 'Only lowercase letters'
        } else if (this.ruleHandler.upperLetters) {
            this.textField.textContent = 'Only uppercase letters'
        } else if (this.ruleHandler.lowerAndUpperLetters) {
            this.textField.textContent = 'Only lower- and uppercase letters'
        } else if (this.ruleHandler.lowerLetterAndNumbers) {
            this.textField.textContent = 'Only lowercase letters and numbers'
        } else if (this.ruleHandler.upperLetterAndNumbers) {
            this.textField.textContent = 'Only uppercase letters and numbers'
        } else {
            this.textField.textContent = 'Only numbers (0-9)'
        }
    }
}