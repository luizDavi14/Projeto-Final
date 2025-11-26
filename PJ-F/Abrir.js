const inputs = document.querySelectorAll('.input');
const btnCriar = document.querySelector('.btn-enviar');
const inputNome = inputs[0];
const inputEmail = inputs[1];
const inputTitulo = inputs[2];
const inputTipo = inputs[3];
const inputDescricao = inputs[4];

btnCriar.addEventListener('click', criarChamado);

function criarChamado() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const titulo = inputTitulo.value.trim();
    const tipo = inputTipo.value;
    const descricao = inputDescricao.value.trim();

    if (nome === "" || email === "" || titulo === "" || tipo === "Tipo de Problema" || descricao === "") {
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
        status: "Aberto",      
        prioridade: "Média",   
        data: new Date().toLocaleDateString("pt-BR")
    });

    localStorage.setItem("chamados", JSON.stringify(chamados));

    alert("Chamado criado com sucesso!");
    
    inputNome.value = "";
    inputEmail.value = "";
    inputTitulo.value = "";
    inputTipo.selectedIndex = 0;
    inputDescricao.value = "";
}