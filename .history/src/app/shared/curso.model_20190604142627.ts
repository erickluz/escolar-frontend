import { Disciplina } from './disciplina.model';

export class Curso{
    id: number
    nome: string
    descricaoCurso: string
    disciplinas: Array<Disciplina>
    constructor(id: number, nome: string, descricaoCurso: string, disciplinas: Array<Disciplina>){
        this.id = id
        this.nome = nome
        this.descricaoCurso = descricaoCurso
        this.disciplinas = disciplinas
    }
}