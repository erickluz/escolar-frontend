import { Component, OnInit, ViewChild } from '@angular/core';
import { Disciplina } from '../../../shared/disciplina.model';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-disciplina',
  templateUrl: './list-disciplina.component.html',
  styleUrls: ['./list-disciplina.component.scss'],
  providers: [ EscolarService ]
})
export class ListDisciplinaComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;

  private disciplinas : Array<Disciplina>
  private id: number

  constructor(private service: EscolarService,private toastr: ToastrService) { }

  ngOnInit() {
    this.carregaDisciplinas()
  }

  deletarDisciplina(valor: Event) {

    let id: number = this.disciplinas[this.id].id
    this.service.deletaObjeto(id, 'disciplina')
    .then(resposta => {
      this.toastr.success('Sucesso ao deletar disciplina')
      this.carregaDisciplinas()
      this.dangerModal.hide()
    })
    .catch(resposta => {
      this.dangerModal.hide()
      this.toastr.error( resposta.json().msg, 'Erro')
    })
  }

  carregaDisciplinas(){
    this.service.getListaObjetos('disciplina')
    .then(resposta => {
      this.disciplinas = resposta
    })
    .catch(response => {
      console.log("Erro ao consultar disciplinas. Erro: " + JSON.stringify(response))
    })
  }

}
