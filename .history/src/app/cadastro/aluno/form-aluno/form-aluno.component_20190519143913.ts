import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EscolarService } from '../../../escolar.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [ EscolarService ]
})
export class FormAlunoComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
  }

}
