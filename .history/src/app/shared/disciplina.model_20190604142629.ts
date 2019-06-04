export class Disciplina{
    id: number
    nome: string
    dataCadastro: string
    descricao: string
    constructor(
        id: number,
        nome: string,
        dataCadastro: string,
        descricao: string
    ){
        this.id = id
        this.nome = nome
        this.dataCadastro = dataCadastro
        this.descricao = descricao
    }
}