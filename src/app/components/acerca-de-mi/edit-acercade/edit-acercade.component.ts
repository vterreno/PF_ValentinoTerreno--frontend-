import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PdfService } from 'src/app/service/pdf.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  persona: persona = null
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router:Router, public imgService: ImageService, public pdfService: PdfService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imgService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params['id']
    const name = "perfil_" + id
    this.imgService.uploadImage($event, name)
    console.log("Funcion upload anda")
  }

  uploadPdf($event:any) {
    const id = this.activatedRouter.snapshot.params['id']
    const name = "pdf_" + id
    this.pdfService.uploadPdf($event, name)
    console.log("Funcion upload anda")
  }
}
