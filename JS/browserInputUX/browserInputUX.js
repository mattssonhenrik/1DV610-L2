// browserInputUX.js
// Author Henrik Mattsson

export class BrowserInputUX {
    constructor () {
        this.inputElement = document.querySelector("input")
        this.correctInput = true

        this.inputElement.addEventListener('keyPressed', (event) => {
            this.setColor(event)
        })

        this.inputElement.style.backgroundColor = "White"
    }

    setColor (event) {
        console.log(event.detail.totalKeysSelected.length + 'that was the total keys lenght!')
        if (event.detail.totalKeysSelected.length === 0) {
            console.log('lets make hte background white')
        } else {
            console.log('lets do this red or green')
            this.inputElement.style.backgroundColor = "lightGreen"
            // https://htmlcolorcodes.com/colors/shades-of-red/ "salmon"
        }
    }


    // getCorrectInput () {
    //     return this.correctInput
    // }

    // setCorrectInput () {
    //     this.correctInput = !this.correctInput
    // }
}