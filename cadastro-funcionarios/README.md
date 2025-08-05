# Sistema de Gestão de Funcionários

Este projeto é um sistema web simples para cadastro, listagem e análise de métricas de funcionários, desenvolvido em HTML, CSS (Tailwind) e JavaScript puro, utilizando o `localStorage` do navegador para persistência dos dados.

## Funcionalidades

- **Cadastro de Funcionários:**  
  Formulário completo para cadastrar novos funcionários, incluindo dados pessoais, profissionais e status.

- **Listagem de Funcionários:**  
  Exibe todos os funcionários cadastrados em uma tabela, com opção de visualizar detalhes individuais.

- **Métricas:**  
  Página dedicada a métricas, como:
  - Funcionários cadastrados no último mês
  - Contratações e demissões recentes
  - Total de funcionários
  - Funcionários ativos, em licença ou de férias

- **Persistência Local:**  
  Todos os dados são salvos no `localStorage` do navegador, dispensando backend.

## Estrutura de Pastas

```
/
├── cadastro-funcionarios.html
├── funcionarios.html
├── metricas.html
├── js/
│   └── script.js
└── README.md
```

## Como Usar

1. **Abra o arquivo `cadastro-funcionarios.html`** no navegador para cadastrar novos funcionários.
2. **Acesse `funcionarios.html`** para visualizar a lista de funcionários cadastrados.
3. **Acesse `metricas.html`** para visualizar as métricas da empresa.

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

Desenvolvido por [Seu Nome].
```# Sistema de Gestão de Funcionários

Este projeto é um sistema web simples para cadastro, listagem e análise de métricas de funcionários, desenvolvido em HTML, CSS (Tailwind) e JavaScript puro, utilizando o `localStorage` do navegador para persistência dos dados.

## Funcionalidades

- **Cadastro de Funcionários:**  
  Formulário completo para cadastrar novos funcionários, incluindo dados pessoais, profissionais e status.

- **Listagem de Funcionários:**  
  Exibe todos os funcionários cadastrados em uma tabela, com opção de visualizar detalhes individuais.

- **Métricas:**  
  Página dedicada a métricas, como:
  - Funcionários cadastrados no último mês
  - Contratações e demissões recentes
  - Total de funcionários
  - Funcionários ativos, em licença ou de férias

- **Persistência Local:**  
  Todos os dados são salvos no `localStorage` do navegador, dispensando backend.

## Estrutura de Pastas

```
/
├── cadastro-funcionarios.html
├── funcionarios.html
├── metricas.html
├── js/
│   └── script.js
└── README.md
```

## Como Usar

1. **Abra o arquivo `cadastro-funcionarios.html`** no navegador para cadastrar novos funcionários.
2. **Acesse `funcionarios.html`** para visualizar a lista de funcionários cadastrados.
3. **Acesse `metricas.html`** para visualizar as métricas da empresa.

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