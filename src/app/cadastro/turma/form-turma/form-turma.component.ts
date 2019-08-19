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
import { Router, ActivatedRoute } from '@angular/router';

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
  private turma: Turma
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
  private edicao: boolean = false


  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private service: EscolarService,
    private toast: ToastrService,
    private nav: Router,
    private rot: ActivatedRoute
  ) { }

  ngOnInit() {
    // Criando formularios reativos
    this.createFormTurma(new Turma(null, null, null, null, [new Matricula(null, null, null, null, null)]))
    this.createFormAula(new Aula(null, null, null, null, null), new Professor(null, null, null, null, null, null, null, null, null, null, null, null))

    if (this.edicao) {
      let idTurma = this.rot.snapshot.params['id']
      if (idTurma != null) {
        this.service.getObjetoPorId(idTurma, 'turma')
          .then(resposta => {
            this.turma = resposta
            console.log(JSON.stringify(resposta))
            this.formTurma.setValue(this.turma)
          })
          .catch(resposta => {
            console.log("Erro ao carregar turma : " + idTurma + " : " + JSON.stringify(resposta))
            this.toast.error("Erro ao carregar Turma")
            this.nav.navigate(['/cadastro/lista-turmas'])
          })
      } else {
        this.toast.error("Erro interno")
        this.nav.navigate(['/cadastro/lista-turmas'])
      }
    }

    this.carregaAlunos()
    this.carregaCursos()
    this.carregaProfessores()
    this.carregaDisciplinas()

  }

  carregaProfessores() {
    this.service.getListaObjetos('professor')
      .then(resposta => {
        this.professores = resposta
        this.professores.map(professor => {
          this.professoresOp = [...this.professoresOp, { value: professor, label: professor.nome }]
        })
      })
      .catch(() => {
        this.toast.error("Erro ao carregar professores")
        this.nav.navigate(['/cadastro/lista-turmas'])
      })
  }

  carregaDisciplinas() {
    this.service.getListaObjetos('disciplina')
      .then(resposta => {
        this.disciplinas = resposta
        this.disciplinas.map(disciplina => {
          this.disciplinaOp = [...this.disciplinaOp, { value: disciplina, label: disciplina.nome }]
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
          if (aluno.matriculas.length != 0)
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
      matriculas: [turma.matriculas],
      aulas: [turma.aulas]
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

    if (this.alunosCad.length == 0) {
      this.toast.error("Necessario alunos para se cadastrar uma Turma")
      return
    }
    if (this.aulasCad.length == 0) {
      this.toast.error("Necessario ter aulas registradas para se cadastrar uma Turma")
      return
    }


    let matriculas: Array<Matricula> = []
    for (let aluno of this.alunosCad) {
      if (aluno.matriculas.length == 0) {
        this.toast.error("O Aluno " + aluno.nome + " esta matriculado em nenhum curso", "Erro")
        return
      } else {
        matriculas.push(aluno.matriculas[0])
      }
    }

    // Persistencia      
    let idMatriculas: Array<any> = []
    for (let matricula of matriculas) {
      idMatriculas.push({ id: matricula.id })
    }


    let aulasDTO: Array<any> = []
    for (let aula of this.aulasCad) {

      let idProfessores: Array<any> = []
      for(let professor of aula.professores){
        idProfessores.push({id: professor.id})
      }

      aulasDTO.push({
        id: null,
        horaInicio: aula.horaInicio,
        horaFim: aula.horaFim,
        professores: idProfessores,
        disciplina: { id: aula.disciplina.id }
      })
    }

    let turmaDTO = {
      id: null,
      nome: this.formTurma.controls['nome'].value,
      dataInicio: this.formTurma.controls['dataInicio'].value,
      local: this.formTurma.controls['local'].value,
      curso: { id: this.formTurma.controls['curso'].value.id },
      matriculas: idMatriculas,
      aulas: aulasDTO
    }
    console.log(JSON.stringify(turmaDTO))
    this.service.cadastrarObjeto(turmaDTO, 'turma')
      .then(() => {
        this.toast.success("Turma cadastrada com sucesso")
        this.nav.navigate(["/cadastro/lista-turmas"])
      })
      .catch(resposta => {
        this.toast.error(resposta.json().msg, "Erro")
      })

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