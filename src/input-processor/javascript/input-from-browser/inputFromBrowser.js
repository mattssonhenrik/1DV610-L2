export class InputFromBrowser {
    constructor() {
        this.inputElement = document.querySelector("input")
        // this.keyPressed = ''

        this.inputElement.addEventListener("keydown", event => {
            this.dispatchCustomEvent(event)
        })
    }

    dispatchCustomEvent(event) {
        dispatchEvent(new CustomEvent('keyPressed',
            {
                detail: {
                    keyPressed: event.key
                }
            }
        ))
    }
}