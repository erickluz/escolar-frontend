import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { MATRICULA1, ALUNO, ALUNOS } from '../../../sge.mock';
import { Aluno } from '../../../shared/aluno.model';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss']
})
export class FormTurmaComponent implements OnInit {
  formTurma: FormGroup
  alunos: Array<Aluno> = ALUNOS
  alunosCad: Array<Aluno>

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
      alunos: [turma.alunos]
    })
  }

  get getAlunos(): Array<Aluno> {
    return this.formTurma.controls['alunos'].value as Array<Aluno>
  }

  onSubmit(){
    console.log(this.formTurma.value)
  }
}