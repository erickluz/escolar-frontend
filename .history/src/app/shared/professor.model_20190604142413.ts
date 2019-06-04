import { Pessoa } from './pessoa.model';



export class Professor extends Pessoa{

    id: number
    nome: String
    sobrenome: String
    email: String
    senha: String
    cpf: String
    dataNascimento: string
    endereco: String
    telefone1: String
    telefone2: String
    dataCadastro: string
    formacao: String
    
    constructor(
        id: number,
        nome: String,
        sobrenome: String,
        email: String,
        senha: String,
        cpf: String,
        dataNascimento: string,
        endereco: String,
        telefone1: String,
        telefone2: String,
        dataCadastro: string,
        formacao: String){
        super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.formacao = formacao
    }
}