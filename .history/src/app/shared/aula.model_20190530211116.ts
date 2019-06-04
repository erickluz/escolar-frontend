import { Professor } from './professor.model';

export class Aula{
    id: number
    horaInicio: Date
    horaFim: Date
    professor: Array<Professor>
    constructor(id: number, horaInicio: Date, horaFim: Date){
        this.id = id
        this.horaInicio = horaInicio
        this.horaFim = horaFim
    }
}