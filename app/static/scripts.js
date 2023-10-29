window.onload = function () {
    var message = document.getElementById('message');
    if (message.textContent.trim() !== "") {
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 5000); 
    }
};

function adicionarRegistro() {
    const dataEntrada = document.getElementById('data-entrada').value;
    const placaVeiculo = document.getElementById('placa-veiculo').value;
    const marcaVeiculo = document.getElementById('marca-veiculo').value;
    const modeloVeiculo = document.getElementById('modelo-veiculo').value;
    const errorMessage = document.getElementById('error-message');

    if (dataEntrada && placaVeiculo && marcaVeiculo && modeloVeiculo) {
        const tableBody = document.getElementById('table-body');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${dataEntrada}</td>
            <td>${placaVeiculo}</td>
            <td>${marcaVeiculo}</td>
            <td>${modeloVeiculo}</td>
        `;
        tableBody.appendChild(newRow);

        
        document.getElementById('data-entrada').value = '';
        document.getElementById('placa-veiculo').value = '';
        document.getElementById('marca-veiculo').value = '';
        document.getElementById('modelo-veiculo').value = '';

        
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Preencha todos os campos antes de adicionar o registro.';
        errorMessage.style.display = 'block';
    }
}


function editarRegistro(id) {
    
    window.location.href = '/editar_registro/' + id;
}




function atualizarDadosHTML(id, dataEntrada, placaVeiculo, marcaVeiculo, modeloVeiculo) {
    document.getElementById(`data-entrada-${id}`).textContent = dataEntrada;
    document.getElementById(`placa-veiculo-${id}`).textContent = placaVeiculo;
    document.getElementById(`marca-veiculo-${id}`).textContent = marcaVeiculo;
    document.getElementById(`modelo-veiculo-${id}`).textContent = modeloVeiculo;
}




function salvarEdicoes() {
    var registroId = document.getElementById("registro-id").value;
    var dataEntrada = document.getElementById("data-entrada-edicao").value;
    var placaVeiculo = document.getElementById("placadoveiculo-edicao").value;
    var marcaVeiculo = document.getElementById("marca-edicao").value;
    var modeloVeiculo = document.getElementById("modelo-edicao").value;

    
    fetch('/editar_registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `registro_id=${registroId}&dataa=${dataEntrada}&placadoveiculo=${placaVeiculo}&marca=${marcaVeiculo}&modelo=${modeloVeiculo}`,
    }).then(function(response) {
        return response.text();
    }).then(function(data) {
        
        atualizarDadosHTML(registroId, dataEntrada, placaVeiculo, marcaVeiculo, modeloVeiculo);
        
        fecharMiniTelaEdicao();
    });

    return false; 
}
