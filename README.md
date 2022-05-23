# Pruebas Automáticas con Datos Generados_E2E Grupo-21
PruebasDatosGenerados_E2E Grupo-21

# Integrantes:
- José Alexander Palacio Muñoz - j.palaciom@uniandes.edu.co
- Oscar Andrés Alba Barragán - o.alba@uniandes.edu.co
- Diego Fernando Castro Plazas - df.castrop1@uniandes.edu.co
- Diego Fernando Ramírez Rodríguez - df.ramirezr1@uniandes.edu.co

# Descripción
Las pruebas que se detallan a continuación permiten testear la aplicación Ghost (versión 4.47.0) a partir de la validación combinaciones de casos de uso.
Todos los escenarios de prueba detallados a continuación tienen en común que comparten la introducción de información a la aplicación en algunos de sus campos de texto y ser con la intención de validar que el formato de información que estos campos aceptan sea el que se espera en el desarrollo de la aplicación.

Los datos introducidos en los campos fueron generados de acuerdo con las siguientes estratégias de generación:
- pool de datos a-priori, 
- pool de datos (pseudo) aleatorio dinámico
- escenario aleatorio

La herramienta seleccionada para realizar las pruebas es Cypress

La para obtener y ejecutar la versión 4.47.0 de la aplicación Ghost se descargó una imagen de esta versión en Docker y se le asignó el puerto 3002 con el siguiente comando en la terminal de PowerShell:

  <docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0>

Una vez ejecutado este comando podrá ingresar a la url http://localhost:3002 para ver la aplicación Ghost corriendo.

### Consideraciones antes y durante la ejecución de las pruebas
1. Es importante tener en cuenta que antes de inicilizar las pruebas en cypress, se debe crear el siguiente usuario administrador manualmente dentro de la aplicación de Ghost llendo al ling http://localhost:3002/ghost/ y poniendo la siguiente información como se muestra en la imagen 1.

Site title: 'A su elección'
Full name: 'A su elección'
Email address: hola@miso.com
Password: Misotest2022*

![image](https://user-images.githubusercontent.com/98669202/169715537-0d44cc44-82b7-4024-aac0-b45b89cc4c64.png)
  
Imagen 1.

2. Para la ejecución de algunas pruebas se utilizó la función xpath de cypress, la cual, para ser usada se debe instalar con el siguiente comando:
  npm install -D cypress-xpath
  Además la línea que dice require('cypress-xpath') en el archivo./cypress/support/index.js no debe estar comentada

3. Tambien importante tener en cuenta que la aplicación de Ghost permite un máximo de 100 ingresos como usuario administrador por dirección IP cada hora y como nuestras pruebas realizarán al rededor de 120 ingresos, cuando las pruebas fallen y generen la alerta que se muestra en la imagen 2, será necesario detener el contenedor de docker (imagen 3), borrar el contenedor (imagen 4), borrar el volumen (imagen 5) y volver a ejecutar el comando docker runn .. explicado en el punto anterior

![image](https://user-images.githubusercontent.com/98669202/169708276-19eb70a0-51ca-4aba-86e7-f49554cdf6bc.png)
  
Imagen 2.

![image](https://user-images.githubusercontent.com/98669202/169715616-7cb41657-dd3a-4fe7-a3ac-3f7f0aebb919.png)
Imagen 3.

![image](https://user-images.githubusercontent.com/98669202/169715639-02603c2e-248a-4044-8b41-164f9b55f0ad.png)
Imagen 4.

![image](https://user-images.githubusercontent.com/98669202/169715674-b6040943-4bb4-4c48-8fb2-c52fce1151ff.png)
Imagen 5.
  

# Estrategias de generación de datos
  
## 1. Estrategia pool de datos a-priori
Para la estrategia con datos a priori se utilizaron datos creados por los tester y ubicados en la carpeta ./cypress/support
  
## 2. Estrategia pool de datos (pseudo) aleatorio dinámico
Para la generación de datos pseudo aleatorios dinámico, se utilizó la herramienta Mockaroo estableciendo un template de data para el caso requerido, posteriormente se generó un archivo json con 1000 registros y este fue ubicado dentro del proyecto cypress. En cada caso de pruebas implementado, se importó el mencionado archivo haciedo uso aletario de los registros allí encontrados.
  
 ## 3. Estrategia escenario aleatorio.
 Para la generación aleatoria de datos, se utilizó la herramienta faker importando la librería en cada uno de los archivos que se utilizaron para generar los valores aleatorios. De acuerdo a las entradas del escenario de prueba a validar, se hacía uso de los métodos expuestos por la librería faker.
  
 
  

# Escenarios

Los 120 escenarios ejecutados, con su respectiva estrategia de generación de datos y su tipo de oráculo se detalla a continuación

|Archivo de pruebas|Escenario|Oráculo|Tipos de datos|
|---|---|---|---|
|./integration/loginPseudo.spec.js|1. Login con solo un usuario que tiene un email|login invalido|pseudo aleatorio|
|_|_|_|_|
|./integration/Login.spec.js|1. Login correcto|login valido|a_priori|
|./integration/Login.spec.js|2. Login con usuario vacío|login invalido|a_priori|
|./integration/Login.spec.js|3. Login con usuario inexistente|login invalido|aleatorio|
|./integration/Login.spec.js|4. Login con password vacío|login invalido|a_priori|
|./integration/Login.spec.js|5. Login con password equivocado,|login invalido|aleatorio|
|_|_|_|_|
|./integration/pages.spec.js|1. Login, Crear pagina con descripción con video embebido y bookmark embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|2. Login, Crear pagina con descripcion con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|3. Login, Crear pagina con descripcion y con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|4. Login, Crear pagina con descripcion con producto con titulo muy , Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|5. Login, Crear pagina con descripcion con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|6. Login, Crear pagina con descripcion con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|7. Login, Crear pagina con descripcion con producto y solo el título, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|8. Login, Crear pagina con descripcion y producto, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|9. Login, Crear pagina con producto con titulo y boton sin url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|10. Login, Crear pagina con producto con titulo muy grande, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|11. Login, Crear pagina con producto con titulo y boton con url, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|12. Login, Crear pagina con producto con titulo y rating, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|13. Login, Crear pagina con producto y solo descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|14. Login, Crear pagina con producto y solo el título, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|15. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|16. Login, Crear pagina con twitter embebido y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|17. Login, Crear pagina con spotify embebido y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|18. Login, Crear pagina con funcion otra url embebida y descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|19. Login, Crear pagina con funcion otra url embebida, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|20. Login, Crear pagina con url en la descripcion, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|21. Login, Crear pagina con spotify embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|22. Login, Crear pagina con vimeo embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|23.Login, Crear pagina con twitter embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|24. Login, Crear pagina con descripcion y video Youtube, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|25. Login, Crear pagina con bookmark cuya url es de una imagen, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|26. Login, Crear pagina con bookmark cuya url no existe, Modificar url de la página, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|27. Login, Crear pagina con bookmark que no es una url, Modificar url de la página, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|28. Login, Crear pagina con titulo muy grande, Modificar url de la página, Validar que falló al salvarse | Validar que falló al salvarse |aleatorio|
|./integration/pages.spec.js|29. Login, Crear pagina con elemento Toggle, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|30. Login, Crear pagina con Callout, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|31. Login, Crear pagina con bookmark, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|32. Login, Crear pagina con video embebido, Modificar url de la página, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|33. Crear pagina con video y bookmark, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|34. Crear pagina sencilla cambiando su url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|35. Crear pagina con descripcion con producto con titulo y boton con url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|36. Crear pagina con descripcion y con producto con titulo y boton sin url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|37. Crear pagina con descripcion con producto con titulo muy grande, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|38. Crear pagina con descripcion con producto con titulo y rating, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|39. Crear pagina con descripcion con producto y solo descripcion, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|40. Crear pagina con descripcion con producto y solo el título, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|41. Crear pagina con descripcion y producto, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|42. Crear pagina con producto con titulo y boton sin url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|43. Crear pagina con producto con titulo muy grande, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|44. Crear pagina con producto con titulo y boton con url, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|45. Crear pagina con producto con titulo y rating, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|46. Crear pagina sencilla, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|47. Crear pagina con producto y solo descripcion, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|48. Crear pagina con producto y solo el título, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|49. Crear pagina con vimeo embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|50. Crear pagina con twitter embebido y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|51. Crear pagina con spotify embebido y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|52. Crear pagina con funcion otra url embebida y descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|53. Crear pagina con funcion otra url embebida, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|54. Crear pagina con url en la descripcion, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|55. Crear pagina con spotify embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|56. Crear pagina con vimeo embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|57. Crear pagina con twitter embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|58. Crear pagina con descripcion y video Youtube, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|59. Crear pagina con bookmark cuya url es de una imagen, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|60. Crear pagina con bookmark cuya url no existe, Validar que falló el bookmark | Validar que falló el bookmark |a_priori|
|./integration/pages.spec.js|61. Crear pagina con bookmark que no es una url, Validar que falló el bookmark | Validar que falló el bookmark |aleatorio|
|./integration/pages.spec.js|62. Crear pagina con titulo muy grande, Validar que falló al salvarse | Validar que falló al salvarse |aleatorio|
|./integration/pages.spec.js|63. Crear pagina con elemento Toggle, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|64. Crear pagina con Callout, Validar que pagina se creó | Validar que pagina se creó |aleatorio|
|./integration/pages.spec.js|65. Crear pagina con bookmark, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|66. Crear pagina con video embebido, Validar que pagina se creó | Validar que pagina se creó |a_priori|
|./integration/pages.spec.js|67. Crear pagina sencilla con un excerpt muy largo en los settings| Validar que el excerpt no admitio el texto largo |aleatorio|
  
  
Las incidencias generadas en las pruebas se han reportado en el sistema de registro de incidencias de este repositorio.

# Instrucciones adicionales
Para ejecutar estas pruebas realize los siguientes pasos:

1. Clone el repositorio en la ubicación de su preferencia través del comando "git clone https://github.com/JosePalacioM/PruebasDatosGenerados.git".
2. Ingrese a la carpeta creada
3. Ingrese con una consola a la misma carpeta
4. Ejecute el comando "npm install cypress"
5. Ejecute el comando "npm install @faker-js/faker --save-dev"
6. Ejecute el comando "cypress open"
7. El comando anterior desplegará la consolta de Cypress y en su interior, cada uno de los casos de prueba generados.
8. Ejecute cada uno de los archivos de pruebas
