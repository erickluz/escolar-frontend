import { StringMap } from "@angular/core/src/render3/jit/compiler_facade_interface";

export class Pessoa {

    private id: string
    private nome: string
    private sobrenome: string
    private cpf: string
    private dataNascimento: Date
    private endereco: string
    private telefone1: string
    private telefone2: string
    private dataCadastro: Date


    constructor(id: number,
        nome: string,
        sobrenome: string,
        cpf: string,
        dataNascimento: Date,
        endereco: string,
        telefone1: string,
        telefone2: string,
        dataCadastro: Date) {

    }

}