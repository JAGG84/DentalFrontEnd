# DentalFrontEnd

Para clonar un repositorio de GitHub y crear una nueva rama para trabajar en ella, sigue estos pasos:

Abre tu terminal o línea de comandos.

Utiliza el siguiente comando para clonar el repositorio de GitHub a tu máquina local:

git clone <URL_del_repositorio>

Reemplaza <URL_del_repositorio> con la URL del repositorio que deseas clonar. Puedes encontrar esta URL en la página del repositorio en GitHub.

Cambia al directorio del repositorio clonado utilizando el comando cd:

cd <nombre_del_repositorio>
Reemplaza <nombre_del_repositorio> con el nombre del directorio que se creó después de clonar el repositorio.

Crea una nueva rama usando el comando git checkout -b seguido del nombre de la nueva rama:

git checkout -b nueva-rama

Reemplaza nueva-rama con el nombre que desees darle a tu nueva rama.

Ahora estás en tu nueva rama y puedes empezar a trabajar en ella. Realiza los cambios que necesites en tus archivos.

Una vez que hayas terminado tus cambios, utiliza los siguientes comandos para agregar tus archivos modificados, hacer un commit y subir tu nueva rama al repositorio remoto:

git add .
git commit -m "Mensaje del commit"
git push origin nueva-rama

Reemplaza "Mensaje del commit" con un mensaje descriptivo que explique los cambios que has realizado.

Ahora tu nueva rama con tus cambios está disponible en el repositorio remoto en GitHub. Puedes hacer un pull request para fusionar tus cambios en la rama principal del repositorio si lo deseas.
¡Y eso es todo! Has clonado un repositorio de GitHub, creado una nueva rama y empezado a trabajar en ella.

Para correr el programa debes correr los siguientes comandos:

npm intall

npm run dev
