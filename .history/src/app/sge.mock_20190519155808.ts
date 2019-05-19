import { Aluno } from "./shared/aluno.model";

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
    dataCadastro: Date(),
    RA: "1111111"
}

export const ALUNOS: Array<Aluno> = [{
    id: 1,
    nome: "Erick",
    sobrenome: "Luz",
    email: "erickluz360@gmail.com",
    senha: "123",
    cpf: "123",
    dataNascimento: Date(),
    endereco: "Rua 10",
    telefone1: "123",
    telefone2: "456",
    dataCadastro: Date(),
    RA: "1111111"
},
{
    id: 2,
    nome: "Fernando",
    sobrenome: "Gomes",
    email: "fernando@gmail.com",
    senha: "321",
    cpf: "312",
    dataNascimento: Date(),
    endereco: "Rua 1112",
    telefone1: "4444",
    telefone2: "422256",
    dataCadastro: Date(),
    RA: "2222222"
},
{
    id: 2,
    nome: "Luiz",
    sobrenome: "Ferrari",
    email: "luizao@gmail.com",
    senha: "1234566",
    cpf: "1231412312",
    dataNascimento: Date(),
    endereco: "Rua das cassias",
    telefone1: "11111-33333",
    telefone2: "111232111",
    dataCadastro: Date(),
    RA: "333333333"
}]