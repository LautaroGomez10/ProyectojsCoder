

let Hasbullas = [
    {
        id: 1, 
        nombre: "Hasbulla Feliz", 
        precio: 1000, 
    },
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let comprar = document.querySelector("#agregar");

Hasbullas.find((Hasbullas)=>{
    comprar.addEventListener("click", () =>{
        carrito.push({
            id: Hasbullas.id,
            nombre: Hasbullas.nombre,
            precio: Hasbullas.precio,
        })
        console.log(carrito);
        saveLocal();
    })
})

let carro = document.querySelector("#carro");

carro.addEventListener("click", () =>{
    const total = carrito.reduce((acc, Hasbullas) => acc + Hasbullas.precio, 0);
    console.log(`el monto total por sus Hasbullas es de:  ${total}$`)
})

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};