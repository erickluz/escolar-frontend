import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss']
})
export class FormAlunoComponent implements OnInit {
  
  name = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

}
