import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../../../shared/matricula.model';
import { ALUNO, MATRICULA1, MATRICULA2 } from '../../../../sge.mock';
import { Aluno } from '../../../../shared/aluno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolarService } from '../../../escolar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss'],
  providers: [EscolarService]
})
export class ListMatriculaComponent implements OnInit {

  private matriculas: Array<Matricula>
  private aluno: Aluno
  private idMatricula: string
  constructor(
    private route: ActivatedRoute,
    private nav: Router, 
    private service: EscolarService,
    private toast: ToastrService
    ) { }

  ngOnInit() {
    this.idMatricula = this.route.snapshot.params['id']

  }

  listaMatriculas(){
    this.service.getListaObjetos('matricula')
    .then(resposta => {
      this.matriculas = resposta
    })
    .catch(resposta => {
      this.toast.error(resposta.json().error, "Erro")
      this.nav.navigate(['/home/home'])
    })
  }

}
