const cardList = document.querySelector('.cards-list');

function carregarChamados() {
    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    cardList.innerHTML = "";

    chamados.forEach((ch) => {
        const card = document.createElement("div");
        card.classList.add("chamado-card");

        let classeStatus = "aberto";
        if (ch.status === "Em andamento") classeStatus = "andamento";
        if (ch.status === "Finalizado") classeStatus = "resolvido";

        card.innerHTML = `
            <h2>#${ch.id} – ${ch.titulo}</h2>

            <label>Título:</label><br>
            <input type="text" class="titulo-input" value="${ch.titulo}"><br><br>

            <label>Descrição:</label><br>
            <textarea class="descricao-input">${ch.descricao}</textarea><br><br>

            <label>Status:</label><br>
            <select class="status-input">
                <option ${ch.status === "Iniciado" ? "selected" : ""}>Iniciado</option>
                <option ${ch.status === "Em andamento" ? "selected" : ""}>Em andamento</option>
                <option ${ch.status === "Finalizado" ? "selected" : ""}>Finalizado</option>
            </select>
            <br><br>

            <label>Prioridade:</label><br>
            <select class="prioridade-input">
                <option ${ch.prioridade === "Baixa" ? "selected" : ""}>Baixa</option>
                <option ${ch.prioridade === "Média" ? "selected" : ""}>Média</option>
                <option ${ch.prioridade === "Alta" ? "selected" : ""}>Alta</option>
            </select>
            <br><br>

            <button class="delete-btn">Excluir</button>
            <button class="salvar-btn">Salvar Alterações</button>
        `;

        const inputTitulo = card.querySelector(".titulo-input");
        const inputDescricao = card.querySelector(".descricao-input");
        const selectStatus = card.querySelector(".status-input");
        const selectPrioridade = card.querySelector(".prioridade-input");
        const btnDelete = card.querySelector(".delete-btn");
        const btnSalvar = card.querySelector(".salvar-btn");

        btnDelete.addEventListener("click", () => {
            deletarChamado(ch.id);
        });
        btnSalvar.addEventListener("click", () => {
            salvarAlteracoes(
                ch.id,
                inputTitulo.value,
                inputDescricao.value,
                selectStatus.value,
                selectPrioridade.value
            );
        });
        cardList.appendChild(card);
    });
}

function deletarChamado(id) {
    let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    chamados = chamados.filter(c => c.id !== id);
    localStorage.setItem("chamados", JSON.stringify(chamados));
    carregarChamados();
}

function salvarAlteracoes(id, novoTitulo, novaDescricao, novoStatus, novaPrioridade) {
    let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
    const chamado = chamados.find(c => c.id === id);

    if (chamado) {
        chamado.titulo = novoTitulo;
        chamado.descricao = novaDescricao;
        chamado.status = novoStatus;
        chamado.prioridade = novaPrioridade;
    }

    localStorage.setItem("chamados", JSON.stringify(chamados));
    alert("Chamado atualizado!");
}

carregarChamados();
