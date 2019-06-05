import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { MATRICULA1, ALUNO, ALUNOS } from '../../../sge.mock';
import { Aluno } from '../../../shared/aluno.model';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss']
})
export class FormTurmaComponent implements OnInit {
  formTurma: FormGroup
  alunos: Array<Aluno> = ALUNOS
  alunosCad: Array<Aluno> = []
  alunosOp: NgOption[] = []
  resposta: string = ""

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Turma(null, null, null, null, null))
    this.alunos.map(aluno => {
      this.alunosOp.push({value: aluno, label: aluno.id + " " + aluno.nome + " " + aluno.sobrenome})
    })
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

    
  adicionaAluno(valor: Event){
    this.alunosCad.push(valor['value'])
  }


  onSubmit(){
    console.log(this.formTurma.value)
  }
}