export class Aula{
    id: number
    horaInicio: Date
    horaFim: Date
    constructor(id: number, horaInicio: Date, horaFim: Date){
        this.id = id
        this.horaInicio = horaInicio
        this.horaFim = horaFim
    }
}