import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Disciplina } from '../../../shared/disciplina.model';
import { EscolarService } from '../../escolar.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-disciplina',
  templateUrl: './form-disciplina.component.html',
  styleUrls: ['./form-disciplina.component.scss'],
  providers: [EscolarService]
})
export class FormDisciplinaComponent implements OnInit {

  private formDisciplina: FormGroup
  private escolha: boolean = false
  private disciplina


  constructor(private formBuilder: FormBuilder, private service: EscolarService, private toast: ToastrService, private rota: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.disciplina = new Disciplina(null, null, null, null)
    this.createForm(this.disciplina)
    let idDisciplina = this.route.snapshot.params['id']

    if (idDisciplina != null) {
      this.service.getObjetoPorId(idDisciplina, 'disciplina')
        .then(resposta => {
          this.disciplina = resposta
          this.createForm(this.disciplina )
        })
        .catch(resposta => {
          this.toast.error(resposta.json().message, "Erro")
          this.rota.navigate(['/cadastro/lista-disciplinas'])
        })
    }
  }

  createForm(disciplina: Disciplina) {
    this.formDisciplina = this.formBuilder.group({
      id: [disciplina.id],
      nome: [disciplina.nome],
      dataCadastro: [disciplina.dataCadastro],
      descricao: [disciplina.descricao]
    })
  }

  onSubmit() {
    if (!this.escolha) {
      this.service.cadastrarObjeto(this.formDisciplina.value, 'disciplina')
        .then(() => {
          this.toast.success("Sucesso ao cadastrar disciplina")
          this.rota.navigate(['/cadastro/lista-disciplinas'])
        })
        .catch(resposta => {
          this.toast.error(resposta.json().message, "Erro")
          this.rota.navigate(['/cadastro/lista-disciplinas'])
        })
    } else {
      this.service.editarObjeto(this.formDisciplina.value, 'disciplina')
        .then(() => {
          this.toast.success("Sucesso ao editar disciplina")
          this.rota.navigate(['/cadastro/lista-disciplinas'])
        })
        .catch(resposta => {
          this.toast.error(resposta.json().message, "Erro")
          this.rota.navigate(['/cadastro/lista-disciplinas'])
        })
    }


  }

}