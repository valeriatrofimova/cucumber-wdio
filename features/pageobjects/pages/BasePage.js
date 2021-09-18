'use strict';

const Header = require('../components/Header');
const Footer = require('../components/Footer');
const Rozetka= require('../components/Rozetka');

class BasePage {
        constructor() {
                this.Header = new Header();
                this.Footer = new Footer();
                this.Rozetka = new Rozetka();
        };

}

module.exports =  BasePage;
