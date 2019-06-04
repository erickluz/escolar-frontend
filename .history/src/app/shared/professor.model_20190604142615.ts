import { Pessoa } from './pessoa.model';



export class Professor extends Pessoa{

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
        formacao: string){
        super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.formacao = formacao
    }
}