const user = document.querySelector('#item')

function exibirOsItensNaTela(itens) {
    itens.forEach(item => {

        user.innerHTML += `
        <tr class="ids">
            <td class="info-id">${item.id}</td>
            <td>${item.title}</td>
            <td><input id="ativar" type="checkbox" ></td>
            <td class="finalCampo"><i id="meu_checkbox" class="bi bi-file-earmark-text"></i></td>
        </tr>
        `
        
    })
}

