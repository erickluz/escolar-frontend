import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Curso } from '../../../shared/curso.model';
import { Disciplina } from '../../../shared/disciplina.model';
import { DISCIPLINAS } from '../../../sge.mock';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  formCurso: FormGroup
  disciplinas: Array<Disciplina> = DISCIPLINAS

  disciplina: NgOption[] = []


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Curso(null, null, null, null))
    let i: number

    for(i=0;i<this.disciplinas.length;i++)
      this.disciplina.push({value: this.disciplinas[i].id, label: this.disciplinas[i].nome.toString()})
    

  }


  createForm(curso: Curso) {
    this.formCurso = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome],
      descricaoCurso: [curso.descricaoCurso],
      disciplinas: [curso.disciplinas]
    })
  }

  onSubmit() {
    console.log(this.formCurso.value)
  }


}