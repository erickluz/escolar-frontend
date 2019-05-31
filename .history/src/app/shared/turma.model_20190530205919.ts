import { Matricula } from './matricula.model';

export class Turma{
    id: number
    nome: String
    dataInicio: Date
    local: String
    matriculas: Array<Matricula>
    constructor(id: number, nome: String, dataInicio: DataCue, local: String, matriculas: Matricula){}
}