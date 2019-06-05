import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Turma } from '../../../shared/turma.model';

@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.scss']
})
export class FormTurmaComponent implements OnInit {
  formTurma: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Turma(null, null, null, null, null))
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

  onSubmit(){
    console.log(this.formTurma.value)
  }

}

@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)
    }
}