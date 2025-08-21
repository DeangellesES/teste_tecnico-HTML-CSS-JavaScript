const campoFiltro = document.querySelector('.conteudo-search__input')

campoFiltro.addEventListener('input', function () {
    let itensFiltrados = document.querySelectorAll(".ids")

    if (this.value.length > 0) {
        for (var i = 0; i < itensFiltrados.length; i++) {
            let item = itensFiltrados[i]
            let tdId = item.querySelector(".info-id")
            let id = tdId.textContent;

            if (id != this.value) {
                item.classList.add("invisivel")
            } else {
                item.classList.remove("invisivel")
            }
        }
    } else {
        for (var i = 0; i < itensFiltrados.length; i++) {
            let item = itensFiltrados[i]
            item.classList.remove("invisivel")
        }
    }
})