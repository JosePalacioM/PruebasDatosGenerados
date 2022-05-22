import { baseUrl, password, userName, randomMail, randomPassword} from "../support/constants";

describe('Tag tests', () => {
    const tagPage = require('../pageObjects/newTag');
    const login = require('../pageObjects/login');

    beforeEach(()=> {
        cy.clearCookies();
        cy.visit(baseUrl + 'ghost/');
        cy.wait(3000);
        login.inputNombreUsuario(cy,userName)
        login.inputPassword(cy,password)
        login.clickBoton(cy)
        login.checkValidLogin(cy, baseUrl)
    });

    it('Create a valid tag' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type('TAG')
        tagPage.tagColor(cy).type('997a7a')
        tagPage.tagSlug(cy).type('hola')
        tagPage.tagDescription(cy).type('This is a description')
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    })
});