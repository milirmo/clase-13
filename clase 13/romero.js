const a=[];
const b=[];
const aux=[];
let num1;
let num2;
const suma=[];
function Cargar() {
    if((document.getElementById("num1").value==="") || (document.getElementById("num2").value==="")){
        alert("ingrese numeros para los arreglos")
    }else{
    num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value) 
    a.push(num1)
    b.push(num2)
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
    document.getElementById("arregloa").textContent="arreglo a: "+a
    document.getElementById("arreglob").textContent="arreglo b: "+b 
    }
}
function Sumar (a,b) {
    for (i=0; i<a.length; i++) {
        suma[i]=(a[i]+b[i])
    }
    document.getElementById("rta1").textContent="arreglo a: "+a
    document.getElementById("rta2").textContent="arreglo b: "+b
    document.getElementById("suma").textContent="suma: "+suma
}
function Cambio () {
    for (let i=0; i<a.length; i++){
        aux[i]=a[i]
        a[i]=b[i]
        b[i]=aux[i]
    }
    document.getElementById("rta3").value="arreglo a intercambiado: "+a
    document.getElementById("rta4").value="arreglo b intercambiado: "+b
}
function Buscar() {
    let busq=parseInt(document.getElementById("busqueda").value)
       for (let i=0; i<suma.length; i++) {
        if(busq===suma[i]){
            cument.getElementById("busq").value="si esta el numero en la posicion"+i
        }
        else{
            cument.getElementById("busq").value="no esta el numero en esta posicon"
        } 
    }

}