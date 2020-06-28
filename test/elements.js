const selectorGen = require ('../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json');

describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });
    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(selectorGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', function () {
            const actual = $(selectorGen.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', function () {
            const actual = $(selectorGen.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length - 2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })
        it('TC-006 Default Value Field', function () {
            const actual = $(selectorGen.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Name Field', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length - 1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', function () {
            const actual = $(selectorGen.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('Elements value', function () {
        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGen.header).getText();
            expect(actual).toEqual(expectedGen.general.header);
        })
        it('TC-010 Total Result = Total:0', function () {
            const actual = $(selectorGen.totalResult).getText();
            expect(actual).toEqual(expectedGen.general.totalResult);
        })

        it('TC-011 Label for Add Name Field', function () {
            const actual = $(selectorGen.addNameField).getText();
            expect(actual).toEqual(expectedGen.general.addNameField);
        })


    });

});

