# Sistema de Login e Cadastro

Este projeto é um sistema simples de login e cadastro de usuários, com funcionalidades adicionais como redefinição de senha, autenticação com LinkedIn e Google (simulada), e uma página de gerenciamento de funcionários. O sistema utiliza **HTML**, **CSS com Tailwind**, e **JavaScript** com armazenamento local (`localStorage` e `sessionStorage`) para simular o backend.

---

## Funcionalidades

### 1. **Login**

- Página de login estilizada com **Tailwind CSS**.
- Autenticação de usuários cadastrados no `localStorage`.
- Redirecionamento para a página de funcionários após login bem-sucedido.
- Opção de "Lembrar-me" (simulada).
- Link para redefinição de senha.

### 2. **Cadastro**

- Página de cadastro estilizada com **Tailwind CSS**.
- Campos adicionais para:
  - Nome completo
  - Telefone
  - CPF
  - Data de nascimento
- Validação para evitar cadastro de e-mails duplicados.
- Redirecionamento para a página de login após cadastro bem-sucedido.
- Botões para cadastro com LinkedIn e Google (simulados).

### 3. **Redefinição de Senha**

- Página para redefinir senha com envio de link (simulado).
- Autenticação com LinkedIn e Google (simulados).
- Mensagem de erro caso o e-mail não esteja cadastrado.

### 4. **Página de Funcionários**

- Página protegida que lista todos os usuários cadastrados.
- Exibe nome e e-mail dos usuários.
- Botão para logout, que redireciona para a página de login.
- Links para cadastrar novos funcionários ou voltar ao login.

### 5. **Usuário Admin**

- Um usuário administrador é criado automaticamente ao carregar o sistema pela primeira vez:
  - **E-mail:** `admin@admin.com`
  - **Senha:** `admin123`
- O admin tem acesso à página de funcionários após o login.

---

## Estrutura do Projeto

```plaintext
devsolutioncompany/
├── [login.html](http://_vscodecontentref_/1)               # Página de login
├── [cadastro-conta.html](http://_vscodecontentref_/2)      # Página de cadastro
├── [redefinir-senha.html](http://_vscodecontentref_/3)     # Página de redefinição de senha
├── [funcionarios.html](http://_vscodecontentref_/4)        # Página de gerenciamento de funcionários
├── [README.md](http://_vscodecontentref_/5)                # Documentação do projeto
```

## Como Usar

1. **Abra o arquivo `login.html`** no navegador para acessar a página de login.
2. **Utilize as credenciais padrão** para o usuário admin:
   - E-mail: `admin@admin.com`
   - Senha: `admin123`
3. **Acesse `funcionarios.html`** para visualizar a lista de funcionários cadastrados.
4. **Utilize as opções de cadastro e redefinição de senha** conforme necessário.

## Observações

- O sistema utiliza apenas o navegador, sem necessidade de servidor.
- Para simular demissões, licenças ou férias, é necessário editar manualmente o status do funcionário no `localStorage` ou adaptar o formulário para permitir essa edição.
- O sistema é responsivo e utiliza Tailwind CSS via CDN.

## Melhorias Futuras

- Permitir edição e exclusão de funcionários.
- Adicionar autenticação de usuário.
- Exportação dos dados para CSV.
- Integração com backend para persistência real.

---

Desenvolvido por Sérgio Badaró
