import { Curso } from './curso.model';

export class Matricula {
    id: number
    dataMatricula: string
    dataEncerramento: string
    status: string
    curso: Curso
    constructor(id: number, dataMatricula: string, dataEncerramento: string, status: string, curso: Curso) {
        this.id = id
        this.dataMatricula = dataMatricula
        this.dataEncerramento = dataEncerramento
        this.status = status
        this.curso = curso
    }
}