import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }
  /**
   * Get all profiles
   * @returns 
   */
  getPerfiles(){
    const endpoint  = `${base_url}/perfil`;
    return this.http.get(endpoint);
  }
  /**
   * save profile
   */
  savePerfil(body: any){
    const endpoint = `${base_url}/perfiles`;
    return this.http.post(endpoint, body);
  }
  /**
   * update profile
   */
  updatePerfil(body: any, id:number){
    const endpoint = `${base_url}/perfiles/${id}`;
    return this.http.put(endpoint, body);
  }
  /**
   * delete profile
   * */  
  deletePerfil(id:number){
    const endpoint = `${base_url}/perfiles/${id}`;
    return this.http.delete(endpoint);
  }
}
