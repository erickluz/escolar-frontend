import { Matricula } from './matricula.model';
import { Curso } from './curso.model';
import { Aula } from './aula.model';
import { Aluno } from './aluno.model';

export class Turma{
    id: number
    nome: string
    dataInicio: string
    local: string    
    curso: Curso
    aulas: Array<Aula>
    alunos: Array<Aluno>
    constructor(id: number, nome: string, dataInicio: string, local: string, alunos: Array<Aluno>){
        this.id = id
        this.nome = nome
        this.dataInicio = dataInicio
        this.local = local
        this.alunos = alunos
    }
}