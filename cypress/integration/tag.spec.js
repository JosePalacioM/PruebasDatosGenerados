import { baseUrl, password, userName} from "../support/constants";
import {faker} from '@faker-js/faker'

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
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('Create a tag without name must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.submit(cy)
        tagPage.checkSubmitInvalid(cy)
        tagPage.checkIfFormError(cy)
    });
});