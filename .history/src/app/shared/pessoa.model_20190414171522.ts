import { StringMap } from "@angular/core/src/render3/jit/compiler_facade_interface";

export class Pessoa {

    id: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
    dataNascimento: Date
    endereco: string
    telefone1: string
    telefone2: string
    dataCadastro: Date

    constructor(id: number,
        nome: string,
        sobrenome: string,
        cpf: string,
        dataNascimento: Date,
        endereco: string,
        telefone1: string,
        telefone2: string,
        dataCadastro: Date) {

            this.id = id
            this.nome = nome
            this.sobrenome = sobrenome
            this.cpf = cpf
            this.dataNascimento = dataNascimento
            this.endereco = endereco
            this.telefone1 = telefone1
            this.telefone2 = telefone2
            this.dataCadastro = dataCadastro

    }

}