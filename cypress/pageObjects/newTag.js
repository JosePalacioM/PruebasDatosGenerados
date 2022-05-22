import { baseUrl } from "../support/constants"

const visitPage = function(cy) {
    cy.visit(baseUrl + 'ghost/#/tags/new')
}

const tagNameInput = function (cy) {
    return cy.get("input[name='name']")
}

const tagColor = function (cy) {
    return cy.get('input[placeholder="15171A"]')
}

const tagSlug = function (cy) {
    return cy.get('input[name="slug"]')
}

const tagDescription = function (cy) {
    return cy.get('textarea[name="description"]')
}

const submit = function (cy) {
    cy.get('span').contains('Save').click()
}

const checkSubmitSuccess = function (cy) {
    cy.get('span').contains('Saved').should('exist')
}

module.exports = {
    visitPage:visitPage,
    tagNameInput:tagNameInput,
    tagColor:tagColor,
    tagSlug:tagSlug,
    tagDescription:tagDescription,
    submit:submit,
    checkSubmitSuccess:checkSubmitSuccess
}