import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { MATRICULA1, ALUNO, ALUNOS, CURSOS, AULA2, AULA1, PROFESSORES, DISCIPLINAS, PROFESSOR } from '../../../sge.mock';
import { Aluno } from '../../../shared/aluno.model';
import { NgOption } from '@ng-select/ng-select';
import { Curso } from '../../../shared/curso.model';
import { Aula } from '../../../shared/aula.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Professor } from '../../../shared/professor.model';
import { Disciplina } from '../../../shared/disciplina.model';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss']
})
export class FormTurmaComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;

  formTurma: FormGroup
  formAula: FormGroup

  // MOCK
  alunos: Array<Aluno> = ALUNOS
  alunosCad: Array<Aluno> = ALUNOS
  aulasCad: Array<Aula> = [AULA1, AULA2]
  cursos: Array<Curso> = CURSOS
  professores: Array<Professor> = PROFESSORES
  disciplina: Array<Disciplina> = DISCIPLINAS

  alunosOp: NgOption[] = []
  cursoOp: NgOption[] = []
  professoresOp: NgOption[] = []
  disciplinaOp: NgOption[] = []




  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    // Criando formularios reativos
    this.createFormTurma(new Turma(null, null, null, null, null))
    this.createFormAula(new Aula(null, null, null, [new Professor(null, null, null, null, null, null, null, null, null, null, null, null)], null))

    // Alimentando combos
    this.alunos.map(aluno => {
      this.alunosOp.push({ value: aluno, label: aluno.id + " " + aluno.nome + " " + aluno.sobrenome })
    })
    this.cursos.map(curso => {
      this.cursoOp.push({ value: curso, label: curso.nome })
    })
    this.professores.map(professor => {
      this.professoresOp.push({ value: professor, label: professor.nome })
    })
    this.disciplina.map(disciplina => {
      this.disciplinaOp.push({ value: disciplina, label: disciplina.nome })
    })
  }

  createFormTurma(turma: Turma) {
    this.formTurma = this.formBuilder.group({
      id: [turma.id],
      nome: [turma.nome],
      dataInicio: [turma.dataInicio],
      local: [turma.local],
      curso: [turma.curso],
      aulas: this.formBuilder.array([]),
      matriculas: [turma.matriculas]
    })
  }

  createFormAula(aula: Aula) {
    this.formAula = this.formBuilder.group({
      id: [aula.id],
      horaInicio: [aula.horaInicio],
      horaFim: [aula.horaFim],
      professores: this.formBuilder.array([this.formBuilder.group({
        id: [aula.professores[0].id],
        nome: [aula.professores[0].nome],
        sobrenome: [aula.professores[0].sobrenome],
        email: [aula.professores[0].email],
        senha: [aula.professores[0].senha],
        cpf: [aula.professores[0].cpf],
        dataNascimento: [aula.professores[0].dataNascimento],
        endereco:  [aula.professores[0].endereco],
        telefone1:  [aula.professores[0].telefone1],
        telefone2:  [aula.professores[0].telefone2],
        dataCadastro: [aula.professores[0].dataCadastro],
        formacao: [aula.professores[0].formacao]
      })]),
    disciplina: [aula.disciplina]
  });
}

adicionaAluno(valor: Event){
  if (valor != undefined)
    this.alunosCad.push(valor['value'])
}

adicionaAula(){
  this.aulasCad.push(this.formAula.value)
}

onSubmit(){
  let matriculas: Array<Matricula>
  this.alunosCad.map(aluno => {
    matriculas.push(aluno.matriculas[0])
  })
  this.formTurma.controls['matriculas'].setValue(matriculas)
  console.log(this.formTurma.value)
}

removeAluno(valor: Event){
  let index = parseInt((<HTMLInputElement>valor.target).id)
  this.alunosCad.splice(index, 1)
}

removeAulas(valor: Event){
  let index = parseInt((<HTMLInputElement>valor.target).id)
  this.aulasCad.splice(index, 1)
}

openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}  

}