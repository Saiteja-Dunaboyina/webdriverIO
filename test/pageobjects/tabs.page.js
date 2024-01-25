const { expect } = require('@wdio/globals')
const data = require("../../data/data.json")
class Tabs {

    async sideBar() {
        // await browser.$(`//a[text()='Logout']`)
        for(var value of data.sideBar) {
            console.log(value)
            await expect($(`//span[text()='${value}']`)).toBeDisplayed();
        }
    }

    async profileValidation() {
        await $("//img[@class='oxd-userdropdown-img']").click();
        for(var value of data.profileDropdown) {
            await expect($(`//a[text()='${value}']`)).toBeDisplayed();
        }
    }
}
module.exports = new Tabs();