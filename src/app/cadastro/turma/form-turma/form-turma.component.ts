import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';
import { Matricula } from '../../../shared/matricula.model';
import { Aluno } from '../../../shared/aluno.model';
import { NgOption } from '@ng-select/ng-select';
import { Curso } from '../../../shared/curso.model';
import { Aula } from '../../../shared/aula.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Professor } from '../../../shared/professor.model';
import { Disciplina } from '../../../shared/disciplina.model';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss'],
  providers: [EscolarService]
})
export class FormTurmaComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;

  private formTurma: FormGroup
  private formAula: FormGroup
  // MOCK
  private alunos: Array<Aluno>
  private alunosCad: Array<Aluno> = []
  private aulasCad: Array<Aula> = []
  private cursos: Array<Curso>
  private professores: Array<Professor>
  private disciplinas: Array<Disciplina>
  private alunosOp: NgOption[] = []
  private cursoOp: NgOption[] = []
  private professoresOp: NgOption[] = []
  private disciplinaOp: NgOption[] = []

  constructor(
    private formBuilder: FormBuilder, 
    private modalService: NgbModal, 
    private service: EscolarService, 
    private toast: ToastrService,
    private nav: Router) { }

  ngOnInit() {
    // Criando formularios reativos
    this.createFormTurma(new Turma(null, null, null, null, [new Matricula(null, null, null, null, null)]))
    this.createFormAula(new Aula(null, null, null, null, null), new Professor(null, null, null, null, null, null, null, null, null, null, null, null))

    this.carregaAlunos()
    this.carregaCursos()
    this.carregaProfessores()
    this.carregaDisciplinas()

  }

  carregaProfessores(){
    this.service.getListaObjetos('professor')
    .then(resposta => {
      this.professores = resposta
      this.professores.map(professor => {
        this.professoresOp = [...this.professoresOp, { value: professor, label: professor.nome}]
      })
    })
    .catch(() => {
      this.toast.error("Erro ao carregar professores")
      this.nav.navigate(['/cadastro/lista-turmas'])
    })
  }

  carregaDisciplinas(){
    this.service.getListaObjetos('disciplina')
    .then(resposta => {
      this.disciplinas = resposta
      this.disciplinas.map( disciplina => {
        this.disciplinaOp = [...this.disciplinaOp, {value: disciplina, label: disciplina.nome}]
      })
    })
    .catch(() => {
      this.toast.error("Erro ao carregar disciplinas")
      this.nav.navigate(['/cadastro/lista-turmas'])
    })
  }

  carregaCursos() {
    this.service.getListaObjetos('curso')
    .then((resposta) => {
      this.cursos = resposta
      this.cursos.map(curso => {
        this.cursoOp = [...this.cursoOp, { value: curso, label: curso.nome }]
      })
    })
    .catch(() => {
      this.toast.error("Erro ao carregar cursos")
      this.nav.navigate(['/cadastro/lista-turmas'])
    })
  }

  carregaAlunos() {
    this.service.getListaObjetos('aluno')
      .then(resposta => {
        this.alunos = resposta
        this.alunos.map(aluno => {
          this.alunosOp = [...this.alunosOp, { value: aluno, label: aluno.id + " - " + aluno.nome + " " + aluno.sobrenome }]
        })
      })
      .catch(() => {
        this.toast.error("Erro ao carregar alunos")
        this.nav.navigate(['/cadastro/lista-turmas'])
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

  createFormAula(aula: Aula, professor: Professor) {
    this.formAula = this.formBuilder.group({
      id: [aula.id],
      horaInicio: [aula.horaInicio],
      horaFim: [aula.horaFim],
      professores: [aula.professores],
      disciplina: [aula.disciplina]
    });
  }

  adicionaAluno(valor: Event) {
    if (valor != undefined)
      this.alunosCad.push(valor['value'])
  }

  adicionaAula() {
    this.aulasCad.push(this.formAula.value)
  }

  onSubmit() {
    let matriculas: Array<Matricula>
    this.alunosCad.map(aluno => {
      if (aluno.matriculas.length == 0){
        this.toast.error("O Aluno " + aluno.nome + " esta matriculado em nenhum curso", "Erro")
        return
      }

      matriculas.push(aluno.matriculas[0])

    })
    this.formTurma.controls['matriculas'].setValue(matriculas)
    console.log(this.formTurma.value)
  }

  removeAluno(valor: Event) {
    let index = parseInt((<HTMLInputElement>valor.target).id)
    this.alunosCad.splice(index, 1)
  }

  removeAulas(valor: Event) {
    let index = parseInt((<HTMLInputElement>valor.target).id)
    this.aulasCad.splice(index, 1)
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}