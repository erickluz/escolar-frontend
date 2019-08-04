import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../shared/professor.model';
import { PROFESSORES } from '../../../sge.mock';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss'],
  providers: [EscolarService]
})
export class ListProfessorComponent implements OnInit {

  professores: Array<Professor> = []

  constructor(private servico: EscolarService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getListaProfessores()
  }

  deletarProfessor(valor: Event) {
    let id: number = parseInt((<HTMLInputElement>valor.target).id)
    this.servico.deletaObjeto(this.professores[id].id, 'professor')
      .then(resposta => {
        console.log("Sucesso ao deletar professor: " + resposta.json())
        this.getListaProfessores()
      })
      .catch(resposta => {
        console.log("Erro ao deletar professor" + resposta.json().msg)
        this.toastr.error(resposta.json().msg, 'ERRO:' )
      })
  }

  getListaProfessores() {
    this.servico.getListaObjetos('professor')
      .then(professores => {
          this.professores = professores
      })
      .catch(resposta => {
        console.log("Erro ao listar professores. Erro: " + JSON.stringify(resposta))
      })
  }

}
