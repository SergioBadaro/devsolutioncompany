// Este arquivo contém definições de tipos TypeScript utilizados em todo o projeto. 
// Você pode adicionar interfaces, tipos e enums conforme necessário para garantir a segurança de tipos. 

export interface Funcionario {
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    telefone?: string;
    endereco?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
    cargo: string;
    departamento: string;
    dataContratacao: string;
    salario: number;
    horarioTrabalho?: string;
    sexo?: 'Masculino' | 'Feminino' | 'Outro' | 'Prefiro não informar';
    estadoCivil: 'Solteiro' | 'Casado' | 'Viúvo' | 'Separado' | 'Amasiado';
    tipoContratacao: 'CLT' | 'PJ' | 'Temporário' | 'Estágio' | 'Aprendiz' | 'Outros';
}