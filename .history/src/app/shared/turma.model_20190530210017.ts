import { Matricula } from './matricula.model';
import { ThrowStmt } from '@angular/compiler';

export class Turma{
    id: number
    nome: String
    dataInicio: Date
    local: String
    matriculas: Array<Matricula>
    constructor(id: number, nome: String, dataInicio: Date, local: String, matriculas: Array<Matricula>){
        this.id = id
        this.nome = nome
        this.dataInicio = dataInicio
        this.local = local
        this.matriculas = matriculas
    }
}