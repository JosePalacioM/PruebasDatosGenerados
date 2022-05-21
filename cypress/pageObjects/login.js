const inputNombreUsuario = function (cy,userName){
  cy.get("input[name='identification']").type(userName);
  cy.wait(2000)
  cy.wait(2000)
};

const inputPassword = function (cy,password){
  cy.get("input[name='password']").type(password);
  cy.wait(2000)
};

const clickBoton = function (cy){
  cy.get('button[type="submit"]').click();
  cy.wait(2000)
};

const checkValidLogin = function (cy, baseUrl){
  cy.url().should('eq', baseUrl + 'ghost/#/dashboard')
};

module.exports ={
  inputNombreUsuario:inputNombreUsuario,
  inputPassword:inputPassword,
  clickBoton:clickBoton,
  checkValidLogin:checkValidLogin
}
