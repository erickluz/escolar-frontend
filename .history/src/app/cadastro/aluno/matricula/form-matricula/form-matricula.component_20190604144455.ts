import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Matricula } from '../../../../shared/matricula.model';

@Component({
  selector: 'app-form-matricula',
  templateUrl: './form-matricula.component.html',
  styleUrls: ['./form-matricula.component.scss']
})
export class FormMatriculaComponent implements OnInit {

  formMatricula: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Matricula(null, new Date().toLocaleDateString(), null, null, null))
  }

  createForm(matricula: Matricula){
    this.formMatricula = this.formBuilder.group({
      id: [matricula.id],
      dataMatricula: [matricula.dataMatricula],
      dataEncerramento: [matricula.dataEncerramento],
      status: [matricula.status],
      curso: [matricula.curso]
    })
  }

  onSubmit(){
    console.log(JSON.stringify(this.formMatricula.value))
  }

}
