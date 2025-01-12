describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //вход на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажали войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка что вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
     })
 })
 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
    cy.get('#loginButton').click(); //нажали войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //есть крестик
})
it('Валидация на наличие @', function () {
    cy.visit('https://login.qa.studio'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#mail').type('germandolnikov.ru'); //ввели верный логин без @
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');  //есть крестик
})
it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#forgotEmailButton').click(); //восстановить пароль

    cy.get('#mailForgot').type('german@dolnikov.ru');//ввели почту
    cy.get('#restoreEmailButton').click(); //отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#mail').type('german@dolnikovuu.ru'); //ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
})
it('Строчные буквы в логине', function () {
    cy.visit('https://login.qa.studio/'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели верный логин заглавные
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
})
it('Строчные буквы в логине 2', function () {
    cy.visit('https://login.qa.studio/'); //вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверка цвета кнопки забыли пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели верный логин заглавные
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); //нажали войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка что вижу текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
})