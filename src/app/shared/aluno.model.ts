import { Pessoa } from './pessoa.model';
import { Matricula } from './matricula.model';

export class Aluno extends Pessoa{
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
    ra: string
    matriculas: Array<Matricula>

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
        ra: string,
        matriculas: Array<Matricula>
    ){
        super(id, nome, sobrenome, email, senha, cpf, dataNascimento, endereco, telefone1, telefone2, dataCadastro)
        this.ra = ra      
        this.matriculas = matriculas
    }
}