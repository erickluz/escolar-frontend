import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../shared/professor.model';
import { PROFESSORES } from '../../../sge.mock';
import { EscolarService } from '../../escolar.service';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss'],
  providers: [ EscolarService]
})
export class ListProfessorComponent implements OnInit {

  professores: Array<Professor> = []

  constructor(private servico: EscolarService) { }

  ngOnInit() {
    this.getListaProfessores()
  }

  deletarProfessor(valor: Event){
    let id : number = parseInt((<HTMLInputElement>valor.target).id)
    this.servico.deletaProfessor(this.professores[id].id)
    this.getListaProfessores()
  }

  getListaProfessores(){
    this.servico.getProfessores()
    .then(professores => {
      if (professores)
        this.professores = professores    
    })
       
  }

}
