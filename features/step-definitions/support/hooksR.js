const { Before, After } = require('@wdio/cucumber-framework');



Before("@login", async () => {

    await browser.deleteCookies();
    await browser.maximizeWindow();
});
