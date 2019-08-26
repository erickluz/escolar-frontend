import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../../shared/aluno.model';
import { ALUNO, ALUNOS } from '../../../sge.mock';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.scss'],
  providers: [EscolarService]
})
export class ListAlunoComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;

  private alunos: Array<Aluno>
  private id: number

  constructor(private service: EscolarService, private toast: ToastrService, private nav: Router ) {}

  ngOnInit() {
    this.carregaAlunos()
  }

  deletarAlunos(){
     this.service.deletaObjeto(this.alunos[this.id].id, 'aluno')
    .then((resposta) => {
      this.toast.success("Sucesso ao deletar aluno")
      this.dangerModal.hide()
      this.carregaAlunos()
    })
    .catch(resposta => {
      this.toast.error(resposta.json().message, "Erro")
      this.dangerModal.hide()
    })
  }

  carregaAlunos(){
    this.service.getListaObjetos('aluno')
    .then(resposta => {
      this.alunos = resposta
    })
    .catch(resposta => {
      console.log("Erro ao listar alunos, Erro: " + resposta.json())
      this.toast.error("Erro ao listar alunos")
      this.nav.navigate(['home/home'])
    })
  }

}
