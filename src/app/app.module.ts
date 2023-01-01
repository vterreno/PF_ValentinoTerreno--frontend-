import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './service/interceptor-service';
import { NeweducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditeducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewExperienciaComponent } from './components/educacion/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/educacion/edit-experiencia/edit-experiencia.component';
import { EditAcercadeComponent } from './components/acerca-de-mi/edit-acercade/edit-acercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeMiComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAcercadeComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    SkillsComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent
  ]
})
export class AppModule { }
