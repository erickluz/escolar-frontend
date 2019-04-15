
import { Pessoa } from './pessoa.model'

export class Aluno extends Pessoa {

    private ra : string

    constructor(id: number,
        nome: string,
        sobrenome: string,
        cpf: string,
        dataNascimento: Date,
        endereco: string,
        telefone1: string,
        telefone2: string,
        dataCadastro: Date,
        ra: string) {
        super(id, nome, sobrenome, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.ra = ra
    }

}