const BasePage = require('./BasePage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CareerPage extends BasePage {

    constructor() {
        super()
    }
    get SendSvBtn() { return '.careers__panel__banner .contact-us__link'};



}

module.exports = CareerPage  ;
