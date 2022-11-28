
alert("Bienvenido")

//let Primernota = Number(prompt("ingrese su primer nota:"));
//let Segundanota = Number(prompt("ingrese su segunda nota:"));
//let Tercernota = Number(prompt("ingrese su tercer nota:"));
//let Notafinal = ((Primernota + Segundanota + Tercernota) / 3);

let Notas;
let Nnotas = Number(prompt("ingrese la cantidad de notas a promediar:"));
let suma = 0;

for(i=0; i < Nnotas; i++){
    let notas = Number(prompt("ingrese su nota " + i))
    suma = suma + notas;
}

let Notafinal = suma / Nnotas;




aprobado()
desaprobado()

function aprobado(){
    if (Notafinal >= 7){
        console.log("Su nota final es "+ Notafinal + ", Aprobado")
        alert("Su nota final es "+ Notafinal + ", Aprobado");
    }
}
    

function desaprobado(){
    if (Notafinal <= 6){
        console.log("Su nota final es "+ Notafinal + ", Desaprobado")
        alert("Su nota final es "+ Notafinal + ", Desaprobado")
    }
}


