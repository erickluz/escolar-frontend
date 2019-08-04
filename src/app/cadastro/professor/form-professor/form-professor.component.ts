import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professor } from '../../../shared/professor.model';
import { EscolarService } from '../../escolar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-professor',
  templateUrl: './form-professor.component.html',
  styleUrls: ['./form-professor.component.scss'],
  providers: [EscolarService]
})
export class FormProfessorComponent implements OnInit {

  private formProfessor: FormGroup
  private professor: Professor
  private edicao: boolean = false

  constructor(private servico: EscolarService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.professor = new Professor(null, null, null, null, null, null, null, null, null, null, null, null)
    this.createForm(this.professor)

    let idProfessor = this.route.snapshot.params['id']
    if (idProfessor != null) {
      this.edicao = true
      this.servico.getObjetoPorId(idProfessor, 'professor')
        .then(professor => {
          this.professor = professor
          this.formProfessor.setValue(this.professor)
        })
    }
  }

  createForm(professor: Professor) {
    this.formProfessor = this.formBuilder.group({
      id: [professor.id],
      nome: [professor.nome],
      sobrenome: [professor.sobrenome],
      email: [professor.email],
      senha: [professor.senha],
      cpf: [professor.cpf],
      dataNascimento: [professor.dataNascimento],
      endereco: [professor.endereco],
      telefone1: [professor.telefone1],
      telefone2: [professor.telefone2],
      dataCadastro: [professor.dataCadastro],
      formacao: [professor.formacao]
    })
  }

  onSubmit() {

    if (!this.edicao) {
      this.servico.cadastrarObjeto(this.formProfessor.value, 'professor')
        .then(resposta => {
          console.log("OK resultado: " + resposta)
          this.toastr.success("Professor cadastrado com sucesso !")
          this.router.navigate(['/cadastro/lista-professores'])
        })
        .catch(resposta => {
          this.toastr.error("Erro ao editar professor!")
          this.router.navigate(['/cadastro/lista-professores'])
          console.log("FAIL resultado: " + resposta)
        })
    } else {
      this.edicao = false
      this.servico.editarObjeto(this.formProfessor.value, 'professor')
        .then(resposta => {
          console.log("OK resultado: " + resposta)
          this.toastr.success("Professor editado com sucesso !")
          this.router.navigate(['/cadastro/lista-professores'])
        })
        .catch(resposta => {
          this.toastr.error("Erro ao editar professor!")
          console.log("FAIL resultado: " + resposta)
          this.router.navigate(['/cadastro/lista-professores'])
        })
    }
  }

}