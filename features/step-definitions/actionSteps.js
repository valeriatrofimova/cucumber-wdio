

const { Given, When, Then } = require('@wdio/cucumber-framework');



Given('User navigates to {landing-url}', function (url) {
    const currentUrl = browser.getUrl();
    // maybe we are already there?
    if (currentUrl !== url) {
      return browser.url(url);
    }
  });
  
When(`I click {locator} element`, { wrapperOptions: { retry: 2 } }, async (element) => {
    await $(element).click();
});

When('I sleep {int} second(s)', async (number) => {
    let seconds = parseFloat(number);
    return await browser.pause(Math.floor(seconds * 1000));
});


Then(`I enter {string} text into {locator} element`, async (givenText, element) => {
    return await $(element).setValue(givenText);
});



