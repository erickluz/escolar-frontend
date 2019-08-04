import { Pessoa } from './pessoa.model';

export class Professor extends Pessoa {

    id: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    dataNascimento: string
    endereco: string
    telefone1: string
    telefone2: string
    dataCadastro: string
    formacao: string

    constructor(
        id: number,
        nome: string,
        sobrenome: string,
        email: string,
        senha: string,
        cpf: string,
        dataNascimento: string,
        endereco: string,
        telefone1: string,
        telefone2: string,
        dataCadastro: string,
        formacao: string) {

        super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.id = id
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.senha = senha
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.dataCadastro = dataCadastro
        this.endereco = endereco
        this.telefone1 = telefone1
        this.telefone2 = telefone2
        this.formacao = formacao
    }
}