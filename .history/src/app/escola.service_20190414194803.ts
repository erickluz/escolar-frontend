import {Http} from '@angular/http'
import { Aluno } from './shared/aluno.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class EscolaService implements OnInit{

    aluno: Aluno

    constructor(private http: Http){

    }

    public salvaAluno(aluno: Aluno): Promise<any>{
        this.http.post(aluno).toPromise()
        .then(() => {
            console.log("Objeto Cadastrado com sucesso")
        }).catch(
            console.log("Erro na conexao com o servidor")
        )
    }

    public getAluno(): Promisse<aluno

    ngOnInit(){

    }

}