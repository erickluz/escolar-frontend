import { Matricula } from './matricula.model';
import { Curso } from './curso.model';

export class Turma{
    id: number
    nome: String
    dataInicio: Date
    local: String
    matriculas: Array<Matricula>
    curso: Curso
    constructor(id: number, nome: String, dataInicio: Date, local: String, matriculas: Array<Matricula>){
        this.id = id
        this.nome = nome
        this.dataInicio = dataInicio
        this.local = local
        this.matriculas = matriculas
    }
}