alert("Bienvenido a Hasbulla Store")

const Hasbullas = [
    { nombre: "Hasbulla Feliz", precio: 1000 },
    { nombre: "Hasbulla Enojado", precio: 2000 },
    { nombre: "Hasbulla Argentino", precio: 10000 },
]

let carro = []

let opcion = prompt("Desea adquirir un Hasbulla?") 

while(opcion != "si" && opcion != "no"){
    alert("porfavor ingrese si o no")
    opcion = prompt("Desea adquirir un Hasbulla?")
;
}

if(opcion == "si"){
    alert("a continuacion nuestro catalogo")
    let productos = Hasbullas.map((Hasbullas) => Hasbullas.nombre + " " + Hasbullas.precio + "$");
    alert(productos.join(", "))
} else if (opcion == "no"){
    alert("gracias por venir!!!")
}

while(opcion != "no"){
    let productos = prompt("Que Hasbullas deseas?")
    let precio = 0

    if(productos == "Hasbulla Feliz" || productos == "Hasbulla Enojado" || productos == "Hasbulla Argentino"){
        switch(productos){
            case "Hasbulla Feliz":
                precio = 1000
                break;
            case "Hasbulla Enojado":
                precio = 2000
                break;
            case "Hasbulla Argentino":
                precio = 10000
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantos quiere llevar?"))  
    
    carro.push({productos, unidades, precio})
    console.log(carro)
    } else {
        alert("No tenemos ese Hasbulla")
    }

    opcion = prompt("desea algun Hasbulla mas?")

    while(opcion === "no"){
        alert("Gracias por su compra!!!")
        carro.forEach((carroFinal) => {
            console.log(`productos: ${carroFinal.productos}, unidades: ${carroFinal.unidades}, precio: ${carroFinal.precio}, total a pagar: ${carroFinal.unidades * carroFinal.precio}`)
        })
    break;
    }
}

const total = carro.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el monto total por sus Hasbullas es de:  ${total}`)
alert(`el monto total por sus Hasbullas es de:  ${total}`)

alert("Gracias por confiar en nosotros!!")

