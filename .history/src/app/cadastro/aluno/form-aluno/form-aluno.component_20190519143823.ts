import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [ TodoService ]
})
export class FormAlunoComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
  }

}
