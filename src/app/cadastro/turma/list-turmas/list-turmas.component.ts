import { Component, OnInit, ViewChild } from '@angular/core';
import { Turma } from '../../../shared/turma.model';
import { TURMAS } from '../../../sge.mock';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.scss'],
  providers: [EscolarService]
})
export class ListTurmasComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  private turmas: Array<Turma>
  private id: number

  constructor(
    private service: EscolarService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.listaTurmas()
  }

  listaTurmas(){
    this.service.getListaObjetos('turma')
    .then(resposta => {
      this.turmas = resposta
    })
    .catch(resposta => {
      this.toast.error("Erro ao consultar Turmas")      
      console.log("Erro ao consultar turmas: " + JSON.stringify(resposta) )
    })
  }

  deletarTurma(){
    this.service.deletaObjeto(this.turmas[this.id].id, "turma")
    .then(() => {
      this.listaTurmas()
      this.toast.success("Sucesso ao deletar turma")
      this.dangerModal.hide()
    })
    .catch(resposta => {
      this.toast.error(resposta.json().message, "Erro ")
      this.dangerModal.hide()
    })
  }

}
