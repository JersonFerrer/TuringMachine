
function loadword(){
    
    var word = document.getElementById('Word').value;

    $("#estado").fadeIn(function() {
        $(this).html("Estado: Ninguno ").fadeIn();
      });

    borrador();

    borrador();
    
    if(word != ""){
        var items = document.getElementsByClassName('item');
        cont = 9;
        for(i=0; i<word.length; i++){
            if(word.charAt(i)=="a" || word.charAt(i)=="b"){
                $(items[cont+1]).html("<h1>"+word[i]+"</h1>");
                cont++;
            }else{
                borrador();
<<<<<<< HEAD
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La palabra cargada no es valida',
                    confirmButtonText: 'Aceptar',
                    //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
                  }).then((result) => {
                    if (result.value) {
                      clearFileInput(document.getElementById("Word"));
                      document.getElementById("Word").focus();
                      Swal.close("salir");
                      }
                  });
=======
               // window.location.href = "error.html";
               Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'datos ingresados incorrectamente',
                confirmButtonText: 'Aceptar',
                //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
              }).then((result) => {
  if (result.value) {
    window.location.href="index.html";
  }
})
>>>>>>> 67649d255cb054ada6f2b14ea2a6b325177720a6
                break;
            }
        }
    }
    else{
<<<<<<< HEAD
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ingresó ninguna palabra',
            confirmButtonText: 'Aceptar',
            //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
          }).then((result) => {
            if (result.value) {
                document.getElementById("Word").focus();
              Swal.close("salir");
            }
          });
=======
       // window.location.href = "error.html";
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta vacio! vuelva e ingrese de nuevo la palabra',
        confirmButtonText: 'Aceptar',
        //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
      }).then((result) => {
if (result.value) {
window.location.href="index.html";
}
})
>>>>>>> 67649d255cb054ada6f2b14ea2a6b325177720a6
    }
}
function borrador() {
    var items = document.getElementsByClassName('item'); 
    for(i=0;i<=100; i++){
        items[i].innerHTML = "";
    }
}
function refresk(){
  Swal
  .fire({
      title: "Quiere detener la ejecución",
      text: "¿Detener?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí,detener",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          location.reload();
          
      } else {
          // Dijeron que no
          console.log("NO se elimina la venta");
      }
  });
  

}
function clearFileInput(ctrl) {
  try {
    ctrl.value = null;
  } catch(ex) { }
  if (ctrl.value) {
    ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
  }
}
