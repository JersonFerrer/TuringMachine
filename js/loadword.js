
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La palabra cargada no es valida',
                    confirmButtonText: 'Aceptar',
                    //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
                  }).then((result) => {
                    if (result.value) {
                      window.location.href = "index.html";
                    }
                  });
                break;
            }
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No ingresó ninguna palabra',
            confirmButtonText: 'Aceptar',
            //footer: '<a href="../../vista/pagina/login.php">Why do I have this issue?</a>'
          }).then((result) => {
            if (result.value) {
              window.location.href = "index.html";
            }
          });
    }
}
function borrador() {
    var items = document.getElementsByClassName('item'); 
    for(i=0;i<=100; i++){
        items[i].innerHTML = "";   
    }
}

