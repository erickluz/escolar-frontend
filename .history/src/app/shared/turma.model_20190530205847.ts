import { Matricula } from './matricula.model';

export class Turma{
    id: number
    nome: String
    dataInicio: Date
    local: String
    matricula: Matricula
    constructor(id: number, nome: String, dataInicio: DataCue, local: String){}
}