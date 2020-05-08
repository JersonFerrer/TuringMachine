
//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia 
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

let cuadro = document.getElementById ('cuadro');
var pasos = document.getElementById ('pasos');
var estado = document.getElementById ('estado');
let velocidad = 40;
let mTop = 0;
let mLeft =0;

function run() {

var word= document.getElementById("Word").value;

/*declaración de variables que operan en la máquina de turing y sus movimientos, n es el encargado de moverse
dentro del String*/
let n=1;
let estado=1;
right=0;
left=0;
sw=1;

//Variables de Movimiento
posicion=10;

//Ciclo que controla todo el movimiento y finaliza en el estado de aceptación//
  if(word != ""){
    word='z'+word+'z';
        while(estado!=3){
              //________Controla el estado Q1 y sus movimientos//
                    while( estado==1){
                        
                        if(word.charAt(n)=="a"){

                            
                            $("#cuadro"+posicion).fadeIn(function() {
                                $(this).html("<h1>A</h1>").fadeIn();
                              });
                            
                                word=word.replaceAt(n, "a");
                                
                                move_right(posicion);
                                right++;
                                posicion++;
                        }else if(word.charAt(n)=="b"){
                            
                            
                              $("#cuadro"+posicion).fadeIn(function() {
                                  $(this).html("<h1>A</h1>").fadeIn();
                                });
                           
                              word=word.replaceAt(n, "a");
                              
                              move_right();
                              
                              right++;
                              posicion++;
                                    
                        }else if(word.charAt(n)=="z"){                          
                                        
                              word=word.replaceAt(n, "a");
                              
                              move_left();
                                       
                                  estado=2;
                                  left++;
                                  n--;
                                            
                                  sw=0;
                                            
                       }                                
                      
                     /*Como hemos restado n, para no tener un movimento de 2 a la derecha
                      y uno a izquierda,   se establece un sw*/
                     if (sw==1){  n++;  }
                            
                    }
                   
                    sw=1;
                    posicion--;
                    //________________Controla el estado Q2 y sus movimientos__________*/
                    while(estado==2){

                       

                        if(word.charAt(n)=="a"){
                            $("#cuadro"+posicion).fadeIn(function() {
                                $(this).html("<h1>a</h1>").fadeIn();
                              });

                            word=word.replaceAt(n, "a");
                            left++;
                            posicion--
                            move_left();                            
                            
                        }else if(word.charAt(n)=="z"){

                           word=word.replaceAt(n,"a");
                           estado=3;
                           right++;
                           n++;
                           sw=0;
                           posicion--
                           move_right();
                        
                          
                                
                            
                        }
                        if(sw==1){
                        n--;
                        
                        }
                        }

                    }

    }else{
        window.location.href = "error.html";
    }
}
//velocidad de cambio
speed ="slow";

function move_left(){

    $( ".item" ).animate({ "left": "+=50px" },speed);

}

function move_right(){
   
    $( ".item" ).animate({ "left": "-=50px" },speed);
    
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }



