export class Matricula {
    id: number
    dataMatricula: Date
    dataEncerramento: Date
    status: string
    constructor(id: number, dataMatricula: Date, dataEncerramento: Date, status: string) {
        this.id = id
        this.dataMatricula = dataMatricula
        this.dataEncerramento = dataEncerramento
        this.status = status
    }
}