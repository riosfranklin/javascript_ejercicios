# Ejercicios de Javascript

## Módulos
[[Introduccion](#introduccion)]
[[General](#general)]
[[Ciclos](#ciclos)]
[[Condicionales](#condicionales)]
[[Funciones](#funciones)]
[[Objetos](#objetos)]
[[Eventos](#eventos)]
[[Jquery](#jquery)]
[[Proyectos](#proyectos)]

# Introduccion
* Este es un repositorio para practicar los principios básicos y avanzados de Javascript y Jquery.
* La mayoría de los ejemplos tienen código inline, por lo que el script esta contenido dentro de un mismo archivo html. Esto lo hice para facilitar la reutilizacion del ejemplo, pero la práctica más óptima es mantener los archivos html, js y css separados.
* No tengo un sistema de releases debido a que los ejemplos son aislados y no están atados a ningun roadmap.

# Vanilla Javascript
## General

<!-- * [Escriba un programa de JavaScript para mostrar el día y la hora actuales en el siguiente formato: "Hoy es : Lunes."](general/date.js) -->

<!-- * [Escriba una función de JavaScript para imprimir el contenido de la ventana actual.](general/printer.html) -->

<!-- * [Escribir un texto y devolverlo en consola.](general/prompt.js) -->

<!-- * [Uso del typeof.](general/typeof.js) -->

<!-- * [Dividir un numero de documento por puntos.](general/dni.js) -->

<!-- * [Convertir un texto a mayusculas o minusculas.](general/lower_upper.js) -->

<!-- * [Cortar un array por posicion segun sus elementos.](general/split.js). -->

<!-- * [Devolver la posicion de determinado string dentro de una cadena](general/indexof.js) -->

<!-- * [Obtener un string y validar su tipo; condicionar un valor y poner todo en mayúsculas](general/indexof_type_upper.js) -->

* [Funciones de document que afectan al DOM.](general/dom)
* [Transformar un objeto a json y viceversa.](general/json.js)
* [Como funciona el local storage.](general/storage.js)
* [Crear un objeto Person, convertirlo a json y almacenarlo en local storage.](general/storage_json.js)
* [Obtener un elemento del DOM sin usar getElementById](general/woGetElementById.html)
* [Destructuración](general/destructuracion.js)
* [Funcion de Flecha](general/funcion_flecha.js)
* [CallBack](general/callback.js)
* [Promise](general/promise.js)
* [Async](general/async.js)
* [Async - Await](general/async_await.js)
* [Implementacion de try catch](general/try_catch.js)
## Ciclos
* [Crear un ciclo que recorra los numeros del 1 al 10 y los imprima hasta el 5.](ciclos/while_break.js)
* [Recorrer los numeros del 1 al 5 pero saltear el 3.](ciclos/for_continue.js)
* [Recorrer los dias de la semana en un array desde domingo a lunes.](ciclos/for.js)
* [Solicitar una contraseña hasta que la misma sea correcta.](ciclos/do_while.js)
* [Solicitar un valor hasta que sea mayor a 5.](ciclos/do_while_number.js)
* [Solicitar 5 alumnos, agregarlos a un array y luego mostrarlos.](ciclos/for_array.js)
* [While vs Do While](ciclos/while_do_while.js)
## Condicionales
* [Comprobar si una variable tiene un valor y devolver un mensaje en consola.](condicionales/if.js)
* [Comprobar si una variable tiene una serie de valores distintos con if.](condicionales/elseif.js)
* [Comprobar si una variable tiene una serie de valores distintos con switch.](condicionales/switch.js)
* [Solicitar nombre y genero al usuario, luego validar la salida.](condicionales/gender.js)
## Funciones
* [Crear una funcion que salude pasando el nombre por parametro.](funciones/saludo.js)
* [Sumar un numero recursivamente mientras sea menor a 10.](funciones/recursividad.js)
* [Crear una funcion recursiva para calcular numeros primos.](funciones/primos.js)
## Objetos
* [Recorrer un array de autos y devolver sus atributos.](objetos/cars.js)
* [Crear un array del objeto Persona con persistencia en adicion.](objetos/persons.js)
* [Crear un objeto Persona con metodos y atributos a traves de una funcion constructora.](objetos/person.js)
## Eventos
* [Quita el foco de un campo input y el texto se convierte a mayusculas (onblur)](eventos/onblur.html)
* [Elige una opcion del select y aparece un popup con la opcion elegida (onchange)](eventos/onchange.html)
* [Aprieta un boton y devuelve un popup (onclick)](eventos/onclick.html)
* [Demostracion de eventos tipo key (onkeyup, onkeydown, onkeypress)](eventos/onkey_up_down_press.html)
* [Evento semantico (onclick)](eventos/evento_semantico.html)
* [Implementacion de Event Handler (onclick)](eventos/event_handler.html)

# Jquery
* [Borrar y mostrar un texto por un determinado tiempo](jquery/hide_show.html)
* [Borrar todos los elementos mediante un evento click](jquery/hide_all.html)
* [Escribir un texto que aparezca en un alert cuando se dispare evento click](jquery/input_alert.html)
* [Al pulsar un boton, mediante this se tiene que ocultar y mostrar por un tiempo determinado](jquery/this.html)
* [Al pulsar un boton, se oculta el ultimo y primer elemento de una lista](jquery/list_selector.html)
* [Uso de even y odd para seleccion par e impar](jquery/even_odd.html)
* [Uso de text y html](jquery/text_html.html)
* [Uso de attr en un input](jquery/attr.html)
* [Uso de attr en un input type text unicamente](jquery/attr_input_selector.html)
* [Agregar y remover una clase css a un parrafo](jquery/add_class.html)
* [Uso del Evento doble click](jquery/dblclick.html)
* [Uso del Eventos key](jquery/keydown.html)
* [Agregar y eliminar elementos a un nodo](jquery/append_remove.html)
* [Obtener el nodo padre](jquery/parent.html)
* [Uso de metodos de transicion FadeIn y FadeOut](jquery/fadein_out.html)
* [Uso de metodos de transicion SlideDown y SlideUp](jquery/slidedown_up.html)
* [Uso de metodo delay con hide](jquery/delay_hide.html)
* [Deteccion de scroll page en objeto window](jquery/scroll.html)
* [Efecto parallax](jquery/parallax)
* [Request de API por AJAX](jquery/ajax.html)
* [Request de Swapi](jquery/swapi.html)

# Proyectos
* [Algoritmo de eleccion aleatoria de alumnos.](proyectos/alumnos_random)
* [Quest Manager](proyectos/quest_manager)