//01 FUINCIONES
/*function hello() {
    console.log('hola js');
    console.log('hola html');
    console.log('hola css');
}

hello();
hello();*/

//02 RETORNO DE UNA FUNCION
/*function hello() {
    return 20;
}

//const resultado = hello(); 

console.log(hello());*/

//03 

/*function hello() {
    return {};
}

console.log(hello());*/


//04 RETORNA OBJETOS

/*function hello() {
    return {
        nombre: "PEPE el de loh huevo repe"
    };
}

console.log(hello());*/


//05 RETORNO DE OTRA FUNCION
/*function hello() {
    return function () {
        return "ey";
    }
}

console.log(hello()());*/

//06 === USO DE PARAMETROS EN FUNCIONES ===
/*function ey(name) {
    return "hello, are you? " + name
}

console.log("norman");
console.log("oslok");
console.log(ey("Lalo"));*/

//06 PASAR MÁS DE UN PARAMETRO A LA FUNCION
/*function oioioi(x, y) {
    return ((x + y)/x) + x*y
}

console.log(oioioi(14.5, 45.5));*/

//08 CONTROL DE ERRORES EN PARAMETROS
/*function oioioi(x, y=0) {
    return x + y
}

console.log(oioioi(14.5));*/


// === OBJETOS ===
const user = {
    nombre: "EDUARDO TADEO",
    apllidoM: "VILLANUEVA",
    apellidoP: "PÉREZ",
    edoCivil: "Muerte solitria. Asegurada",
    edad: 16,
    domicilio: {
        ciudad: "GUATEPEOR",
        calle: "AGUASCALIENTES",
        numero: 12278
    },
    amigos: ["Agustin51", "PEPE el de loh pelos repe"],
    activo: true,
    mensaje: function() {
        return "Donde estas?"
    }
}

//alert ciudad, calle, numero
//consola amigos
//alert activo o pasivo
//consola nombre, apepaterno, apematerno, edocivil
//alert mensaje

alert(user.domicilio.ciudad + ", " + user.domicilio.calle + ", " + user.domicilio.numero);
console.log(user.amigos);
alert(user.activo);
console.log(user.nombre + ", " + user.apellidoP + ", " + user.apllidoM + ", " + user.edoCivil);
alert(user.mensaje());
