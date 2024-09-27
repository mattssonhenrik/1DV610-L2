// processInput.js
// Author: Henrik Mattsson

import * as browserInput from '../browserInput/browserInput.js'

let selectedKeyToProcess = ''
let slectedWordToProcess = ''

browserInput.inputElement.addEventListener('keyPressed', (event) => {
    console.log(event.detail.keySelected)
    console.log(event.detail.totalKeysSelected)

    selectedKeyToProcess= event.detail.keySelected

    browserInput.inputElement.dispatchEvent(new CustomEvent('checkValidityOfKey', {
        detail: {
            keySelected : keySelected
        }
    }))
})

browserInput.inputElement.addEventListener('checkValidityOfKey', (event) => {
    if (selectedKeyToProcess === '[a-z]') {
        console.log('correct, a is the character')
    } else {
        console.log('wrong, the stated character is not a')
    }
})


let keySelected = browserInput.getKeyPress()
let totaltKeysSelected = browserInput.getTotalKeysSelected()

// Kolla endast senaste tangent om booleanen i index.js är true, 
//om den är falsk kolla istället hela ordet för att säkerställa alla bokstäver lirar.
// Hur man nu ska gå tillväga att göra det eftersom totalkeys aldrig rensar.
