
class Rozetka  {
    constructor() {

    };
    get Language () { return ("a.lang__link") }
   
    get SearchIcon () { return (".search-form__input") }
    get SearchClick () { return ('.button_color_green') }
    get SearchText () { return (".search-form__input[type='text']") }
     
    get Entry (){return("li.header-actions__item.header-actions__item--user")}
    get Login (){return ("#auth_email")}
    get Password (){return ("#auth_pass")}
    get Button (){return (".button--large.button--green.auth-modal__submit.ng-star-inserted")}
 
}

module.exports = Rozetka;