import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Professor } from '../shared/professor.model';
import { ThemeRoutingModule } from '../views/theme/theme-routing.module';

@Injectable()
export class EscolarService{
    private url_api = 'http://localhost:8080/'
    
    constructor(private http: Http){}

    public getListaObjetos(obj: String): Promise<Array<any>> {
        return this.http.get(this.url_api + obj).toPromise()
        .then(resposta => {
            return resposta.json()
        })
    }

    public getObjetoPorId(id: number, nome: String):Promise<any>{
        return this.http.get(this.url_api + nome + '/' + id).toPromise()
        .then(resposta => {
            return resposta.json()
        })
    }

    public deletaObjeto(id: number, nome: String): Promise<any> {
        return this.http.delete(this.url_api + nome + '/' + id).toPromise()
    }

    public cadastrarObjeto(obj: any, nome: String): Promise<any>{
        return this.http.post(this.url_api + nome, obj).toPromise()
    }
    
    public editarObjeto(obj: any, nome: String): Promise<any>{
        return this.http.put(this.url_api + nome + '/' + obj.id, obj).toPromise()
    }

}