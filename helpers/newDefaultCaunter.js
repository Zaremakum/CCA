
const selectorCnt = require ('../data/selectors.json').counter;
const selectorGen = require ('../data/selectors.json').general;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;

function addNewDefaultCounter(value, name) {
$(selectorCnt.deleteBtn).click();
$(selectorGen.addNameField).setValue(value);
$(selectorGen.defaultValueField).setValue(value);
$(selectorGen.addCounterBtn).click();

}
module.exports = {}