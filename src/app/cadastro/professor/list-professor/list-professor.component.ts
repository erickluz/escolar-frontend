import { Component, OnInit, ViewChild } from '@angular/core';
import { Professor } from '../../../shared/professor.model';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss'],
  providers: [EscolarService]
})
export class ListProfessorComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;

  private professores: Array<Professor> = []
  private id: number

  constructor(private servico: EscolarService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getListaProfessores()
  }

  deletarProfessor(valor: Event) {
  
    this.servico.deletaObjeto(this.professores[this.id].id, 'professor')
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
