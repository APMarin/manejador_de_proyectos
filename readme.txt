LIGA DE DOCKERHUB:
https://hub.docker.com/repository/docker/amarin9622/project_manager

Documentación de proyecto: Manejador de Proyectos.

El funcionamiento de la aplicación como está, es muy simple. Simplemente se han instalado las
dependencias. Las cuales son Express, pug, https-error, cookie-parser y morgan. 

Se creó la estructura del proyecto usando Express-Generator con pug como su motor de plantillas.
Se crearon todas las rutas acorde a las necesidades del documento y se agregaron dentro del archivo
"app.js" para su posterior ejecución por medio de npm.






Diagrama de Clases:

Dentro de los requisitos, se estipulaba que la empresa requiere llevar los expedientes de proyecto de
desarrollo con la documentación:
-Nombre del proyecto
-Fecha de solicitud
-Fecha de arranque
-descripción
-proyect manager
-product owner
-Equipo de desarrollo involucrado.

Por lo tanto, tendremos la clase *Project* posee las siguientes características:

-Una id, esta de tipo entero. Con esta identificamos qué proyecto es.
-Un nombre (name) este de tipo string.
-Una fecha de solicitud (applicationDate), de tipo Date.
-Una fecha de arranque (startDate), de tipo Date.
-Una descripción, (description), de tipo string.
-El product owner (productOwner), de tipo User.
-Una lista <list> del equipo (team) involucrado.
-Un Board (board) de tipo board.

Clase User que es compuesta ya que depende de Project, posee las siguientes características:

-Una id, esta de tipo entero. Con esta identificamos qué usuario es.
-Un nombre (name) este de tipo string.
-Un apellido paterno (middleSurName), este de tipo string.
-Un apellido materno (lastSurName), este de tipo string.
-Una fecha de nacimiento (birthday), esta de tipo Date.
-La curp (curp), esta de tipo string.
-El rfc (rfc), este de tipo string.
-Una dirección (address), esta de tipo string.
-Una lista de habilidades (skills), que el usuario posee.
-Una contraseñas (password), esta de tipo string. Con la cual el usuario accede a su cuenta.

Perteneciente a usuario (User) encontramos "Skill" o habilidad. Esta se desglosa en tres características:
-Una id, de tipo int. Con esta identificamos la habilidad (skill).
-Un nombre (name), de tipo string. El nombre de la habilidad per se.
-Un enum llamado rango. 

Enum Rango (Rank)
Dentro de esta enumeración se encuentran los tres tipos de niveles de una habilidad (skill), los cuales son:
>Junior
>Senior
>Master

Board, que es un agregado de Project. Posee las siguientes características:
-Una id, esta de tipo entero. Nos permite identificar cuál Board es.
-Una pila de producto (productBacklog), del tipo Backlog.
-Una lista <list> de Backlogs en release.
-Una lista <list> de Backlogs en sprint.

Backlog, que es un agregado de Board. Posee las siguientes características:
-Una id, esta de tipo entero para identificar el Backlog.
-Un nombre, de tipo string. Self explanatory.
-Una lista de historias (stories), estas son las historias de usuario.
-Una lista de tipo int, para los burndowns.

Story, agregado de Backlog. Posee las siguientes características:
-Una id, de tipo entero.
-Un nombre, de tipo string.
-Una prioridad (priority), de tipo Priority. Esta es la prioridad de la tarjeta.
-Un tamaño (size), de tipo entero.
-Una característica ( feature ), de tipo string.
-Una condición validada (validated), de tipo booleano.

Priority, que es una enumeración. Posee los siguientes campos de prioridad:
-Junior
-Senior
-Master
