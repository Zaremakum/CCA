
const toyotaSlct = require('../data/toyotaSelectors.json');
const toyotaExpt =require('../data/toyotaExpected.json');
describe('Default functionality Toyota.com', ()=> {
    before ('BEFORE TEST', () => {
       browser.maximizeWindow();
       browser.deleteAllCookies();
       browser.url('/');
    })
    it('Label is exist', function () {
        const res =  $(toyotaSlct.general.toyotaLabel).isDisplayed();
        expect(res).true;
    });
    it('Select Vehicle Text is correct', function () {
        const res = $(toyotaSlct.general.selectVehicle).getText(); // text
        expect(res).toEqual(toyotaExpt.general.selectVehicle);
    });
    it('Shopping Tools is correct ', function () {
        const res = $(toyotaSlct.general.selectShoppingTools).getText();
        expect(res).toEqual(toyotaExpt.general.selectShoppingTools);
    })
    it('Play Button functionality is correct', function () {
        $(toyotaSlct.general.playButton).click();
        const res = $(toyotaSlct.general.tiltleModel).isDisplayed();
        expect(res).true;


    });
});
