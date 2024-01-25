const { expect } = require('@wdio/globals')
const loginPage = require("../pageobjects/orangehrm.page")
const tabs = require("../pageobjects/tabs.page")
const data = require("../../data/data.json")
require("dotenv").config();

describe("OrangeHrm page testing", ()=> {
    it("Login with valid credentials", async() => {
        await loginPage.open();
        await loginPage.login(process.env.validUser,process.env.validPassword);
        await expect(loginPage.profileImg).toBeDisplayed();
        await loginPage.logout();
    })

    it("Login with invalid credentials", async ()=> {
        await loginPage.open();
        await loginPage.login(process.env.invalidUser,process.env.invalidPassword);
        await expect(loginPage.validationMsg).toHaveText(data.validationMessage);
        await browser.pause(process.env.medium_wait)
    })

    it("Validate the tabs",async () => {
        await loginPage.open();
        await loginPage.login(process.env.validUser,process.env.validPassword);
        await tabs.sideBar();
        await tabs.profileValidation();
        await loginPage.logout();
    })

})