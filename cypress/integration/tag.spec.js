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

    it('1. Create a valid tag' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('2. Create a tag without name must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.submit(cy)
        tagPage.checkSubmitInvalid(cy)
        tagPage.checkIfFormError(cy)
    });

    it('3. Create a tag without description must pass' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('4. Create a tag without color must pass' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('5. Enter invalid color must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagPage.tagColor(cy).type(faker.lorem.sentence())
        tagPage.submit(cy)
        tagPage.checkIfFormError(cy)
    });

    it('6. Enter invalid description must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.sentence())
        tagPage.tagDescription(cy).type(faker.lorem.words(100))
        tagPage.submit(cy)
        tagPage.checkIfFormError(cy)
    });

    it('7. Create a new tag with this order: 1. Name, 2. Color, 3. Description, 4. Slug' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('8. Create a new tag with this order: 1. Color, 2. Name, 3. Description, 4. Slug' , () => {
        tagPage.visitPage(cy)
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('9. Create a new tag with this order: 1. Name, 2. Description, 3. Color, 4. Slug' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('10. Create a new tag with this order: 1. Slug, 2. Color, 3. Name, 4. Description' , () => {
        tagPage.visitPage(cy)
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())        
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('11. Create a tag with this order: 1. Name, 2. Delete name, 3 Name' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagNameInput(cy).type(faker.commerce.department())     
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('12. Create a tag with this order: 1. Slug, 2. Delete slug, 3. Name' , () => {
        tagPage.visitPage(cy)
        tagPage.tagSlug(cy).type(faker.commerce.department()).focus().clear({force: true})
        tagPage.tagNameInput(cy).type(faker.commerce.department())     
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('13. Create a tag with passing long text' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.paragraph())     
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });


    it('14. Create a tag with passing long text to the name must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.lorem.paragraph())     
        tagPage.submit(cy)
        tagPage.checkIfFormError(cy)
        tagPage.checkSubmitInvalid(cy)
    });

    it('15. Create a tag with passing long text to the color' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())   
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
        tagPage.checkIfFormError(cy)
    });

    it('16. Create a tag with passing long text to the color must generate a form error' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.lorem.text())
        tagPage.checkIfFormError(cy)
    });

    it('17. Create a tag with passing long text to the color must generate a form error' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.lorem.text())
        tagPage.checkIfFormError(cy)
    });

    it('18. Create a tag only having the name must pass' , () => {
        tagPage.visitPage(cy)
        tagPage.tagNameInput(cy).type(faker.commerce.department())
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('19. Create a tag only having the description must fail' , () => {
        tagPage.visitPage(cy)
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.submit(cy)
        tagPage.checkIfFormError(cy)
    });

    it('20. Create a new tag with this order: 1. Slug, 2. Description, 3. Name' , () => {
        tagPage.visitPage(cy)
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.tagDescription(cy).type(faker.lorem.paragraph())
        tagPage.tagNameInput(cy).type(faker.commerce.department()) 
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });

    it('21. Create a new tag with this order: 1. Slug, 2. Color, 3. Name' , () => {
        tagPage.visitPage(cy)
        tagPage.tagSlug(cy).type(faker.commerce.department())
        tagPage.tagColor(cy).type(faker.internet.color().replace('#', ''))
        tagPage.tagNameInput(cy).type(faker.commerce.department()) 
        tagPage.submit(cy)
        tagPage.checkSubmitSuccess(cy)
    });
});