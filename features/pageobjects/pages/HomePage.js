const BasePage = require('./BasePage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {

    constructor() {
        super()
    }
    get ExadelBlock() { return 't_pb_section:nth-child(1)'};
    


}

module.exports = HomePage  ;
