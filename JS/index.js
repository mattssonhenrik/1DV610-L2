// index.js
// Author: Henrik Mattsson

import { InputProcessor } from './processInput/processInput.js'
import { BrowserDisplayOutput } from './browserDisplayOutput/browserDisplayOutput.js'

document.addEventListener('DOMContentLoaded', () => {
    const inputProcessor = new InputProcessor()
    const browserDisplay = new BrowserDisplayOutput()
    browserDisplay.checkRules()
    console.log(browserDisplay.checkRules())
})