import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Curso } from '../../../shared/curso.model';
import { Disciplina } from '../../../shared/disciplina.model';
import { DISCIPLINAS } from '../../../sge.mock';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {
  
  formCurso: FormGroup
  disciplinas: Array<Disciplina> = DISCIPLINAS

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Curso(null, null, null, null))
  }


  createForm(curso: Curso){
    this.formCurso = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome],
      descricaoCurso: [curso.descricaoCurso],
      disciplinas: [curso.disciplinas]
    })
  }

  onSubmit(){
    console.log(this.formCurso.value)
  }


}