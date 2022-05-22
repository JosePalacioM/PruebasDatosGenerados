import { baseUrl, password, userName } from "../support/constants";
import { randomShortTitle, videoUrl, randomParagraph, Url, randomLargeString, fakeUrl, imageUrl, twitterUrl, vimeoUrl, spotifyUrl, randomImage } from "../support/ramdomConstants";

describe('Pages', () => {
    const login = require('../pageObjects/login')
    const pageEditor = require('../pageObjects/pageEditor')

    beforeEach(()=> {
        cy.clearCookies();
        cy.visit(baseUrl + 'ghost/');
        cy.wait(3000);
        login.inputNombreUsuario(cy,userName)
        login.inputPassword(cy,password)
        login.clickBoton(cy)
        cy.visit(baseUrl + 'ghost/#/editor/page');
    });

    
    it('1. Login, Crear pagina con descripción con video embebido y bookmark embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)

        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,Url)
        cy.get("textarea[placeholder='Page title']").type('{enter}') 
        pageEditor.clickPlusAgain(cy)
        pageEditor.videoYouTube(cy, videoUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('2. Login, Crear pagina con descripcion con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
                
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.addButtonProduct(cy)
        pageEditor.urlButtonProduct(cy,Url)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });
    
    it('3. Login, Crear pagina con descripcion y con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.addButtonProduct(cy)
        pageEditor.textButtonProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('4. Login, Crear pagina con descripcion con producto con titulo muy , Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomLargeString)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });


    it('5. Login, Crear pagina con descripcion con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.ratingProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('6. Login, Crear pagina con descripcion con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.descProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });


    it('7. Login, Crear pagina con descripcion con producto y solo el título, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 

        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('8. Login, Crear pagina con descripcion y producto, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputTitle(cy, "Cocodrilo")
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
      });

    it('9. Login, Crear pagina con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.addButtonProduct(cy)
        pageEditor.textButtonProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('10. Login, Crear pagina con producto con titulo muy grande, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomLargeString)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('11. Login, Crear pagina con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.addButtonProduct(cy)
        pageEditor.urlButtonProduct(cy,Url)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });
    
    it('12. Login, Crear pagina con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.ratingProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('13. Login, Crear pagina con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.descProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });


    it('14. Login, Crear pagina con producto y solo el título, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.clickProduct(cy)
        pageEditor.titleProduct(cy,randomShortTitle)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('15. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        pageEditor.inputTitle(cy, "Cocodrilo")
        cy.get("textarea[placeholder='Page title']").type('{enter}')
        pageEditor.clickPlus(cy)
        pageEditor.vimeo(cy, vimeoUrl)
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('16. Login, Crear pagina con twitter embebido y descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        pageEditor.inputTitle(cy, "Cocodrilo")
        cy.get("textarea[placeholder='Page title']").type('{enter}')
        pageEditor.clickPlus(cy)
        pageEditor.twitter(cy, twitterUrl)
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('17. Login, Crear pagina con spotify embebido y descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        pageEditor.inputTitle(cy, "Cocodrilo")
        cy.get("textarea[placeholder='Page title']").type('{enter}')
        pageEditor.clickPlus(cy)
        pageEditor.spotify(cy, spotifyUrl)
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('18. Login, Crear pagina con funcion otra url embebida y descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => { 
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
             
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        pageEditor.inputTitle(cy, "Cocodrilo")
        cy.get("textarea[placeholder='Page title']").type('{enter}')
        pageEditor.clickPlus(cy)
        pageEditor.otherUrl(cy, videoUrl)
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
      });

    it('19. Login, Crear pagina con funcion otra url embebida, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.otherUrl(cy, videoUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
      });

    it('20. Login, Crear pagina con url en la descripcion, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputTitle(cy, "Cocodrilo")
        pageEditor.inputText(cy, randomImage)
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
      });

    it('21. Login, Crear pagina con spotify embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.spotify(cy, spotifyUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });


    it('22. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.vimeo(cy, vimeoUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('23.Login, Crear pagina con twitter embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.twitter(cy, twitterUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('24. Login, Crear pagina con descripcion y video Youtube, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputTitle(cy, "Cocodrilo")
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        cy.get("textarea[placeholder='Page title']").type('{enter}') 
        pageEditor.clickPlus(cy)
        pageEditor.videoYouTube(cy, videoUrl)

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
      });
    
    it('25. Login, Crear pagina con bookmark cuya url es de una imagen, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,imageUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('26. Login, Crear pagina con bookmark cuya url no existe, Modificar url de la página, Validar que falló el bookmark [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,fakeUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")
        
        pageEditor.checkBookmarkFail(cy)
    });

    it('27. Login, Crear pagina con bookmark que no es una url, Modificar url de la página, Validar que falló el bookmark [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,randomParagraph)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.checkBookmarkFail(cy)
    });

    it('28. Login, Crear pagina con titulo muy grande, Modificar url de la página, Validar que falló al salvarse [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.inputText(cy, "Esta es una descripcion de la nueva pagina")
        pageEditor.inputTitle(cy, randomLargeString)
        
        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkSavingFail(cy)
      });

    it('29. Login, Crear pagina con elemento Toggle, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.toggle(cy,randomParagraph)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('30. Login, Crear pagina con Callout, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.callOut(cy,randomParagraph)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('31. Login, Crear pagina con bookmark, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,Url)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('32. Login, Crear pagina con video embebido, Modificar url de la página, Validar que pagina se creó [aleatorio]', () => {
        pageEditor.clickSettings(cy)
        pageEditor.typePageUrl(cy,randomShortTitle)
        pageEditor.clickSettings(cy)
        
        pageEditor.clickPlus(cy)
        pageEditor.videoYouTube(cy, videoUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

    it('33. Crear pagina con video y bookmark, Validar que pagina se creó [a_priori]', () => {
        pageEditor.clickPlus(cy)
        pageEditor.bookMark(cy,Url)
        cy.get("textarea[placeholder='Page title']").type('{enter}') 
        pageEditor.clickPlusAgain(cy)
        pageEditor.videoYouTube(cy, videoUrl)
        pageEditor.inputTitle(cy, "Cocodrilo")

        pageEditor.clickPublish(cy)
        pageEditor.clickConfirmPublish(cy)
        pageEditor.checkConfirmation(cy)
    });

});