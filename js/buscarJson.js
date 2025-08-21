function buscarJson() {
    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")

    xhr.addEventListener("load", function () {
        // trazendo o JSON
        let resposta = xhr.responseText

        // convertendo o JSON para um Objeto em JavaScript
        let itens = JSON.parse(resposta)

        exibirOsItensNaTela(itens)
    })

    xhr.send()
}