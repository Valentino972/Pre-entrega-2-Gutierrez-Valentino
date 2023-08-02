const OPCION_SALIR = 4;
let totalDeProducto = 1000;
const productosCargados = [
        {
        id:1,
        nombre:"Bolsa camiseta negra",
        precio:1000,
        categoria:"Bolsas"   
        },
        {
        id:2,
        nombre:"Bolsa camiseta personalizada",
        precio:2000,
        categoria:"Bolsas Personalizadas"
        },
        {
        id:3,
        nombre:"Bolsa riñon",
        precio:3000,
        categoria:"Bolsas",
        },
        {
        id:4,
        nombre:"Film negro",
        precio:5000,
        categoria:"Film"
        },
]
const carrito = []; 
const historial = [];

const verBolsas = () => {
        let mensaje = 'Lista de producto: \n';
        productosCargados.forEach(el =>{
                if(el.categoria === "Bolsas"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}

const verBolsasPersonalizadas = () => {
        let mensaje = 'Lista de producto: \n';
        productosCargados.forEach(el =>{
                if(el.categoria === "Bolsas Personalizadas"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}

const verFilm = () => {
        let mensaje = 'Lista de producto: \n';
        productosCargados.forEach(el =>{
                if(el.categoria === "Film"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Agregado al carrito correctamente")
}


const verProductos = () => {
        let opcion ;
        opcion = parseInt(prompt("\n 1-Bolsas \n 2-Bolsas Personalizada \n 3-Film \n 4-Salir"));
        while(opcion != OPCION_SALIR){
        switch(opcion){
                case 1: 
                verBolsas();
                break;
                case 2: 
                verBolsasPersonalizadas();
                break;
                case 3: verFilm();
                break;
        default:
                alert("Ingreso una opcion invalida.");
        break;
        }
        opcion = parseInt(prompt("\n 1-Bolsas \n 2-Bolsas Personalizada \n 3-Film \n 4-Salir"));
}
}

const verCarrito = () => {
        let mensaje = 'Carrito: \n';
        const numeroCompra = Math.round(Math.random() * 10000000 + 100000)

        carrito.forEach(el =>{               
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                
        })
        const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
        mensaje += `TOTAL                    $${total}`;
        mensaje += "Desea realizar la compra ? (si/no)";
        const respuesta = prompt(mensaje);
        if(respuesta.toLowerCase() == "si"){ 
                historial.push({
                        numero: numeroCompra,
                        nombre: prompt("ingrese nombre"),
                        direccion: prompt("ingresa direccion")
                })
                alert("Felicitaciones tu compra fue realizada con exito \n N° " + numeroCompra + "\n guarda el numero para recibir el producto")
                carrito.splice(); 
        }
}



let opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Carrito \n 3-Calcular total \n 4-Salir "))

while(opcion != OPCION_SALIR ){

        switch(opcion){
        case 1: 
                verProductos();
                break;
        case 2: 
                verCarrito();
                break;
        case 3: 
                verCompras();
                break;
        default:
        alert("Ingreso una opcion invalida.");
        break;
        }

        opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Carrito \n 3-Calcular total \n 4-Salir "));
}

alert("Gracias vuelva pronto.");




