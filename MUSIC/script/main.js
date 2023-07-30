var nomeusuario = document.getElementById("name");
var emailusuario = document.getElementById("email");
var telefoneusuario = document.getElementById("telefone");
var senhausuario = document.getElementById("senha");
var confirmasenhausuario = document.getElementById("confirmasenha");
var enter = document.querySelector("#botao");
enter.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (nomeusuario.value === '' || emailusuario.value === '' || telefoneusuario.value === '' || senhausuario.value === '' || confirmasenhausuario.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
   
    
    if (senhausuario.value !== confirmasenhausuario.value) {
        alert('As senhas não coincidem. Por favor, verifique novamente.');
        return; 
    }

    localStorage.setItem('nome', nomeusuario.value);
    localStorage.setItem('email', emailusuario.value);
    localStorage.setItem('telefone', telefoneusuario.value);
    localStorage.setItem('senha', senhausuario.value);
    localStorage.setItem('confirmasenha', confirmasenhausuario.value);


    alert('Cadastro realizado com sucesso!');
    window.location.href = 'home.html'; 
});
