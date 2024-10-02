# 1DV610-L2
To use the input-field-sorter, just download the repo and start it with the live-server-extension plugin to VSC.

You can change which rule you want to apply on the input-field in the file ruleForInputJs in the folder ruleForInput, the rules you can choose between are:
lowerAndUpperLettersPlusNumbers 
lowerLetters 
upperLetters 
lowerAndUpperLetters 
lowerletterAndNumbers 
upperletterAndNumbers 
numbers

You change the current rule by setting it to true and you can only apply one rule at the same time. If you set multiple rules to true the first one in the list will be applicable. If you set all rule to false the numbers rule will apply.



Helpfull documentation:
browserInput:
https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

rulesForInput.js (REGEX):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp