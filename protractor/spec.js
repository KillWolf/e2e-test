// spec.js
describe('Protractor Demo App', function() {
  



  var firstVar = element(by.model('sCtrl.goalitem'))
  var secondVar = element(by.model('sCtrl.goal'));
  var submitButton = element(by.id('clickAction'));
  var history = element.all(by.repeater('todo in sCtrl.todo'))

  function submit(a, b) {
    firstVar.sendKeys(a);
    secondVar.sendKeys(b);
    submitButton.click();
  }

    beforeEach(function() {
    browser.get('https://killwolf.github.io/e2e-test/');
  });

    it('should add to the list', function() {
      add('Be a better man', '2 days');
      add('Be a better bf', '1 month');

      expect(history.last().getText()).toContain('Be a better man', '2 days');
    });


  

});

/*
// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

    it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain(7); // This is wrong!
  });

}); */