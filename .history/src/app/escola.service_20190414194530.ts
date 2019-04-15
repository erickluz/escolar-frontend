import {Http} from '@angular/http'
import { Aluno } from './shared/aluno.model';
import { Injectable } from '@angular/core';

@Injectable
export class EscolaService{

    aluno: Aluno

    constructor(private http: Http){

    }

    public salvaAluno(aluno: Aluno): Promise<Aluno>{
        this.http.post(aluno).toPromise()
        .then(() => {
            console.log("Objeto Cadastrado com sucesso")
        }).catch(
            console.log("Erro na conexao com o servidor")
        );
    }


}