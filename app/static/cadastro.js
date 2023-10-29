function cadastrar(){
    
    nomeR = document.getElementById('nome')
    userR = document.getElementById('user')
    emailR = document.getElementById('email')
    senhaR = document.getElementById('senha')

    fetch("http://localhost:8090/cadastrar",
    {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },

        body: JSON.stringify({
            nome: nomeR.value,
            usuario: userR.value,
            email: emailR.value,
            senha: senhaR.value
        })
    })

    .then( function( res ){ console.log(res) })
    .catch( function( res ) { console.log(res)})

    limparCadastro()
}

function limparCadastro() {
    document.getElementById('nome').value = ""
    document.getElementById('user').value = ""
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
}