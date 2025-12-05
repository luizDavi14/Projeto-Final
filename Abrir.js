const inputs = document.querySelectorAll('.input');
const btnCriar = document.querySelector('.btn-enviar');

const inputNome = inputs[0];
const inputEmail = inputs[1];
const inputTitulo = inputs[2];
const inputTipo = inputs[3];
const inputPrioridade = inputs[4];
const inputDescricao = inputs[5];

btnCriar.addEventListener('click', criarChamado);

function criarChamado() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const titulo = inputTitulo.value.trim();
    const tipo = inputTipo.value;
    const descricao = inputDescricao.value.trim();
    const prioridade = inputPrioridade.value;

    if (nome === "" || email === "" || titulo === "" || tipo === "" || descricao === "" || prioridade === ""){
        alert("Preencha todos os campos!");
        return;
    }

    const chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    chamados.push({
        id: Date.now(),
        nome,
        email,
        titulo,
        tipo,
        descricao,
        prioridade,
        status: "Aberto",
        data: new Date().toLocaleDateString("pt-BR")
    });

    localStorage.setItem("chamados", JSON.stringify(chamados));

    alert("Chamado criado com sucesso!");

    inputNome.value = "";
    inputEmail.value = "";
    inputTitulo.value = "";
    inputTipo.selectedIndex = 0;
    inputPrioridade.selectedIndex = 0;
    inputDescricao.value = "";
}
