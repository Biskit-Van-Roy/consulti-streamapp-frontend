import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  edad: number = 0;
  id_plan:number = 0;
  Dplan1:boolean =false;
  plan1:boolean = true;
  checkboxEstado1:boolean = false;
  plan2:boolean = false;
  plan3:boolean = false;
  tipo1:number = 0;
  tipo2:boolean = false;
  tipo_perfil:number =0;
  checkboxes = [
    { id: 1, value: 'Plan Basico', disabled: false },
    { id: 2, value: 'Plan Medio', disabled: false },
    { id: 3, value: 'Plan Avanzado', disabled: false },

  ];
  checkboxesUser = [
    { id: 1, value: 'Administrador', disabled: false },
    { id: 2, value: 'Usuario', disabled: false },
  ];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  onChangeU(event:any){
    console.log("lo toco");
    if(event.target.checked){
      this.checkboxesUser.forEach((checkbox)=>{
        if(checkbox.id != event.target.id){
          checkbox.disabled=true;
      
        }
        else{
          console.log("seleccionado el plan "+checkbox.id)
          this.tipo_perfil = checkbox.id;
        }
      })
    }
    else{
      this.checkboxesUser.forEach((checkbox)=>{
        checkbox.disabled = false;
      })
    }
  }
  onChange(event:any){
    console.log("lo toco");
    if(event.target.checked){
      this.checkboxes.forEach((checkbox)=>{
        if(checkbox.id != event.target.id){
          checkbox.disabled=true;
      
        }else{
          console.log("seleccionado el plan "+checkbox.id)
          this.id_plan = checkbox.id;
        }

      })
    }
    else{
      this.checkboxes.forEach((checkbox)=>{

        checkbox.disabled = false;
  
      })
    }
  }
  save(){
   if(this.edad<18){
    alert("Tienes que ser mayor de edad para registrarte");
   }
   else{

   

    let bodyData = {
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "edad":this.edad,
      "id_plan":this.id_plan,
      "tipo_perfil":this.tipo_perfil
    };
    console.log(bodyData);
    this.http.post(`${base_url}/usuario/save`,bodyData,{responseType:'text'}).subscribe((resultData:any)=>{
      console.log(resultData);
      alert("Usuario registrado exitosamente");
    });
  }
  }
}
