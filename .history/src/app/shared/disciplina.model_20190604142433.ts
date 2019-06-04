export class Disciplina{
    id: number
    nome: String
    dataCadastro: string
    descricao: String
    constructor(
        id: number,
        nome: String,
        dataCadastro: string,
        descricao: String
    ){
        this.id = id
        this.nome = nome
        this.dataCadastro = dataCadastro
        this.descricao = descricao
    }
}