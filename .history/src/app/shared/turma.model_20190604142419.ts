import { Matricula } from './matricula.model';
import { Curso } from './curso.model';
import { Aula } from './aula.model';

export class Turma{
    id: number
    nome: String
    dataInicio: string
    local: String
    matriculas: Array<Matricula>
    curso: Curso
    aulas: Array<Aula>
    constructor(id: number, nome: String, dataInicio: string, local: String, matriculas: Array<Matricula>){
        this.id = id
        this.nome = nome
        this.dataInicio = dataInicio
        this.local = local
        this.matriculas = matriculas
    }
}