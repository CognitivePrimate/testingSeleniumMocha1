const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)})

class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        driver.get(theURL)
    }
}


module.exports = BasePage;