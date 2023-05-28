 const obtenerTituloYtexto=async(ids)=>{
    try{
            const respuesta=await fetch(`https://jsonplaceholder.typicode.com/posts/${ids}`);
            const dato=await respuesta.json();
            let pizita=document.getElementById('tipodePizza');
            let arti=document.getElementById('articulopro');
            pizita.innerText=dato.title;
            arti.innerText=dato.body;
        }
    catch(error){
    console.warn(error);}}
const obtenerIMG=async(ids)=>{
    try{
        const respuesta= await fetch(`https://jsonplaceholder.typicode.com/photos/${ids}`);
        const img=await respuesta.json();
         let imgcambiada=document.getElementById('pizzatitulo');
         imgcambiada.src=img.url;
    }catch (error){
        console.warn(error);
    }
}
const obtenerEmail=async(ids)=>{
    try{
        const respuesta= await fetch(`https://jsonplaceholder.typicode.com/users/${ids}`);
        const dato= await respuesta.json();
        const mail=dato.email;
        let email=document.getElementById('emailACA');
        email.innerText=mail;
    }catch (error){
        console.warn(error);
    }
}
const SigReview=async(ids)=> {

    await obtenerIMG(ids);
    await obtenerEmail(ids);
    await obtenerTituloYtexto(ids);
    console.log(ids);
    }
const sumar=(elem)=>{
    console.log('funcion sumar');
    console.log(elem);
    elem++;
    p=elem;
    SigReview(p);
}
var p=undefined;
const elegirelem=(elem2)=>{
    if(elem2==undefined){
        elem2=1;var p=elem2;
        return elem2;
    }else{
        var p=elem2;
        return elem2;
    }
}






