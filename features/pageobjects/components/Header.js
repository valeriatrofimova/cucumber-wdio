'use strict';

class Header{
	constructor (){

	};
        
       get Header  () {return ("header#main-header")};

        // this.HeaderLogo = this.Header.element(by.css('.logo-container'));

        get ServicesButton () {return ('#menu-item-192350')};
        // this.IndustriesButton = this.Header.element(by.css('#menu-item-183744'));
         get Careers (){ return ('#menu-item-191973')};
get SearchIcon() { return ('#et_top_search span')}
         get SearchInput () { return ('#morphsearch form[role=search] input[type="search"]')}
        // this.NewsButton = this.Header.$('#menu-item-191665');
        
       

        // this.NewsItems = element.all(by.css('#menu-item-191665 li.ubermenu-item span'));

}

module.exports = Header;