// Este arquivo contém a lógica JavaScript específica para a página de funcionários.
// Aqui você pode adicionar funcionalidades como validação de formulário e manipulação de eventos.

document.addEventListener('DOMContentLoaded', function() {
    const formFuncionario = document.getElementById('formFuncionario');

    if (formFuncionario) {
        formFuncionario.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Aqui você pode adicionar a lógica de validação do formulário
            const nome = document.getElementById('nome').value;
            const cpf = document.getElementById('cpf').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const email = document.getElementById('email').value;

            // Exemplo de validação simples
            if (!nome || !cpf || !dataNascimento || !email) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Se tudo estiver correto, você pode enviar os dados ou realizar outra ação
            alert('Funcionário cadastrado com sucesso!');
            formFuncionario.reset(); // Limpa o formulário após o envio
        });
    }
});