import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';
import { PerfilService } from 'src/app/modules/shared/services/perfil.service';
import { NewPerfilComponent } from '../new-perfil/new-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private perfilService:PerfilService, public dialog: MatDialog, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getPerfiles();
  }
  displayedColumns: String[]=['id','name','description','actions'];
  dataSource = new MatTableDataSource<PerfilElement>();

  getPerfiles(){
    this.perfilService.getPerfiles().subscribe((data:any)=>{
      console.log("Perfiles: ",data);
      this.processPerfilesResponse(data);
    }, (error) => {
      console.log("error: ",error);
    }
    )
  }
  processPerfilesResponse(resp: any){
    const dataPerfil: PerfilElement[] = [];
    if(resp.metadata[0].code=="00"){
      let listPerfil = resp.perfilResponse.perfil;
      console.log("Ah ingresado a la lista de perfiles");
      listPerfil.forEach((element:PerfilElement) => {
        dataPerfil.push(element);
      });

      this.dataSource = new MatTableDataSource<PerfilElement>(dataPerfil)
    }
  }

  openPerfilDialog(){
    const dialogRef = this.dialog.open(NewPerfilComponent, {width:'450px',
      
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1 ){
        this.openSnackbar("Perfil agregago", "Exitosa");
        this.getPerfiles();
      } else if(result == 2){
        this.openSnackbar("No se guardó el perfil", "Error");
      }
    });
  }
  edit(id:number, name: string, tipo_perfil: string){
  const dialogRef = this.dialog.open(NewPerfilComponent,{
    data:{id:id, name:name, tipo_perfil:tipo_perfil}
  });
  dialogRef.afterClosed().subscribe((result:any)=>{
    if(result == 1){
      this.openSnackbar("Perfil actualizado","Exitosa");
      this.getPerfiles();
    } else if(result ==2){
      this.openSnackbar("Se produjo un error al actualizar","Error")
    }
  });
  
  }
  delete(id:any){
    const dialogRef = this.dialog.open(ConfirmComponent,{
      width: '450px',
      data:{id:id}
    });
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result==1){
        this.openSnackbar("Perfil eliminado","Exitosa");
        this.getPerfiles();
      } else if(result==2){
        this.openSnackbar("Se produjo un error al eliminar el perfil", "Error");
      }
    })
  }
  openSnackbar(message: string, action: string): MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message,action,{duration: 2000})
  }
}


export interface PerfilElement {
  description: string;
  id: number;
  name: string;
}