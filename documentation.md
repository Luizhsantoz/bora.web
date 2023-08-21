# Documento de Negócio da Aplicação E2E Bank

## História de Usuário 1: Login

### Descrição:
Como cliente do E2E Bank, desejo poder fazer login na minha conta para acessar informações sobre meu saldo e limite de crédito.

### Requisitos:

A página de login deve conter campos para o cliente inserir seu CPF e senha.
O sistema deve validar as informações inseridas e permitir o acesso apenas se os dados de login estiverem corretos.
Dados de teste serão fornecidos para realizar testes de login bem-sucedidos.
Se as informações de login estiverem incorretas, um modal de erro deve ser exibido, informando que os dados são inválidos.

### Dados de Login de Teste:
CPF: 123.123.123-12
Senha: e2etreinamentos


## História de Usuário 2: Atualizar Limite de Crédito

Descrição:
Como gerente de conta do E2E Bank, desejo poder atualizar o limite de crédito dos clientes de acordo com as regras estabelecidas.

### Requisitos:

Na página de cliente logado, o botão "Atualizar Cadastro" deve estar visível para o gerente de conta.
Ao clicar no botão "Atualizar Cadastro", um modal de atualização de limite deve ser exibido.
O modal deve conter um campo para inserir o novo limite de crédito.
Após inserir o novo limite de crédito, o gerente de conta deve confirmar a atualização.
O sistema deve validar se o novo limite de crédito inserido é um valor numérico não negativo.
Se o valor for válido, o sistema deve atualizar o limite de crédito do cliente de acordo.
O sistema deve atualizar a exibição do limite de crédito na página principal.
Após a atualização, o modal de atualização de limite deve ser fechado.


É importante garantir a usabilidade da interface, fornecendo feedback claro ao usuário sobre o resultado de suas ações.
Testes de usabilidade e segurança devem ser conduzidos para assegurar a eficácia e segurança das funcionalidades.
A documentação e os requisitos devem ser validados pela equipe técnica e de negócios antes da implementação.
