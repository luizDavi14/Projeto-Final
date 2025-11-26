const cardList = document.querySelector('.cards-list');

function carregarChamados() {
    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    cardList.innerHTML = "";

    chamados.forEach((ch) => {
        const card = document.createElement("div");
        card.classList.add("chamado-card");

        let classeStatus = "aberto";
        if (ch.status === "Em andamento") classeStatus = "andamento";
        if (ch.status === "Finalizado" || ch.status === "Resolvido") classeStatus = "resolvido";

        let classePrioridade = "media";

        card.innerHTML = `
            <div class="card-top">
                <span class="status ${classeStatus}">${ch.status}</span>
                <span class="prioridade ${classePrioridade}">Prioridade ${ch.prioridade}</span>
            </div>

            <h2>#${ch.id} – ${ch.titulo}</h2>

            <p><strong>Responsável:</strong> ${ch.nome}</p>
            <p><strong>Data:</strong> ${ch.data}</p>

            <a class="ver-btn" href="#">
                <i class="fas fa-eye"></i> Ver Detalhes
            </a>

            <button class="delete-btn">Excluir</button>
        `;

        const btnDelete = card.querySelector('.delete-btn');
        btnDelete.addEventListener('click', () => {
            deletarChamado(ch.id);
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

carregarChamados();
