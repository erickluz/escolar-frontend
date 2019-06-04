import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Matricula } from '../../../../shared/matricula.model';
import { CURSOS } from '../../../../sge.mock';
import { Curso } from '../../../../shared/curso.model';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-form-matricula',
  templateUrl: './form-matricula.component.html',
  styleUrls: ['./form-matricula.component.scss']
})
export class FormMatriculaComponent implements OnInit {

  formMatricula: FormGroup

  cursos: Array<Curso> = CURSOS
  cursoOp: NgOption[] = []

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Matricula(null, new Date().toLocaleDateString(), null, null, null))
    this.cursos.map(curso => {
      this.cursoOp.push({value: curso, label: curso.nome.toString()})
    })
    // for(let i=0;i<this.cursos.length;i++)
    //   this.cursoOp.push({value: this.cursos[i], label: this.cursos[i].nome.toString()})
  }

  createForm(matricula: Matricula){
    this.formMatricula = this.formBuilder.group({
      id: [matricula.id],
      dataMatricula: [matricula.dataMatricula],
      dataEncerramento: [matricula.dataEncerramento],
      status: [matricula.status],
      curso: [matricula.curso]
    })
    this.formMatricula.controls['status'].setValue("Em espera")
  }

  onSubmit(){
    console.log(JSON.stringify(this.formMatricula.value))
  }

}
