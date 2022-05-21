import { baseUrl, password, userName} from "../../support/constants";

describe('Login', () => {
    const login = require('../../pageObjects/login')

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
  });
  