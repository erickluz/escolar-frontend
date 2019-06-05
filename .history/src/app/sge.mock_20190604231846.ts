import { Aluno } from "./shared/aluno.model";
import { Professor } from "./shared/professor.model";
import { Disciplina } from "./shared/disciplina.model";
import { Curso } from './shared/curso.model';
import { Turma } from './shared/turma.model';
import { Matricula } from './shared/matricula.model';

export const DISCIPLINA: Disciplina = {
    id: 1,
    nome: "Quimica",
    dataCadastro: new Date().toLocaleDateString(),
    descricao: "Materia que explora reacoes da natureza"
}

export const DISCIPLINAS: Array<Disciplina> = [
    {
        id: 1,
        nome: "Quimica",
        dataCadastro: new Date().toLocaleDateString(),
        descricao: "Materia que explora reacoes da natureza"
    },
    {
        id: 2,
        nome: "Matematica",
        dataCadastro : new Date().toLocaleDateString(),
        descricao: "Materia que explora atravez de calculos fenomenos ao nosso redor"
    },
    {
        id: 3,
        nome: "Fisica",
        dataCadastro : new Date().toLocaleDateString(),
        descricao: "Materia que visa entender como a nossa realidade funciona"
    }
]

export const CURSOS: Array<Curso> = [
    {
        id: 1,
        nome: "Engenharia Social",
        descricaoCurso: "Curso para entender a sociedade",
        disciplinas: DISCIPLINAS
    },
    {
        id: 2,
        nome: "Computacao",
        descricaoCurso: "Curso para explorar a tecnologia da humanidade",
        disciplinas: [DISCIPLINA]
    }
]

export const MATRICULA1: Matricula = {
    id: 1,
    dataMatricula: new Date().toLocaleDateString(),
    dataEncerramento: new Date().toLocaleDateString(),
    status: "Em espera",
    curso: CURSOS[0]
}

export const MATRICULA2: Matricula = {
    id: 2,
    dataMatricula: new Date().toLocaleDateString(),
    dataEncerramento: new Date().toLocaleDateString(),
    status: "Matriculado",
    curso: CURSOS[1]
}

export const ALUNO: Aluno = {
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date().toLocaleDateString(),
    RA: "1111111",
    matriculas: [MATRICULA1]
    
}

export const ALUNOS: Array<Aluno> = [{
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date().toLocaleDateString(),
    RA: "1111111",
    matriculas: [MATRICULA2]
},
{
    id: 2,
    nome: "Fernando",
    sobrenome: "Gomes",
    email: "fernando@gmail.com",
    senha: "321",
    cpf: "312",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 1112",
    telefone1: "4444",
    telefone2: "422256",
    dataCadastro: new Date().toLocaleDateString(),
    RA: "2222222",
    matriculas: []
},
{
    id: 3,
    nome: "Luiz",
    sobrenome: "Ferrari",
    email: "luizao@gmail.com",
    senha: "1234566",
    cpf: "1231412312",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua das cassias",
    telefone1: "11111-33333",
    telefone2: "111232111",
    dataCadastro: new Date().toLocaleDateString(),
    RA: "333333333",
    matriculas: []
}]


export const PROFESSOR: Professor = {
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date().toLocaleDateString(),
    formacao: "Matematica"
}

export const PROFESSORES: Array<Professor> = [{
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date().toLocaleDateString(),
    formacao: "Quimica"
},
{
    id: 2,
    nome: "Fernando",
    sobrenome: "Gomes",
    email: "fernando@gmail.com",
    senha: "321",
    cpf: "312",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua 1112",
    telefone1: "4444",
    telefone2: "422256",
    dataCadastro: new Date().toLocaleDateString(),
    formacao: "Historia"
},
{
    id: 3,
    nome: "Luiz",
    sobrenome: "Ferrari",
    email: "luizao@gmail.com",
    senha: "1234566",
    cpf: "1231412312",
    dataNascimento: new Date().toLocaleDateString(),
    endereco: "Rua das cassias",
    telefone1: "11111-33333",
    telefone2: "111232111",
    dataCadastro: new Date().toLocaleDateString(),
    formacao: "Fisica"
}]



export const TURMA: Turma = {
    id: 1, 
    nome: "1-A",
    dataInicio: new Date().toLocaleDateString(),
    local: "Pavilhao B",
    matriculas: [],
    curso: null,
    aulas: []
}

export const TURMAS: Array<Turma> = [
    TURMA,
    {
        id: 2,
        nome: "1-B",
        dataInicio: new Date().toLocaleDateString(),
        local: "Porao",
        matriculas: [],
        curso: null,
        aulas: []
    }
]
