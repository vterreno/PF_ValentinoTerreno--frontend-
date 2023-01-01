import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de-mi/edit-acercade/edit-acercade.component';
import { EditeducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/educacion/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { NewExperienciaComponent } from './components/educacion/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaedu', component:NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'editacercade/:id', component:EditAcercadeComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'nuevoproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent},
  {path:'nuevoskill', component: NewSkillComponent},
  {path:'editskill', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
