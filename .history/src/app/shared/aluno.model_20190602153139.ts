import { Pessoa } from './pessoa.model';
import { Matricula } from './matricula.model';

export class Aluno extends Pessoa{
    id: number
    nome: String
    sobrenome: String
    email: String
    senha: String
    cpf: String
    dataNascimento: Date
    endereco: String
    telefone1: String
    telefone2: String
    dataCadastro: Date
    RA: String
    matriculas: Array<Matricula>

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
        RA: String,
        matriculas: Array<Matricula>
    ){
        super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.RA = RA      
        this.matriculas = matriculas
    }
}