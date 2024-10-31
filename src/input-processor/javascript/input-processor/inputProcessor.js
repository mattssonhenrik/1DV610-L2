import { OutputColorToBrowser } from '../output-color-to-browser/outputColorToBrowser.js'
import { OutputTextToBrowser } from '../output-text-to-browser/outputTextToBrowser.js'
import { InputFromBrowser } from '../input-from-browser/inputFromBrowser.js'
import { InputRule } from '../input-rules/inputRules.js'

/**
 * Processes user input, validates it against a defined rule, and triggers appropriate actions for valid/invalid input.
 */
export class InputProcessor {
    /**
     * Initializes a new instance of the InputProcessor class.
     * Sets up input handling, color changes, and validation based on the provided rule handler.
     * 
     */
    constructor(ruleHandler) {
        this.inputFromBrowser = new InputFromBrowser()
        this.inputElementColorChanger = new OutputColorToBrowser()
        this.ruleHandler = new InputRule()
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
        this.inputElement = document.querySelector(".filter")

        this.outputTextToBrowser = new OutputTextToBrowser(ruleHandler)
        this.outputTextToBrowser.checkRules()

        if(this.inputElement !== null) {
            this.inputElement.addEventListener("keyPressed", () => {
                let currentInput = this.inputElement.value
                this.isInputValid(currentInput)
            })
        }
    }

    /**
     * Updates the input validation rules with a new rule handler.
     * 
     * @param {InputRule} newRuleHandler - The new rule handler to update the validation rules.
     */
    updateRules(newRuleHandler) {
        this.ruleHandler = newRuleHandler
        this.regex = new RegExp(this.ruleHandler.getChosenRule())
    }

    /**
     * Validates the current input against the active regular expression rule.
     * Triggers events for valid or invalid input accordingly.
     */
    isInputValid(currentInput) {
        if (this.regex.test(currentInput)) {
            this.processInvalidInput()
        } else {
            this.processValidInput()
        }
    }

    /**
     * Dispatches a custom "incorrectInput" event when the input is invalid.
     */
    processInvalidInput() {
        document.dispatchEvent(new CustomEvent("incorrectInput"))
    }

    /**
     * Dispatches a custom "correctInput" event when the input is valid.
     */
    processValidInput() {
        document.dispatchEvent(new CustomEvent("correctInput"))
    }
}
