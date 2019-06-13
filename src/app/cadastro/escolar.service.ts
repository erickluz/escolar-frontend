import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Professor } from '../shared/professor.model';

@Injectable()
export class EscolarService{
    private url_api = 'http://localhost:8080/'
    
    constructor(private http: Http){}

    public getProfessores(): Promise<Array<Professor>> {
        return this.http.get(this.url_api + 'professor').toPromise()
        .then(resposta => {
            return resposta.json()
        })
        .catch(resposta => {
            console.log("Erro ao buscar lista de professores")
        })
    }

    public deletaProfessor(id: number): Promise<any> {
        let req = this.url_api + 'professor/' + id
        console.log("Link:  " + req)
        return this.http.delete(req)
        .toPromise()
        .then(resposta => {
            return resposta.json()
        })
        .catch(resposta => {
            console.log("Erro ao deletar professor" + JSON.stringify(resposta))
        })
    }

}