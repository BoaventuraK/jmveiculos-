function logar() {

var usuario = document.getElementById('usuario').value
var senha = document.getElementById('senha').value

    if( usuario == "kauan" && senha == "soufoda"){
        location.href = '../principal.html';
    }
    
    else {
        alert("Usuário ou senha Inválidos.")
    }

}

let bancoDeCadastro = []
let usuario = ""
let email = ""
let senha = ""
let csenha = ""
let novoUsuario = {
    usuario: usuario,
    email: email,
    senha: senha,
    csenha: senha,
}
let emailVerificacao = []
let senhaVerificacao = []

function registrar (usuario, email, senha, csenha){

    if (usuario.trim() != "" && email.trim() != "" && senha.trim() != "" && csenha.trim() != "") {
        
        let emailsIguais = 0
        for(let i = 0; i < bancoDeCadastro.length; i++) {
            if(email == emailVerificacao[i]) {
                emailsIguais++
            }
        }

        if(email == "adm2002@gmail.com") {
            window.alert("Conta Privada")
        } else {

            if(emailsIguais == 0) {
                if(senha == csenha) {
    
                    novoUsuario = {
                        usuario: usuario,
                        email: email,
                        senha: senha,
                        csenha: csenha,
                    }
                    bancoDeCadastro.push(novoUsuario)
                    emailVerificacao.push(email)
                    senhaVerificacao.push(senha)
            
                    window.alert('Cadastro realizado com sucesso')
                    
                    document.getElementById('usuario').value = ""
                    document.getElementById('email').value = ""
                    document.getElementById('senha').value = ""
                    document.getElementById('csenha').value = ""
        
                    document.querySelector('.Login').style.display='block';
                    document.querySelector('.Registro').style.display='none';
                    document.querySelector('.ResgatarSenha').style.display='none';
        
                } else {
                    window.alert("Senhas não correspondentes")
                }
            } else {
                window.alert("Email inválido")
            }

        }
        
    }

}


function fale(){
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('tell').value;
    let recado = document.getElementById('recado').value;

    if (nome.trim() == "" || email.trim() == "" || ddd.trim() == "" || numero.trim() == "" || recado.trim() == "") {

        window.alert('Preencha todos os campos')

    } 

    recados(nome, email, ddd, numero, recado)

}