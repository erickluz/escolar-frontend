import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Disciplina } from '../../../shared/disciplina.model';
import { DISCIPLINAS } from '../../../sge.mock';

@Component({
  selector: 'app-form-disciplina',
  templateUrl: './form-disciplina.component.html',
  styleUrls: ['./form-disciplina.component.scss']
})
export class FormDisciplinaComponent implements OnInit {

  formDisciplina: FormGroup
  disciplinas: Array<Disciplina> = DISCIPLINAS
  items = [true, 'Two', 3];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Disciplina(null, null, null, null))
  }

  createForm(disciplina: Disciplina){
    this.formDisciplina = this.formBuilder.group({
      id: [disciplina.id],
      nome: [disciplina.nome],
      dataCadastro: [disciplina.dataCadastro],
      descricao: [disciplina.descricao]
    })

  }

}