import { baseUrl, password, userName, randomMail, randomPassword} from "../support/constants";
let postName = 'Coming soon';
const data = require('../support/data.json')

describe('Post', () => {

    const login = require('../pageObjects/login');
    const paginaPrincipal = require('../pageObjects/pagePaginaPrincipal');
    const pagePost = require('../pageObjects/pagePost');

    beforeEach(()=> {
      cy.clearCookies();
      cy.visit(baseUrl + 'ghost/');
      cy.wait(2000);
    });
  
    it('Post titulo y descripcion correcta', () => {
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[0].titePost);
        pagePost.beginWriteYourPost(cy, data[0].descriptionParag);
        pagePost.clickPublish(cy);
        pagePost.clickPublishEnd(cy);
        pagePost.clickPublishFinish(cy);

    });
    /*
    it('Post titulo vacio', () => {
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[0].titePostBlank);
        pagePost.beginWriteYourPost(cy, beginWriteYourPost)

    });

    it('Post Datos definidos', () => {
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, titlePost);
        pagePost.beginWriteYourPost(cy, beginWriteYourPost)

    });

    it('Post titulo indefinido', () => {
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, data[5].titlePost);
        pagePost.beginWriteYourPost(cy, beginWriteYourPost)

    });

    it('Post descripticion indefinida', () => {
        login.inputNombreUsuario(cy,userName);
        login.inputPassword(cy,password);
        login.clickBoton(cy);
        paginaPrincipal.viewPosts(cy);
        paginaPrincipal.createdNewPost(cy,baseUrl);
        pagePost.postTitle(cy, titlePost);
        pagePost.beginWriteYourPost(cy, data[5].descriptionPost);
    });*/

});