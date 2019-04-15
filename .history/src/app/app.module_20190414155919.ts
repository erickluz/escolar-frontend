import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule, AccordionModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { CursosComponent } from './cursos/cursos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TurmasComponent } from './turmas/turmas.component';
import { AulasComponent } from './aulas/aulas.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CoreModule,
    FormsModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    DisciplinasComponent,
    TurmasComponent,
    AulasComponent,
    ProfessoresComponent,
    AlunosComponent,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
