import action from "../utils/action";

class amazonPage {

    languageBtn  = "[class='icp-nav-flag icp-nav-flag-in icp-nav-flag-discoverability-t1']";
    languageModal  = "#nav-flyout-icp";
    footer  = "[class='navFooterLine navFooterLinkLine navFooterDescLine']";

    open(){
        cy.visit('https://www.amazon.in/')
    }

}

export default new amazonPage();