import { InputRule } from '../input-rules/inputRules.js'

export class InputProcessor {
    constructor (){

        this.ruleHandler = new InputRule()
        this.ruleSelected = this.ruleHandler.getChosenRule()
        this.regex = new RegExp(this.ruleSelected)

        document.addEventListener("keyPressed", event => {
            isInputValid(event.detail.keyPressed)
        })
    }
    isInputValid(keyPressed) {
        if (regex.test(keyPressed)){
            processInvalidInput()
        } else {
            processValidInput ()
        }
    }

    proccessInvalidInput () {

    }

    processValidInput () {
        
    }
}