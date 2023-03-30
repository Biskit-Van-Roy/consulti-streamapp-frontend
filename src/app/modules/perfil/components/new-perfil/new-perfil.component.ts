import { InjectFlags } from '@angular/compiler/src/core';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerfilService } from 'src/app/modules/shared/services/perfil.service';


@Component({
  selector: 'app-new-perfil',
  templateUrl: './new-perfil.component.html',
  styleUrls: ['./new-perfil.component.css']
})
export class NewPerfilComponent implements OnInit {
public perfilForm: FormGroup;
  constructor(private fb: FormBuilder, private perfilService:PerfilService, private dialogRef: MatDialogRef<NewPerfilComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log(data);
    this.perfilForm = this.fb.group({
      nombre: ['',Validators.required],
      edad:['', Validators.required]
    });

    if(data != null){
      this.updateForm(data);
    }

  }

  ngOnInit(): void {
  }
  onSave(){
    let data = {
      name: this.perfilForm.get('nombre')?.value,
      tipo_perfil:this.perfilForm.get('edad')?.value
    }
    console.log("La data guardada es: ", data)
    if(this.data != null){
      //actualizar registro
      this.perfilService.updatePerfil(data, this.data.id)
                    .subscribe((data:any)=>{
        this.dialogRef.close(1);
      }, (error:any)=>{
        this.dialogRef.close(2);
      }
      )
    }else {
      this.perfilService.savePerfil(data).subscribe((data:any) => {
        console.log("Se guardó esta información",data);
        this.dialogRef.close(1)
      },(error:any)=>{
        this.dialogRef.close(2);
      })
    }

   
  
  }
  onCancel(){
    this.dialogRef.close(3);
  }
  updateForm(data:any){
    this.perfilForm = this.fb.group({
      nombre: [data.name, Validators.required],
      edad:[data.tipo_perfil, Validators.required]
    })
  }
}
