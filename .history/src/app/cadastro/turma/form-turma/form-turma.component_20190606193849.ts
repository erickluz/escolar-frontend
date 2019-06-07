import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { MATRICULA1, ALUNO, ALUNOS, CURSOS } from '../../../sge.mock';
import { Aluno } from '../../../shared/aluno.model';
import { NgOption } from '@ng-select/ng-select';
import { Curso } from '../../../shared/curso.model';
import { Aula } from '../../../shared/aula.model';

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
  cursoOP: NgOption[] = []
  cursos: Array<Curso> = CURSOS
  aulas: Array<Aula>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Turma(null, null, null, null, null))
    this.alunos.map(aluno => {
      this.alunosOp.push({value: aluno, label: aluno.id + " " + aluno.nome + " " + aluno.sobrenome})
    })
    this.cursos.map(curso => {
      this.cursoOP.push({value: curso, label: curso.nome})
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
      matriculas: [turma.matriculas]
    })
  }

  adicionaAluno(valor: Event){
    if (valor != undefined)
      this.alunosCad.push(valor['value'])
    this.formTurma.controls['matriculas'].setValue(this.alunosCad)
  }

  onSubmit(){
    console.log(this.formTurma.value)
  }

  removeAluno(){
    console.log("erick")
  }

}