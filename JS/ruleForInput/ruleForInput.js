// ruleforInput.js
// Author Henrik Mattsson

export class RuleForInput {
    constructor() {
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowercaseAndNumbers = false
        this.uppercaseAndNumbers = true
        this.numbers = true
    }

    getChosenRule () {
        if(this.lowerAndUpperLettersPlusNumbers) {
            return this.getLowerAndUpperLettersPlusNumbers()
        } else if (this.lowerLetters) {
            return this.getLowerLetters()
        } else if (this.upperLetters) {
            return this.getUpperLetters()
        } else if (this.lowerAndUpperLetters) {
            return this.getLowerAndUpperLetters()
        } else if (this.lowercaseAndNumbers) {
            return this.getLowercaseAndNumbers()
        } else  if (this.uppercaseAndNumbers) {
            return this.getUppercaseAndNumbers()
        } else {
            return this.getNumbers()
        }
    }

    getLowerAndUpperLettersPlusNumbers() {
        return /[^a-zA-Z0-9]/
    }
    
    getLowerLetters () {
            return /[^a-z^]/
    }

    getUpperLetters () {
            return /[^A-Z]/
    }

    getLowerAndUpperLetters() {
        return /[^a-zA-Z]/
    }

    getLowercaseAndNumbers() {
        return /[^a-z0-9]/
    }

    getUppercaseAndNumbers () {
        return /[^A-Z0-9]/
    }

    getNumbers () {
            return /[^0-9]/
    }
}
