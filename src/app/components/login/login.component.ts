import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";


  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  Login(){
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email:this.email,
      password:this.password
  };
  this.http.post(`${base_url}/usuario/login`,bodyData).subscribe((resultData:any)=>{
    console.log(resultData);
    if(resultData.message == "Email not exist"){
      alert("Email no existe");
    } else if (resultData.message == "login success"){
      this.router.navigateByUrl('/profiles');
    }
    else{
      alert("Email o contraseña incorrectos");
    }
  })
  }
}
