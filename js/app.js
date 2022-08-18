const formulario= document.getElementById ('formulario');
const textoEntrada= document.getElementById('textoEntrada');
const textoSalida= document.getElementById('textoSalida');
let botonEncriptar = document.getElementById('btnEncriptar')
let botonDesencriptar = document.getElementById('btnDesencriptar')
let botonCopiar = document.getElementById("btnCopiar")
const expresiones= /^[a-z ]*$/;


const validarTexto=(input)=>{//validar minusculas
      let textValue= input.target.value;
      console.log(textValue);
      if(expresiones.test(textValue[textValue.length-1])){
        document.getElementById ('etiqueta').classList.remove('textIncorrecto');
        document.getElementById ('etiqueta').classList.add('textCorrecto');
      }else {
        document.getElementById ('etiqueta').classList.remove('textCorrecto');
        document.getElementById ('etiqueta').classList.add('textIncorrecto');
      }    
  }

  //FUNCION ENCRIPTAR
  function encriptarTexto() {
    var text = document.getElementById("textoEntrada").value;
    text = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("textoSalida").value = text;
  }

  //FUNCION DESENCRITAR TEXTO
  function desEncriptarTexto() {
    let text = document.getElementById("textoEntrada").value;
    text = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
      document.getElementById('textoSalida').value = text;
  }
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
textoEntrada.addEventListener('keyup', validarTexto)//validamos cada tecla ingresada

 
  formulario.addEventListener('click',(e)=>{   

      botonEncriptar.onclick=()=>{
        if(textoEntrada.value == ""){
            alert("El campo debe contener un texto")
        }else{
          if (document.getElementById("textoEntrada").value.match(/^[a-z ]*$/)){         
             encriptarTexto();
             textoEntrada.value="";
          }
      
        } 
      } 
        
      botonCopiar.onclick= ()=>{
        if(textoSalida.value ==""){
            alert("El campo esta vacio")
        }else {
          textoEntrada.value=textoSalida.value;
          textoSalida.value = "";
        }
        
      }

      botonDesencriptar.onclick=()=>{
          if(textoEntrada.value ==""){
            alert("El campo esta vacio")
          }else {
            desEncriptarTexto();
            textoEntrada.value=" ";       
          }
         
      }
  } )     