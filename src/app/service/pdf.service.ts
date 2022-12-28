import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  url:string = ""
  constructor(private storage:Storage) { }

  public uploadPdf($event:any, name:string) {
    const file = $event.target.files[0]
    const pdfRef = ref(this.storage, `pdf/` + name)
    console.log("Anda el upload")
    uploadBytes(pdfRef, file)
    .then(response => {this.getPdf()})
    .catch(error => console.log(error))
  }

  getPdf() {
    const pdfRef = ref(this.storage, 'pdf')
    list(pdfRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item)
        console.log("La URL es: " + this.url)
      }
    })
    .catch(error => console.log(error))
  }
}