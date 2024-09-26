// processInput.js
// Author: Henrik Mattsson

import * as browserInput from '../browserInput/browserInput.js'

browserInput.formInputElement.addEventListener('keyPressed', (event) => {
    console.log(event.detail.inputKeyPress)

    console.log('is custom event heard?')
})


let inputKeyPress = browserInput.getKeyPress()
console.log('This is from proccesInput.js' + inputKeyPress)