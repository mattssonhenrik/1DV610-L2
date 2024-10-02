/**
 * RuleForInput is responsible for managing and returning the active input validation rule.
 * It provides several predefined rules for allowed characters, such as lowercase letters, 
 * uppercase letters, numbers, and combinations of these. Only one rule can be active at a time.
 * 
 * @author Henrik Mattsson
 */

export class RuleForInput {
    constructor() {
        // Only one rule can be applicable at the same time
        this.lowerAndUpperLettersPlusNumbers = true
        this.lowerLetters = false
        this.upperLetters = false
        this.lowerAndUpperLetters = false
        this.lowerLetterAndNumbers = false
        this.upperLetterAndNumbers = false
        this.numbers = false
    }

    /**
     * Returns the regular expression for the currently active input validation rule.
     * It checks which rule is the first rule set to `true` and returns the corresponding regex.
     * 
     * @returns {RegExp} The regular expression of the active rule.
     */
    getChosenRule() {
        if (this.lowerAndUpperLettersPlusNumbers) {
            return this.getLowerAndUpperLettersPlusNumbers()
        } else if (this.lowerLetters) {
            return this.getLowerLetters()
        } else if (this.upperLetters) {
            return this.getUpperLetters()
        } else if (this.lowerAndUpperLetters) {
            return this.getLowerAndUpperLetters()
        } else if (this.lowerLetterAndNumbers) {
            return this.getLowerLetterAndNumbers()
        } else if (this.upperLetterAndNumbers) {
            return this.getUpperLetterAndNumbers()
        } else {
            return this.getNumbers()
        }
    }

    getLowerAndUpperLettersPlusNumbers() {
        return /[^a-zA-Z0-9]/
    }

    getLowerLetters() {
        return /[^a-z^]/
    }

    getUpperLetters() {
        return /[^A-Z]/
    }

    getLowerAndUpperLetters() {
        return /[^a-zA-Z]/
    }

    getLowerLetterAndNumbers() {
        return /[^a-z0-9]/
    }

    getUpperLetterAndNumbers() {
        return /[^A-Z0-9]/
    }

    getNumbers() {
        return /[^0-9]/
    }
}
