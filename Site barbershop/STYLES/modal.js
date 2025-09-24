// Seleciona elementos
        const modal = document.getElementById("modal");
        const openBtns = document.querySelectorAll(".openModal"); 
        const closeBtn = document.getElementById("closeModal");

        // Abre modal em qualquer botão clicado
        openBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                modal.style.display = "flex";
            });
        });

        // Fecha modal
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

        // Fecha clicando fora
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

//MODAL DE CONFIRMAÇÃO
        
// Seleciona o formulário de agendamento
const formulario = document.querySelector('form');
const modalAgendamento = document.getElementById("modal");

// Seleciona o novo modal de confirmação e seus botões
const modalConfirmacao = document.getElementById("confirmacaoModal");
const closeConfirmacaoBtn = document.getElementById("closeConfirmacaoModal");
const btnFecharConfirmacao = document.getElementById("btnFecharConfirmacao");

// Função para exibir o modal de confirmação
function exibirConfirmacao() {
    // Esconde o modal de agendamento
    modalAgendamento.style.display = "none";
    // Exibe o modal de confirmação
    modalConfirmacao.style.display = "flex";
}

// Adiciona um "ouvinte" para o evento de envio do formulário
formulario.addEventListener('submit', (e) => {
    // Impede o envio do formulário para o servidor
    e.preventDefault(); 
    
    // Chama a função para exibir o pop-up de confirmação
    exibirConfirmacao();

    // Opcional: Limpar os campos do formulário após o envio
    formulario.reset();
});

// Fecha o modal de confirmação ao clicar no "X"
closeConfirmacaoBtn.onclick = () => {
    modalConfirmacao.style.display = "none";
};

// Fecha o modal de confirmação ao clicar no botão "Ok"
btnFecharConfirmacao.onclick = () => {
    modalConfirmacao.style.display = "none";
};

// Fecha o modal ao clicar fora dele
window.onclick = (event) => {
    if (event.target === modalConfirmacao) {
        modalConfirmacao.style.display = "none";
    }
};