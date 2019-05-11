import { Pessoa } from './pessoa.model';

export class Professor extends Pessoa{
    constructor(
        id: number,
        nome: String,
        sobrenome: String,
        email: String,
        senha: String,
        cpf: String,
        dataNascimento: Date,
        endereco: String,
        telefone1: String,
        telefone2: String,
        dataCadastro: Date,
        formacao: String){
        super( super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro))
    }
}