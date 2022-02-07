const homepage = require('../pageobjects/homepage');

describe('this is the describe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        // things to do before each function runs
    })

    afterEach(function() {
        // actions to be performed after each test
    })

    it('POM test', () => {
        // enter next steps
        let baseurl = 'https:.//www.google.com/';
        homepage.go_to_url(baseurl);
        homepage.enter_search('QA Underground Tutorial for beginners');
    })
})
