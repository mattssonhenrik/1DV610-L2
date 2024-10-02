/**
 * BrowserInput is responsible for managing the key input from the user.
 * It stores the selected key and maintains a cumulative string of all keys pressed.
 * It dispatches a 'keyPressed' event whenever a valid key is pressed.
 * 
 * @author Henrik Mattsson
 */

export class BrowserInput {
    constructor() {
        this.inputElement = document.querySelector("input")
        this.keySelected = ''
        this.totalKeysSelected = ''

        this.inputElement.addEventListener("keydown", event => {
            this.storeKeyPress(event)
        })
    }

    /**
     * Handles key presses and updates the `keySelected` and `totalKeysSelected` values.
     * If the 'Backspace' key is pressed, it updates the totalKeysSelected after a brief timeout.
     * It ignores certain control keys (e.g., Shift, Alt, Ctrl) and dispatches a custom 'keyPressed' event with the updated values.
     * 
     * @param {KeyboardEvent} event - The keydown event triggered by the user.
     */
    storeKeyPress(event) {
        if (event.key === 'Backspace') {
            setTimeout(() => { // Should refactor to trigger Backspace on keyup instead of keydown because keydown stores the value before the Backspace executes, a timeout fixed this.
                let inputValue = this.inputElement.value
                this.totalKeysSelected = inputValue
                this.inputElement.dispatchEvent(new CustomEvent('keyPressed',
                    {
                        detail: {
                            keySelected: this.keySelected,
                            totalKeysSelected: this.totalKeysSelected
                        }
                    }
                ))
            }, 1)
        } else if (event.key === 'Shift' || event.key === 'Alt' || event.key === 'Ctrl' || event.key === 'Control' || event.key === 'Meta' || event.key === 'CapsLock' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            return
        } else {
            this.keySelected = event.key
            this.totalKeysSelected += event.key


            this.inputElement.dispatchEvent(new CustomEvent('keyPressed',
                {
                    detail: {
                        keySelected: this.keySelected,
                        totalKeysSelected: this.totalKeysSelected
                    }
                }
            ))
        }
    }
}
