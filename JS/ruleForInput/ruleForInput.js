// ruleforInput.js
// Author Henrik Mattsson

export class RuleForInput {
    constructor() {
        // Only one rule can be applicable at the same time
        this.lowerAndUpperLettersPlusNumbers = false
        this.lowerLetters = true
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerletterAndNumbers = false
        this.upperletterAndNumbers = false
        this.numbers = false
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
        } else if (this.lowerletterAndNumbers) {
            return this.getLowerletterAndNumbers()
        } else  if (this.upperletterAndNumbers) {
            return this.getUpperletterAndNumbers()
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

    getLowerletterAndNumbers() {
        return /[^a-z0-9]/
    }

    getUpperletterAndNumbers () {
        return /[^A-Z0-9]/
    }

    getNumbers () {
            return /[^0-9]/
    }
}
