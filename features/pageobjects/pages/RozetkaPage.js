const BasePage = require('./BasePage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RozetkaPage extends BasePage {

    constructor() {
        super()
    }
    get nf(){return 'div.layout'};
    get gh(){return '.layout.ng-star-inserted'}



}

module.exports = RozetkaPage;
