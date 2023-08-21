document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('myModal');

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            const cpf = cpfInput.value.replace(/\D/g, '');
            const senha = senhaInput.value;

            if (cpf === '12312312312' && senha === 'e2etreinamentos') {
                // Redirecionar para a página do cliente após o login
                window.location.href = 'client.html';
            } else {
                modal.style.display = 'block'; // Exibir o modal de erro
            }
        });
    }

    const saldoValue = document.getElementById('saldoValue');
    const limiteValue = document.getElementById('limiteValue');
    const saldoTotalValue = document.getElementById('saldoTotalValue');
    const atualizarCadastroBtn = document.getElementById('atualizarCadastroBtn');
    const updateLimitModal = document.getElementById('updateLimitModal');
    const closeUpdateLimitModal = document.getElementById('closeUpdateLimitModal');
    const confirmUpdateBtn = document.getElementById('confirmUpdateBtn');

    if (atualizarCadastroBtn) {
        atualizarCadastroBtn.addEventListener('click', function () {
            updateLimitModal.style.display = 'block';
        });
    }

    if (modal) {
        modal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    if (closeUpdateLimitModal) {
        closeUpdateLimitModal.addEventListener('click', function () {
            updateLimitModal.style.display = 'none';
        });
    }

    if (confirmUpdateBtn) {
        confirmUpdateBtn.addEventListener('click', function () {
            const novoLimiteInput = document.getElementById('novoLimite');
            const novoLimite = parseFloat(novoLimiteInput.value.replace(',', '.'));

            if (!isNaN(novoLimite)) {
                limite = novoLimite;
                limiteValue.textContent = `Limite: R$ ${limite.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
                updateLimitModal.style.display = 'none';
            }
        });
    }
});
