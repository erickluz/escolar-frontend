import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EscolarService } from '../../../escolar.service';
import { Aluno } from '../../../shared/aluno.model';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [ EscolarService ]
})
export class FormAlunoComponent implements OnInit {
  
  formAluno : FormGroup

  constructor() { }

  ngOnInit() {
  }

  createForm(aluno: Aluno){
    this.formAluno = new FormGroup({
      id: new FormControl(aluno.id),
      nome: new FormControl


    })
  }

}
