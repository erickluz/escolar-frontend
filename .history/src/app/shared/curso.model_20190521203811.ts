import { Disciplina } from './disciplina.model';

export class Curso{
    id: number
    nome: String
    descricaoCurso: String
    disciplinas: Array<Disciplina>
    constructor(id: number, nome: String, descricaoCurso: String, disciplinas: Array<Disciplina>){}
}