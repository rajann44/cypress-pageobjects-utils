import action from "../utils/action";

class loginPage {

    username = "#username";
    password = "#password";
    loginBtn = "[type='submit']";

    open(){
        cy.visit('/login')
    }

    login(username, password){
        action.sendKeys(this.username, username);
        action.sendKeys(this.password, password);
        action.clickElement(this.loginBtn);
    }

}

export default new loginPage();