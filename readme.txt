LIGA DE DOCKERHUB:
https://hub.docker.com/repository/docker/amarin9622/project_manager

Documentación de proyecto: Manejador de Proyectos.

El funcionamiento de la aplicación como está, es muy simple. Simplemente se han instalado las
dependencias. Las cuales son Express, pug, https-error, cookie-parser y morgan. 

Se creó la estructura del proyecto usando Express-Generator con pug como su motor de plantillas.
Se crearon todas las rutas acorde a las necesidades del documento y se agregaron dentro del archivo
"app.js" para su posterior ejecución por medio de npm.






Diagrama de Clases:

Dentro de los requisitos, se estipula que la empresa requiere llevar los expedientes de proyecto de
desarrollo con la documentación:
-Nombre del proyecto
-Fecha de solicitud
-Fecha de arranque
-descripción
-proyect manager
-product owner
-Equipo de desarrollo involucrado.

Por lo tanto, tendremos la clase *Project* posee las siguientes características:

-Nombre del proyecto.
-Una fecha de solicitud (applicationDate), de tipo Date.
-Una fecha de arranque (startDate), de tipo Date.
-Una descripción, (description), de tipo string.
-Product Manager de tipo user.
-El product owner (productOwner), de tipo User.
-Una lista de tipo User del equipo involucrado.
-Un tablero de tipo Board.

Clase User que es compuesta ya que depende de Project, posee las siguientes características:

-Un nombre este de tipo string.
-Un apellido este de tipo string.
-Una fecha de nacimiento (birthday), esta de tipo Date.
-La curp (curp), esta de tipo string.
-El rfc (rfc), este de tipo string.
-Una dirección (address), esta de tipo Address.
-Una lista de habilidades (skills), que el usuario posee de tipo Skills.
-Una contraseñas (password), esta de tipo string. Con la cual el usuario accede a su cuenta.

Perteneciente a usuario (User) encontramos "Skill" o habilidad. Esta se desglosa en tres características:
-Technoolgy nombre de la tecnología de la habilidad
-Un enum llamado rango.

Enum Rango (Rank)
Dentro de esta enumeración se encuentran los tres tipos de niveles de una habilidad (skill), los cuales son:
>Junior
>Senior
>Master

Board, que estará dentro de los proyectos.Posee las siguientes características:
-Un ProductBacklog que es una lista de ReleaseBacklog
-Una StartDate de tipo date
-Una EndDate de tipo date

ReleaseBacklog, que estará como lista en el Board. Posee las siguientes características:
-Una lista de Backlogs llamada SprintBacklogs
-Starddate de tipo Date
-EndDate de tipo Date

Backlog, que estará como lista de los ReleaseBacklogs
- Stories una lista de las historias
- StartDate de tipo Date
- EndDate de tipo Date

Story, agregado de Backlog. Posee las siguientes características:
-Un nombre, de tipo string.
-Una prioridad (priority), de tipo entero. Esta es la prioridad de la tarjeta.
-Un tamaño (size), de tipo entero. Duración de la historia aprox.
-Detalles de tipo detalles para definir las características de la historia.
-Status de tipo bool para definir el estado de la historia
-Validated de tipo bool para definir si la historia es válida

De igual manera se incluye el diagrama de flujo que define la secuencia a llevar por el usuario al crear un nuevo proyecto y añadir una historia al mismo
Como se aprecia en dicho diagrama el usuario creador tendrá que hacer uso de 4 funciones del sistema para crear un proyecto
