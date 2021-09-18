

const { Given, When, Then } = require('@wdio/cucumber-framework');



Then("I enter {string} into {locator}", async (text, element) => {
  return await $(element).setValue(text);
});
Then("I see in {locator} {string}", async (locator,message) => {
  await expect($(locator)).toBeExisting();
  await expect($(locator)).toHaveTextContaining(message);
});




