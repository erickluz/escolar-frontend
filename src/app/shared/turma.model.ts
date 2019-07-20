import { Curso } from './curso.model';
import { Aula } from './aula.model';
import { Matricula } from './matricula.model';

export class Turma{
    id: number
    nome: string
    dataInicio: string
    local: string    
    curso: Curso
    aulas: Array<Aula>
    matriculas: Array<Matricula>
    constructor(id: number, nome: string, dataInicio: string, local: string, matriculas: Array<Matricula>){
        this.id = id
        this.nome = nome
        this.dataInicio = dataInicio
        this.local = local
        this.matriculas = matriculas
    }
}