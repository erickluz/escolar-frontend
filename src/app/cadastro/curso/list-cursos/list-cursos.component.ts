import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from '../../../shared/curso.model';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss'],
  providers: [ EscolarService]
})
export class ListCursosComponent implements OnInit {

  private cursos: Array<Curso>;
  private edicao: boolean
  private id: number
  
  constructor(private service: EscolarService, private toast: ToastrService, private nav: Router, private route: ActivatedRoute) { }
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  ngOnInit() {
    this.listaCursos()    
  }

  listaCursos(){
    this.service.getListaObjetos('curso')
    .then(resposta => {
      this.cursos = resposta
    })
    .catch(() => {
      this.toast.error("Erro ao listar cursos")
    })
  }

  deletaCurso(){
    this.service.deletaObjeto(this.cursos[this.id].id, "curso")
    .then(() => {
      this.toast.success("Sucesso ao deletar curso")
    })
    .catch(resposta => {
      this.toast.error(resposta.json().message, "Erro")
    })
  }

}
