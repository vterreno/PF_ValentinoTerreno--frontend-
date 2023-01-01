import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string = ""
  prueba:string = ""
  constructor(private storage:Storage) { }

  public uploadImage($event:any, name:string, flag:boolean) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name)
    console.log("Anda el upload")
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(flag, name)})
    .catch(error => console.log(error))
  }

  getImages(flag:boolean, name:string) {
    const imgRef = ref(this.storage, 'imagen')
    list(imgRef)
    .then(async response => {
      for(let item of response.items){
        // FOTO PERFIL
        if(flag == true){
          this.url = await getDownloadURL(item)
          console.log("La URL es: " + this.url)
          flag = false
        } else {
          // FOTOS PROYECTOS
          this.prueba = await getDownloadURL(item)
          if(this.prueba.includes(name)){
            console.log("La URL es: " + this.prueba)
            this.url = await getDownloadURL(item)
          }
        } 
      } 
    })
    .catch(error => console.log(error))
  }

  clearURL (){
    this.url = ""
  }

}
