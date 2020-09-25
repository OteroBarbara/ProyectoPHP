# ProyectoPHP
# ProyectoPHP

Se desea implementar una aplicación web para gestionar los pedidos de los comensales por mesa de un restaurante.
Al acceder a index.php (debe estar en la raíz del sitio) se mostrará un inicio de sesión para usuarios registrados (pidiendo el nombre de usuario y la clave). Se debe validar del lado del cliente que ambos campos tengan por lo menos 6 caracteres y que el nombre de usuario tenga
solo caracteres alfanuméricos. Luego del envío de los datos, se debe validar contra los datos previamente almacenados en la base de datos, que exista un usuario con dicho nombre de usuario y si existiese se debe validar que la clave coincida con la ingresada. En caso de éxito el
sistema redirigirá a la página de inicio, indicando que el usuario está logueado. En caso de login inválido se debe informar con un mensaje de error tal situación.
Tenga en cuenta que los usuarios que usarán el sistema pueden ser mozos, cocineros,
bar-tenders o cajeros.

La página de inicio para el mozo contendrá un formulario para realizar un pedido (por simplicidad la comida y/o bebida se ingresan de a una por vez):
a) la comida o bebida
b) un área de texto para comentarios
c) el número de mesa para la que es el pedido

La página de inicio para los cocineros, visualiza un listado desde el más viejo al más nuevo de los pedidos de comida que no fueron entregados (paginados de a 5 registros por página). Cada uno de ellos tiene un botón que permite marcarlo como entregado y que lo saca del listado.

La página de inicio para los bar-tenders es similar a la de los cocineros, pero referido a los pedidos de bebidas.

Por último, los usuarios cajeros al acceder al sistema verán un listado de mesas las cuales serán a su vez enlaces para computar el cierre de la mesa. Al hacer clic en una mesa se deben mostrar:
todos los consumos de la mesa (nombre e imagen)
los mozos que participaron en la atención de la mesa
el total a pagar por parte de los comensales
un enlace para cerrar la mesa
En la página del cajero debe haber un enlace a una página con las mesas cerradas a modo de histórico. Deben estar paginadas de a 10 registros por página y cada una debe tener la fecha y hora de cierre, el monto total que pagaron y una descripción con todo lo que pidieron.


Metodología del curso:
PHP 2020 Segundo Semestre
Pág 2/2
El trabajo se debe realizar en grupos de DOS alumnos. La conformación de los grupos se
tiene que informar a la cátedra antes del 28/9.
Para aprobar el trabajo se deben aprobar dos entregas:
La primera entrega comprende el desarrollo de todo el proyecto de forma
estática, es decir, sin interactuar con la base de datos (solo con html, css y
javascript). Se deben representar todas las interfaces y los aspectos
navegacionales para resolver la problemática de todo el enunciado.
La segunda entrega comprende modificar lo realizado para la primera entrega,
para transformarlo en un sitio dinámico, utilizando PHP y base de datos.
Ambas entregas tendrán una única re-entrega (después si haber entregado el
trabajo completo) sólo para aquellos grupos que tengan todo el trabajo completo
y solo contengan algunos errores menores.
Los alumnos que aprueben el trabajo accederán a un coloquio para lograr la
aprobación de la materia.
Requisitos técnicos obligatorios:
1. El modelo de la base de datos será provisto por la cátedra y no debe ser modificado.
2. La validación de los datos ingresados por el cliente será tanto del lado del cliente
(JavaScript), como del lado del servidor (PHP).
3. Se deberá implementar una clase que se encargue de la autenticación y de la
autorización. En el proceso de autenticación, si el usuario y/o clave son incorrectos la
clase deberá arrojar una excepción.
4. La conexión a la base de datos debe estar definida en el archivo BD.php en la carpeta
raíz de la aplicación únicamente.
5. El trabajo debe realizarse con la versión 7 de PHP en adelante.