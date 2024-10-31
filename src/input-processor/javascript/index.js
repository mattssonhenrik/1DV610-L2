import { InputProcessor } from './input-processor/inputProcessor.js'
import { InputRule } from './input-rules/inputRules.js'

const ruleHandler = new InputRule()
const inputProcessor = new InputProcessor(ruleHandler)