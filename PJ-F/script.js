const inputTitulo = document.getElementById('titulo');
const inputDescricao = document.getElementById('descricao');
const btnCriar = document.getElementById('btnCriar');
const listaChamados = document.getElementById('listaChamados');

btnCriar.addEventListener('click', criarChamado);

function criarChamado() {
    const titulo = inputTitulo.value.trim();
    const descricao = inputDescricao.value.trim();

    if (titulo === "" || descricao === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const chamado = document.createElement('div');
    chamado.classList.add('chamado');

    const selectStatus = document.createElement('select');
    selectStatus.innerHTML =`<option value="Iniciado" selected>Iniciado</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Finalizado">Finalizado</option>`;

    const spanStatus = document.createElement('span');
    spanStatus.textContent = "Iniciado";

    selectStatus.addEventListener('change', () => {
        spanStatus.textContent = selectStatus.value;
    });

    const btnApagar = document.createElement('button');
    btnApagar.textContent = "Apagar";
    btnApagar.addEventListener('click', () => {
        chamado.remove();
    });

    chamado.innerHTML = `
        <h3>${titulo}</h3>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Status:</strong></p>
    `;

    const pStatus = chamado.querySelector('p:last-of-type');
    pStatus.appendChild(spanStatus);
    pStatus.appendChild(document.createElement('br'));

    chamado.appendChild(btnApagar);

    listaChamados.appendChild(chamado);

    inputTitulo.value = "";
    inputDescricao.value = "";
}
