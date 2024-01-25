const Page = require("./page");
require("dotenv").config();

class OrangeHrmLogin extends Page{

    locators = {

        usernameInput : "//input[@placeholder='Username']",
        passwordInput : "//input[@placeholder='Password']",
        loginButton : "//button[text()=' Login ']",
        profile : "//img[@class='oxd-userdropdown-img']",
        errorMsg : "//p[text()='Invalid credentials']",
        logoutButton : "//a[text()='Logout']"

    }

    get enterUsername() {
       return $(this.locators.usernameInput);
    }

    get enterPassword() {
       return $(this.locators.passwordInput);
    }

    get clickOnLoginButton() {
        return $(this.locators.loginButton);
    }

    get profileImg() {
        return $(this.locators.profile);
    }

    get validationMsg() {
        return $(this.locators.errorMsg);
    }

    get ClickOnLogout() {
        return $(this.locators.logoutButton);
    }

    async login(user,password) {
        await this.enterUsername.setValue(user);
        await this.enterPassword.setValue(password);
        await this.clickOnLoginButton.click();
        await browser.pause(process.env.large_wait);
    }

    async logout() {
        await this.profileImg.click();
        await this.ClickOnLogout.click();
    }

    open() {
        return super.open("login") 
    }

}
module.exports = new OrangeHrmLogin;