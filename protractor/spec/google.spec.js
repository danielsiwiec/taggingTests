'use strict';

describe('angularjs homepage todo list', () => {
  it('should add a todo #todo', () => {
    browser.get('https://angularjs.org')

    element(by.model('todoList.todoText')).sendKeys('write first protractor test')
    element(by.css('[value="add"]')).click()

    let todoList = element.all(by.repeater('todo in todoList.todos'))
    expect(todoList.count()).toEqual(3)
    expect(todoList.get(2).getText()).toEqual('write first protractor test')

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click()
    let completedAmount = element.all(by.css('.done-true'))
    expect(completedAmount.count()).toEqual(2)
  })
})

describe('google for angularjs #google', () => {
  it('should return angularjs.org in results', () => {
    browser.ignoreSynchronization = true;
    browser.get('https://www.google.com/#q=angularjs')

    browser.wait(() => {return element(by.css('cite')).isPresent()}, 1000)

    let found = element.all(by.css('cite')).filter((element) => {
      return element.getText().then((text) => {
        return text === 'https://angularjs.org/'
      })
    }).count()

    expect(found).toEqual(1)
  })
})
