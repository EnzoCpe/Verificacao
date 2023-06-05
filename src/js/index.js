// const formulario = document.querySelectorAll(".requerido");

// formulario.forEach(function(input){
//     input.addEventListener("change", function(){

//         if (input.value != ""){
//             input.classList.remove(".preencher");
//             input.classList.add(".valido");
//         }
//     })
// })



// const criarConta = document.querySelector(".button");

// criarConta.addEventListener("click", function(enviar){
//     enviar.preventDefault();

//     formulario.forEach(function(input){
        
//         if (input.value == ""){
//             input.classList.add(".preencher");
//             input.classList.remove(".valido");
//         }
//     })
// })

function validar() {
    const form = document.getElementById('formulario');
    
    if (form == "") {
        form.classList.remove(".preencher");
        form.classList.add(".valido");
    } else {
        form.classList.add(".preencher");
        form.classList.remove(".valido");
    }
}