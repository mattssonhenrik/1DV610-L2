// ruleforInput.js
// Author Henrik Mattsson

export class RuleForInput {
    constructor() {
        this.lowerAndUpperLettersPlusNumbers = true
        this.lowerLetters = false
        this.upperLetters = false
        this.numbers = false
    }

    getChosenRule () {
        if(this.lowerAndUpperLettersPlusNumbers) {
            return this.getLowerAndUpperLettersPlusNumbers()
        } else if (this.lowerLetters) {
            return this.getLowerLetters()
        } else if (this.upperLetters) {
            return this.getUpperLetters()
        } else {
            return this.getNumbers()
        }
    }

    getLowerAndUpperLettersPlusNumbers() {
        return /[^a-zA-Z0-9]/
    }
    
    getLowerLetters () {
        if (this.lowerLetters) {
            return /[^a-z^]/
        }
    }

    getUpperLetters () {
        if (this.upperLetters) {
            return /[^A-Z]/
        }
    }

    getNumbers () {
        if (this.numbers) {
            return /[^0-9]/
        }
    }
}
