import { Professor } from './professor.model';
import { Disciplina } from './disciplina.model';

export class Aula{
    id: number
    horaInicio: string
    horaFim: string
    professor: Array<Professor>
    disciplina: Disciplina
    constructor(id: number, horaInicio: string, horaFim: string){
        this.id = id
        this.horaInicio = horaInicio
        this.horaFim = horaFim
    }
}