import {Http} from '@angular/http'
import { Aluno } from './shared/aluno.model';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EscolaService{


    private aluno: Aluno

    constructor(private http: Http){

    }

    public salvaAluno(aluno: Aluno): Promise<any>{
        return this.http.post(`http://localhost:8080/aluno`, aluno).toPromise()
        .then(() => {
            console.log("")
        })
        .catch(() => {
            console.log("")
        })
    }

    public getAluno(): Promise<Aluno>{
        return this.http.get(`http://localhost:8080/aluno`).toPromise()
        .then((aluno: any) => {
            console.log(aluno)
            JSON.stringify(aluno)
        })
        .catch(() => {
            console.log
        })
    }

    ngOnInit(){

    }

}