
//Los String en Js son Inmutables, por esa razón se hace este subcódigo para reemplazarlos por una copia 
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let cuadro = document.getElementById('cuadro');
var palabra = document.getElementById("Word").value;

ind_estado = 0;

                       

function move_left(cont) {

  $(".item").animate({ "left": "+=50px" }, parseInt(slider.noUiSlider.get(), 10));

  $("#estado").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#estado").fadeIn(function () {
    $(this).html("Estado: q_2 ").fadeIn();
  });

  $("#pasos").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#pasos").fadeIn(function () {
    $(this).html("Pasos: " + (cont + 1)).fadeIn();
  });
}


function move_right(cont) {

  $(".item").animate({ "left": "-=50px" }, parseInt(slider.noUiSlider.get(), 10));

  if (ind_estado == 3) {
    $("#estado").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
    $("#estado").fadeIn(function () {
      $(this).html("Estado: q_3 ").fadeIn();
    });
  } else {
    $("#estado").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
    $("#estado").fadeIn(function () {
      $(this).html("Estado: q_1 ").fadeIn();
    });
  }

  $("#pasos").animate({ "left": "+=0px" }, parseInt(slider.noUiSlider.get(), 10));
  $("#pasos").fadeIn(function () {
    $(this).html("Pasos: " + (cont + 1)).fadeIn();
  });

}

function paint(estado,a,b){

  if(estado == 1 || estado == 3){

       $(a).fadeIn(function () {
         $(this).css("backgroundColor", "#951197 ");
       });
       $(b).fadeIn(function () {
         $(this).css("backgroundColor", "#333 ");
       });
  }else if(estado== 2){
    $(a).fadeIn(function () {
      $(this).css("backgroundColor", "#951197");
    });
    $(b).fadeIn(function () {
      $(this).css("backgroundColor", "#333 ");
    });
  }
}


function run() {
  let intervalo;
  var word = document.getElementById("Word").value;
  document.getElementById("btnp").disabled = false;
  document.getElementById("btns").disabled = false;

  /*declaración de variables que operan en la máquina de turing y sus movimientos, n es el encargado de moverse
  dentro del String*/
  let n = 1;
  let estado = 1;
  right = 0;
  left = 0;
  sw = 1;

  //Variables de Movimiento
  posicion = 12;
  cont = 0;
//Condicion que controla todo el ciclo de el movimiento y finaliza en el estado de aceptación//
  if (word != "") {
    word = 'z' + word + 'z';
    while (estado != 3) {
      //________Controla el estado Q1 y sus movimientos//
      while (estado == 1) {

        ind_estado = 1;

        if (word.charAt(n) == "a") {

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          word = word.replaceAt(n, "a");

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);

          move_right(cont);

          cont++;
          right++;
          posicion++;

        } else if (word.charAt(n) == "b") {


          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);

          word = word.replaceAt(n, "a");

          move_right(cont);

          cont++;
          right++;
          posicion++;

        } else if (word.charAt(n) == "z") {

          word = word.replaceAt(n, "a");

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1></h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion-1);
          id2 ="#cuadro"+(posicion);
          paint(ind_estado,id1,id2);


          move_left(cont);

          estado = 2;
          left++;
          n--;

          sw = 0;
          cont++;

        }

        /*Como hemos restado n, para no tener un movimento de 2 a la derecha
         y uno a izquierda,   se establece un sw*/
        if (sw == 1) { n++; }

      }

      id1 ="#cuadro"+(posicion);
      $(id1).fadeIn(function () {
        $(this).css("backgroundColor", "#333 ");
      });

      sw = 1;
      posicion--;
      //________________Controla el estado Q2 y sus movimientos__________*/
      while (estado == 2) {

        if (word.charAt(n) == "a") {

          ind_estado = 2;

          word = word.replaceAt(n, "a");

          $("#cuadro" + posicion).fadeIn(function () {
            $(this).html("<h1>a</h1>").fadeIn();
          });

          id1 ="#cuadro"+(posicion-1);
          id2 ="#cuadro"+posicion;
          paint(ind_estado,id1,id2);

          left++;
          posicion--;
          move_left(cont);
          cont++;

        } else if (word.charAt(n) == "z") {

          ind_estado = 3;

          word = word.replaceAt(n, "a");

          id1 ="#cuadro"+(posicion+1);
          id2 ="#cuadro"+posicion;
          paint(ind_estado,id1,id2);

          estado = 3;
          right++;
          n++;
          sw = 0;
          posicion--
          move_right(cont);

          cont++;

        }
        if (sw == 1) {
          n--;

        }
      }

    }

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No puede jugar sin ninguna palabra cargada',
      confirmButtonText: 'Aceptar',
      //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
    }).then((result) => {
      if (result.value) {
        Swal.close("salir");        
      }
    });
  }
}
function pausar() {
  window.alert("Se ha pausado la ejecución, pulse ok para continuar");

}