import { baseUrl, password, userName, randomMail, randomPassword} from "../support/constants";

describe('Login', () => {
    const login = require('../pageObjects/login')

    beforeEach(()=> {
      cy.clearCookies();
      cy.visit(baseUrl + 'ghost/');
      cy.wait(3000);
    });
  
    it('Login correcto', () => {
        login.inputNombreUsuario(cy,userName)
        login.inputPassword(cy,password)
        login.clickBoton(cy)
        login.checkValidLogin(cy, baseUrl)
    });

    it('Login con usuario vacío', () => {
      login.inputPassword(cy,password)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('Login con usuario inexistente', () => {
      login.inputNombreUsuario(cy,randomMail)
      login.inputPassword(cy,password)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('Login con password vacío', () => {
      login.inputNombreUsuario(cy,userName)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });

    it('Login con password equivocado', () => {
      login.inputNombreUsuario(cy,userName)
      login.inputPassword(cy,randomPassword)
      login.clickBoton(cy)
      login.checkInvalidLogin(cy, baseUrl)
    });






});
  