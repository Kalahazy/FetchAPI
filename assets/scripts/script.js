/* 
Retomando las APIs...

    - APIs internas (API DOM, LocalStorage, Drag&Drop): Son todas aquellas APIs que vienen por default en el navegador.
    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aquellas APIs que tenemos que utilizar de proveedores externos.

Ejemplo:
    - Cliente: Licuadora
    - API: Enchufe
    - Recurso solicitado: Electricidad

Ventajas de utilizar APIs:
    - Reestructurar y organizar los sistemas de forma que sean más sencillos de usar.
    - Permiten que los sistemas sean más robustos.
    - Reducen los costos de mantenimiento.
    - Permiten que los sistemas sean más escalables.

*/


/*
Sincronía

Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta).
*/

//Ejemplo de una operación síncrona
/*---------------------------------
console.log("Inicia mi operación síncrona");

function dosSincronica(){
    console.log("Dos");
}
function unoSincronica(){
    console.log("Uno");
    dosSincronica();
    console.log("Tres");
}

unoSincronica();
console.log("Termina mi operación síncrona");
---------------------------------*/
//Los casos donde me conviene tener operaciones sincronas, son: lectura de arrays, uso de métodos de arrays, condicionales, ciclos, ejecucion de funciones "normales".


/*
Asincronía

Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de código sin tener que esperar a que termine su ejecución, para ejecutar otras líneas de código. (En el ejemplo de la carne asada, dejar la carne en el asador mientras preparo otras cosas)
*/

/*---------------------------------
//Ejemplo de JavaScrip Asincrono
console.log("Inicia mi operación asincrona");

function dosAsync(){    //setTime para ejecutar esta funcion después de 3 segundos
    setTimeout(function(){
        console.log("Dos");
    }, 3000);
}
function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Termina mi operación asincrona");
---------------------------------*/


/*
Mecanismos para manejar la asincronía

Para controlar la asincronía en JS, podemos usar alguno de estos mecanismos:
    
    - callbacks
        Es la forma más clásica de manejar la asincronía. Se le conoce como "llamada de vuelta" y, basicamente, es pasar una función como parámetro de otra función, y se ejecutan una vez que se cumpla la condición esperada.
        - Método .map() de los arrays
    - promesas
        Son objetos que representan un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos, necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las promesas, es que no se anidan, en una sola función podemos manejar ambas situaciones.
        Las promesas tienen 3 estados posibles:
            - Pending: Es el estado inicial, cuando se crea la promesa. Aquí aún no hay resultados.
            - Fulfilled: Cuando la operación asíncrona se resuelve satisfactoriamente. (resolve)
            - Rejected: Cuando la operación asíncrona falla. (reject)
*/

//Función especial para consumir APIs y manejar promesas

//Instrucción de la conexión a mi servidor
/*
fetch ("https://fakestoreapi.com/products")
//dos escenarios posibles: obtengo respuesta o no obtengo respuesta
.then(datos => {
    console.log(datos);
    return datos.json(); //convertir la respuesta a un objeto JSON
})//then() se ejecuta cuando la promesa se cumple
.catch(error => {
    console.log("Error, no encontramos el producto");
    console.log(error);
})//catch() se ejecuta cuando la promesa no se cumple
*/

/*
Sintaxis del fecth (con promesas)

fecth("url a consumir")
    .then( response => response.text() )    //manejo la respuesta
    .then( datos => console.log(datos) )    //manejo el dato

    .catch( error => console.log(error) );  //manejo el error
*/

//Asigno el fetch a una variable
const conexion = fetch("https://fakestoreapi.com/products/1");
//Imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto promesa: ", conexion);
//Referencia a mi fetch para poder usar sus métodos
conexion
    .then(  //usar el método then para manejar la respuesta (lo relleno con la respuesta)
        function (resultado) {
            console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
            return resultado.json();    //.json() solo vive dentro de las promesas
        }
    )
    .then(  //uso el método then para manejar el producto (lo relleno con info del producto)
        function (producto) {
            console.log("Información del producto: ", producto);
        }
    )
    .catch( //uso el método catch para manejar el error (lo relleno con un error para que la caja no regrese vacía)
        function (error) {
            console.log("Error", error);
        }
    )


let respuestaServidor = "Felipe de Jesus Maqueda Gonzalez, 31, 2, 1"; //texto plano

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {
    "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 }
}

//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679
    }
}

//Revisar información de un objeto con texto plano
console.log(productoServidor.price);

//Revisar información de un objeto tipo JSON
console.log(productoJSON.price);

//


//Objeto JSON que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}
console.log(paciente);

//Necesito convertirlo a una cadena de texto para que el servidor lo lea
let pacienteStringify = JSON.stringify(paciente);
//Mandamos al servidor
console.log(pacienteStringify);

//Recibimos del servidor
let pacienteServidor = '{"nombre":"Felipe","edad":31,"estatus":"Registrado"}';
//Necesito convertirlo a un objeto JSON
let pacienteParseado = JSON.parse(pacienteServidor);
console.log(pacienteParseado);

//Si mando un JSON al servidor, tengo que convertirlo con "stringify"
//Si recibo un string del servidor, tengo que convertirlo con "parse"


//Método POST para enviar un nuevo producto a nuestra DB de la FakeStoreAPI
fetch('https://fakestoreapi.com/products', {    //endpoint
    method: "POST", //especificar el tipo de método
    body: JSON.stringify(   //instrucción para serializar el cuerpo de mi solicitud (para la interpretación del servidor)
        {
            title: 'Sopa Maruchan Habanero',
            price: 13.5,
            description: 'Deliciosa sopa maruchan de habanero',
            image: 'https://masbodegaonline.com.mx/media/catalog/product/i/m/image_7_7425.jpeg?optimize=low&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
            category: 'Sopas Instantaneas'
        }
    )
})
    .then(res => res.json())    //método para la respuesta (saber que mi producto llegó con bien al servidor)
    .then(json => console.log(json))    //impresión en consola para revisar la info


//Método PUT para actualizar un producto de nuestra DB de la FakeStoreAPI
fetch('https://fakestoreapi.com/products', { //endpoint
    method: "PUT", //especificar el tipo de metodo
    body: JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
        {
            id: 1,
            title: inputTitulo.value,
            price: inputPrecio.value,
            description: inputDescripcion.value,
            image: inputImagen.value,
            category: inputCategoria.value
        }
    )
})
    .then(res => res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
    .then(json => console.log(json))//impresion en consola para revisar la info