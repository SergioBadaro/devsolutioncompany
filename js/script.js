// Salvar funcionário
function salvarFuncionario(form) {
  const funcionario = {
    nome: form.nome.value,
    cpf: form.cpf.value,
    dataNascimento: form.dataNascimento.value,
    email: form.email.value,
    telefone: form.telefone.value,
    endereco: form.endereco.value,
    bairro: form.bairro.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
    cep: form.cep.value,
    cargo: form.cargo.value,
    departamento: form.departamento.value,
    dataContratacao: form.dataContratacao.value,
    salario: form.salario.value,
    horarioTrabalho: form.horarioTrabalho.value,
    sexo: form.sexo.value,
    estadoCivil: form.estadoCivil.value,
    tipoContratacao: form.tipoContratacao.value,
    status: "ativo", // padrão
  };
  const lista = JSON.parse(localStorage.getItem("funcionarios") || "[]");
  lista.push(funcionario);
  localStorage.setItem("funcionarios", JSON.stringify(lista));
}

// Carregar funcionários na tabela
function carregarFuncionarios() {
  const lista = JSON.parse(localStorage.getItem("funcionarios") || "[]");
  const tbody = document.getElementById("tabelaFuncionarios");
  if (!tbody) return;
  tbody.innerHTML = "";
  lista.forEach((f, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td class="border border-gray-300 px-4 py-2">${f.nome}</td>
            <td class="border border-gray-300 px-4 py-2">${f.departamento}</td>
            <td class="border border-gray-300 px-4 py-2">R$ ${parseFloat(
              f.salario
            ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
            <td class="border border-gray-300 px-4 py-2">${
              f.dataContratacao
            }</td>
            <td class="border border-gray-300 px-4 py-2">
                <button onclick="abrirModal(${i})" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Ver detalhes
                </button>
            </td>
        `;
    tbody.appendChild(tr);
  });
}

// Modal de detalhes
function abrirModal(index) {
  const lista = JSON.parse(localStorage.getItem("funcionarios") || "[]");
  const f = lista[index];
  document.getElementById("detalhesFuncionario").innerHTML = `
        <p><strong>Nome:</strong> ${f.nome}</p>
        <p><strong>CPF:</strong> ${f.cpf}</p>
        <p><strong>Email:</strong> ${f.email}</p>
        <p><strong>Departamento:</strong> ${f.departamento}</p>
        <p><strong>Cargo:</strong> ${f.cargo}</p>
        <p><strong>Salário:</strong> R$ ${parseFloat(f.salario).toLocaleString(
          "pt-BR",
          { minimumFractionDigits: 2 }
        )}</p>
        <p><strong>Data de Contratação:</strong> ${f.dataContratacao}</p>
        <p><strong>Status:</strong> ${f.status || "ativo"}</p>
    `;
  document.getElementById("modalFuncionario").classList.remove("hidden");
}
function fecharModal() {
  document.getElementById("modalFuncionario").classList.add("hidden");
}

// Métricas
function getLastMonthDate() {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  return now;
}
function carregarMetricas() {
  const lista = JSON.parse(localStorage.getItem("funcionarios") || "[]");
  const ultimoMes = getLastMonthDate();

  let cadastradosMes = 0;
  let contratacoesMes = 0;
  let demissoesMes = 0;
  let total = 0;
  let ativos = 0;
  let licenca = 0;
  let ferias = 0;

  lista.forEach((f) => {
    const dataContratacao = new Date(f.dataContratacao);
    if (dataContratacao >= ultimoMes) {
      cadastradosMes++;
      contratacoesMes++;
    }
    if (!f.status || f.status === "ativo") ativos++;
    if (f.status === "licenca") licenca++;
    if (f.status === "ferias") ferias++;
    if (f.status === "demitido" && f.dataDemissao) {
      const dataDemissao = new Date(f.dataDemissao);
      if (dataDemissao >= ultimoMes) demissoesMes++;
    }
    if (!f.status || f.status !== "demitido") total++;
  });

  if (document.getElementById("cadastradosMes"))
    document.getElementById("cadastradosMes").textContent = cadastradosMes;
  if (document.getElementById("contratacoesMes"))
    document.getElementById("contratacoesMes").textContent = contratacoesMes;
  if (document.getElementById("demissoesMes"))
    document.getElementById("demissoesMes").textContent = demissoesMes;
  if (document.getElementById("totalFuncionarios"))
    document.getElementById("totalFuncionarios").textContent = total;
  if (document.getElementById("ativos"))
    document.getElementById("ativos").textContent = ativos;
  if (document.getElementById("licenca"))
    document.getElementById("licenca").textContent = licenca;
  if (document.getElementById("ferias"))
    document.getElementById("ferias").textContent = ferias;
}

// Eventos automáticos
window.addEventListener("DOMContentLoaded", () => {
  // Cadastro
  const form = document.getElementById("formFuncionario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      salvarFuncionario(form);
      alert("Funcionário cadastrado com sucesso!");
      form.reset();
    });
  }
  // Listagem
  if (document.getElementById("tabelaFuncionarios")) {
    carregarFuncionarios();
  }
  // Métricas
  if (document.getElementById("cadastradosMes")) {
    carregarMetricas();
  }
});

// Cria usuário admin padrão se não existir
if (!localStorage.getItem("admin@admin.com")) {
  localStorage.setItem(
    "admin@admin.com",
    JSON.stringify({
      nome: "Administrador",
      email: "admin@admin.com",
      senha: "admin123",
      telefone: "",
      cpf: "",
      dataNascimento: "",
    })
  );
}
