
function loadword(){
    
    var word = document.getElementById('Word').value;

    borrador();
    
    if(word != ""){
        var items = document.getElementsByClassName('item');
        cont = 9 ;
        for(i=0; i<word.length; i++){
            if(word.charAt(i)=="a" || word.charAt(i)=="b"){
                items[cont+1].innerHTML = word[i];
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

