# PruebasDatosGenerados_E2E Grupo-21
Pruebas automaticas

# Integrantes:
José Alexander Palacio Muñoz - j.palaciom@uniandes.edu.co
Oscar Andrés Alba Barragán - o.alba@uniandes.edu.co
Diego Fernando Castro Plazas - df.castrop1@uniandes.edu.co
Diego Fernando Ramírez Rodríguez - df.ramirezr1@uniandes.edu.co

# Descripción
Las pruebas que se detallan a continuación permiten testear la aplicación Ghost (versión 4.47.0) a partir de la validación combinaciones de casos de uso.
Todos los escenarios de prueba detallados a continuación tienen en común que comparten la introducción de información a la aplicación en algunos de sus campos de texto y ser con la intención de validar que el formato de información que estos campos aceptan sea el que se espera en el desarrollo de la aplicación.

Los datos introducidos en los campos fueron generados de acuerdo con las siguientes estratégias de generación:
- pool de datos a-priori, 
- pool de datos (pseudo) aleatorio dinámico
- escenario aleatorio

La herramienta seleccionada para realizar las pruebas es Cypress

La para obtener y ejecutar la versión 4.47.0 de la aplicación Ghost se descargó una imagen de esta versión en Docker y se le asignó el puerto 3002 con el siguiente comando en la terminal de PowerShell:

  docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0  

Una vez ejecutado este comando podrá ingresar a la url http://localhost:3002 para ver la aplicación Ghost corriendo.

### Consideraciones antes y durante la ejecución de las pruebas
1. Es importante tener en cuenta que antes de inicilizar las pruebas en cypress, se debe crear el siguiente usuario administrador manualmente dentro de la aplicación de Ghost llendo al ling http://localhost:3002/ghost/ y poniendo la siguiente información como se muestra en la imagen 1.

Site title: 'A su elección'
Full name: 'A su elección'
Email address: hola@miso.com
Password: Misotest2022*

![image](https://user-images.githubusercontent.com/98669202/169715537-0d44cc44-82b7-4024-aac0-b45b89cc4c64.png)
Imagen 1.


2. Tambien importante tener en cuenta que la aplicación de Ghost permite un máximo de 100 ingresos como usuario administrador por dirección IP cada hora y como nuestras pruebas realizarán al rededor de 120 ingresos, cuando las pruebas fallen y generen la alerta que se muestra en la imagen 2, será necesario detener el contenedor de docker (imagen 3), borrar el contenedor (imagen 4), borrar el volumen (imagen 5) y volver a ejecutar el comando docker runn .. explicado en el punto anterior

![image](https://user-images.githubusercontent.com/98669202/169708276-19eb70a0-51ca-4aba-86e7-f49554cdf6bc.png)
Imagen 2.

![image](https://user-images.githubusercontent.com/98669202/169715616-7cb41657-dd3a-4fe7-a3ac-3f7f0aebb919.png)
Imagen 3.

![image](https://user-images.githubusercontent.com/98669202/169715639-02603c2e-248a-4044-8b41-164f9b55f0ad.png)
Imagen 4.

![image](https://user-images.githubusercontent.com/98669202/169715674-b6040943-4bb4-4c48-8fb2-c52fce1151ff.png)
Imagen 5.




# Escenarios

Los escenarios ejecutados, con su respectiva estrategia de generación de datos y su tipo de oráculo se detalla a continuación

|Escenario|Estrategia|Oráculo|Descripción (si es necesaria)|
|----|-------|--------|-----------|
| | | | |

