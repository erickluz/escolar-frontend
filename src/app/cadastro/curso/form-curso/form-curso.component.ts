import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Curso } from '../../../shared/curso.model';
import { Disciplina } from '../../../shared/disciplina.model';
import { NgOption } from '@ng-select/ng-select';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DISCIPLINAS } from '../../../sge.mock';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
  providers: [EscolarService]
})
export class FormCursoComponent implements OnInit {

  private formCurso: FormGroup
  private disciplinas: Array<Disciplina> = DISCIPLINAS
  private disciplinaOp: NgOption[] = []
  private curso: Curso
  private edicao: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private service: EscolarService,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private nav: Router
  ) { }

  ngOnInit() {
    this.listaDisciplinas()
    let idCurso: number = this.route.snapshot.params['id']
    this.createForm(new Curso(null, null, null, null))
    if (idCurso != null) {
      this.service.getObjetoPorId(idCurso, 'curso')
        .then(curso => {
          this.curso = curso
          this.createForm(this.curso)
          this.listaDisciplinas()
        })
        .catch(() => {
          this.toast.error("Erro ao consultar curso")
          this.nav.navigate(['/cadastro/lista-cursos/'])
        })
    } else {
      this.listaDisciplinas()
    }

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
    if (!this.edicao) {
      this.service.cadastrarObjeto(this.formCurso.value, 'curso')
        .then(() => {
          this.toast.success("Sucesso ao cadastrar curso")
          this.nav.navigate(['/cadastro/lista-cursos'])
        })
        .catch(resposta => {
          this.toast.error(resposta.json().msg, "Erro")
          this.nav.navigate(['/cadastro/lista-cursos'])
        })
    } else {
      this.service.editarObjeto(this.formCurso.value, 'curso')
        .then(() => {
          this.toast.success("Sucesso ao editar curso")
          this.nav.navigate(['/cadastrar/lista-cursos'])
        })
        .catch(resposta => {
          this.toast.error(resposta.json().msg, "Erro ao editar objeto")
          this.nav.navigate(['/cadastrar/lista-cursos'])
        })
    }
  }

  listaDisciplinas() {
    this.service.getListaObjetos('disciplina')
      .then(disciplinas => {
        this.disciplinas = disciplinas
        this.disciplinas.map(disciplina => {
          this.disciplinaOp = [...this.disciplinaOp, { value: disciplina, label: disciplina.nome.toString() }]
        })
      })
      .catch(erro => {
        this.toast.error(erro.json().msg, "Erro")
      })
  }

}