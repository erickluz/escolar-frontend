import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  formalarioDeAlunos: FormGroup

  constructor(
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
