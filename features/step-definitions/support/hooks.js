'use strict';

const { Before, After } = require('@wdio/cucumber-framework');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;


Before("@smoke", async () => {
    await browser.deleteCookies();
    await browser.maximizeWindow();
});


After(async (scenario) => {
    // if(scenario.result.status === 'FAILED'){
   
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    // }
    console.log('Scenario ' + scenario.pickle.name + ' ' + scenario.result.status)
    await browser.deleteCookies()
    await browser.refresh()
    await browser.pause(2000)
});