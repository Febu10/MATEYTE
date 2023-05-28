function validarT(){
    validarEmail();
    validarnombre();
    validarApellido();
    validartelef();
    validarTexto();
}

function validarnombre(){
    let txt=document.getElementById('nombre');
    let err=document.getElementById('errorN');
    if (txt.value.length<1){
        txt.style.borderColor="red";
        err.textContent='Campo vacio.';
        event.preventDefault();
    }else{
        txt.style.borderColor="black";
        err.textContent='';
    }

}
function validarApellido(){
    let txt=document.getElementById('apellido');
    let err=document.getElementById('errorA');
    if (txt.value.length<1){
        txt.style.borderColor="red";
        err.textContent="Campo vacio.";
    }else{
        txt.style.borderColor="black";
        err.textContent='';
    }
}
function validarEmail(){
    let tx=document.getElementById('email');
    let err=document.getElementById('errorMail');
    if (tx.value.length<1 || !tx.value.includes('@') || !tx.value.includes('.com')){
        tx.style.borderColor="red";
        err.textContent='Email incorrecto';
        event.preventDefault();
    }else{
        tx.style.borderColor="black";
        err.textContent='';
    }
}
function validartelef(){
    let txtt=document.getElementById('telefono');
    let error=document.getElementById('errorTel');
    if (txtt.value.length<7 || txtt.value.length>10){
        txtt.style.borderColor="red";
        error.textContent='Numero incorrecto';
        event.preventDefault();
    }else{
        txtt.style.borderColor="black";
        error.textContent='';
    }
}
function validarTexto(){
    let texto=document.getElementById('textoconsulta');
    let error=document.getElementById('errorTexto');
    if (texto.value.length<10){
        texto.style.borderColor='red';
        error.textContent='Texto demasiado corto.';
    }else{
        texto.style.borderColor='black';
        error.textContent='';
    }
}


