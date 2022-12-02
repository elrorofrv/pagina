//repuestas correctas
let correctas = [1,2,1,2,1,1,3,1,2,4];

//guardado de respuestas del usuario
let opcion_elegida= [];

let cantidad_correctas= 0;

//funcion
function respuesta(num_pregunta,seleccionada){
    //repuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
    
    //id
    id="p" + num_pregunta
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white" 
    labels[5].style.backgroundColor = "white" 
    labels[7].style.backgroundColor = "white" 
    labels[9].style.backgroundColor = "white"

    //color
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion2
function completar(){
    
    cantidad_correctas = 0;
    console.log(opcion_elegida)
    for(i=0; i < correctas.length;i++){
        
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}





