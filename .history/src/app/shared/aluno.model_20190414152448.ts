
import { Pessoa } from './pessoa.model'

export class Aluno extends Pessoa{

    constructor(id: number,
        nome: string,
        sobrenome: string,
        cpf: string,
        dataNascimento: Date,
        endereco: string,
        telefone1: string,
        telefone2: string,
        dataCadastro: Date
        ra : String){
        super(id, nome, sobrenome, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
    }

}