
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
                window.location.href = "error.html";
                break;
            }
        }
    }
    else{
        window.location.href = "error.html";
    }
}
function borrador() {
    var items = document.getElementsByClassName('item'); 
    for(i=0;i<=100; i++){
        items[i].innerHTML = "";   
        }       
}

