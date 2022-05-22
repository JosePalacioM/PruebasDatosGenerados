const addFeatureImage = function(cy){
    cy.get('.gh-editor-feature-image-add-button').click({force: true});
    cy.wait(1000);
}

const postTitle = function (cy, postTitle){
    cy.get('.gh-editor-title').type(postTitle);
    cy.wait(1000);
}


const beginWriteYourPost = function (cy, beginWriteYourPost){
    cy.get('.koenig-editor__editor').type(beginWriteYourPost);
    //class="koenig-editor__editor __mobiledoc-editor __has-no-content"
    cy.wait(1000);
}

const clickPublish = function (cy) {
    cy.get('.gh-btn-editor').contains('Publish').click();
}

const clickPublishEnd = function (cy) {
    cy.get('.gh-publishmenu-button').contains('Publish').click();
}

const clickPublishFinish = function (cy) {
    cy.get(`[class="gh-btn gh-btn-black gh-btn-icon ember-view"]`).contains('Publish').click();
}


//class="gh-btn gh-btn-black gh-btn-icon ember-view"

module.exports = {
    addFeatureImage:addFeatureImage,
    postTitle:postTitle,
    beginWriteYourPost:beginWriteYourPost,
    clickPublish:clickPublish,
    clickPublishEnd:clickPublishEnd,
    clickPublishFinish:clickPublishFinish
}