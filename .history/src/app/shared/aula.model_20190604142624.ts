import { Professor } from './professor.model';

export class Aula{
    id: number
    horaInicio: string
    horaFim: string
    professor: Array<Professor>
    constructor(id: number, horaInicio: string, horaFim: string){
        this.id = id
        this.horaInicio = horaInicio
        this.horaFim = horaFim
    }
}