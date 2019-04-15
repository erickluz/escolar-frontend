import {Http} from '@angular/http'
import { Aluno } from './shared/aluno.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EscolaService implements OnInit{


    aluno: Aluno

    constructor(private http: Http){

    }

    public salvaAluno(aluno: Aluno): Promise<any>{
        this.http.post<Aluno>(`http://localhost:8080/aluno`, aluno, httpOptions).toPromise()
        .then(() => {
            console.log("")
        })
        .catch(() => {
            console.log("")
        })
    }

    public getAluno(): Promisse<aluno

    ngOnInit(){

    }

}