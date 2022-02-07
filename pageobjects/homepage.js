const {Builder, By, Key, until} = require('selenium-webdriver');
let basePage = require('./basepage');
const webdriver = require('selenium-webdriver');

class HomePage extends basePage {
    enter_search(searchText){
        // will enter text into the search field
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
        // will send the enter key to the element
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }
}


module.exports = new HomePage();