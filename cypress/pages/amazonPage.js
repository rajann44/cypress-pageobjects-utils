import action from "../utils/Action";

class AmazonPage {

    languageBtn  = "[class='icp-nav-flag icp-nav-flag-in icp-nav-flag-discoverability-t1']";
    languageModal  = "#nav-flyout-icp";
    footer  = "[class='navFooterLine navFooterLinkLine navFooterDescLine']";

    open(){
        action.navigateTo('https://www.amazon.in/')
    }

}

export default new AmazonPage();