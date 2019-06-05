import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { MATRICULA1 } from '../../../sge.mock';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss']
})
export class FormTurmaComponent implements OnInit {
  formTurma: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Turma(null, null, null, null, null))
    // console.log(this.formTurma.controls['matricula'].v)
  }

  createForm(turma: Turma){
    this.formTurma = this.formBuilder.group({
      id: [turma.id],
      nome: [turma.nome],
      dataInicio: [turma.dataInicio],
      local: [turma.local],
      curso: [turma.curso],
      aulas: [turma.aulas],
      matriculas: this.formBuilder.array([this.formBuilder.group(MATRICULA1)])
    })
    // this.formTurma.controls['matriculas'].setValue([MATRICULA1])

  }

  get getMatriculas() {
    console.log(JSON.stringify(this.formTurma.controls['matriculas'].value))
    return this.formTurma.controls['matriculas'].value
  }

  onSubmit(){
    console.log(this.formTurma.value)
  }

}