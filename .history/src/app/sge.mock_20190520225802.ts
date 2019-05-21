import { Aluno } from "./shared/aluno.model";
import { Professor } from "./shared/professor.model";
import { Disciplina } from "./shared/disciplina.model";

export const ALUNO: Aluno = {
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date(),
    RA: "1111111"
}

export const ALUNOS: Array<Aluno> = [{
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date(),
    RA: "1111111"
},
{
    id: 2,
    nome: "Fernando",
    sobrenome: "Gomes",
    email: "fernando@gmail.com",
    senha: "321",
    cpf: "312",
    dataNascimento: new Date(),
    endereco: "Rua 1112",
    telefone1: "4444",
    telefone2: "422256",
    dataCadastro: new Date(),
    RA: "2222222"
},
{
    id: 3,
    nome: "Luiz",
    sobrenome: "Ferrari",
    email: "luizao@gmail.com",
    senha: "1234566",
    cpf: "1231412312",
    dataNascimento: new Date(),
    endereco: "Rua das cassias",
    telefone1: "11111-33333",
    telefone2: "111232111",
    dataCadastro: new Date(),
    RA: "333333333"
}]


export const PROFESSOR: Professor = {
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date(),
    formacao: "Matematica"
}

export const PROFESSORES: Array<Professor> = [{
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: new Date(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: new Date(),
    formacao: "Quimica"
},
{
    id: 2,
    nome: "Fernando",
    sobrenome: "Gomes",
    email: "fernando@gmail.com",
    senha: "321",
    cpf: "312",
    dataNascimento: new Date(),
    endereco: "Rua 1112",
    telefone1: "4444",
    telefone2: "422256",
    dataCadastro: new Date(),
    formacao: "Historia"
},
{
    id: 3,
    nome: "Luiz",
    sobrenome: "Ferrari",
    email: "luizao@gmail.com",
    senha: "1234566",
    cpf: "1231412312",
    dataNascimento: new Date(),
    endereco: "Rua das cassias",
    telefone1: "11111-33333",
    telefone2: "111232111",
    dataCadastro: new Date(),
    formacao: "Fisica"
}]

export const DISCIPLINA: Disciplina = {

}