import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-familymovies',
  templateUrl: './familymovies.component.html',
  styleUrls: ['./familymovies.component.css']
})
export class FamilymoviesComponent implements OnInit {

  title = "Lista de películas";
  movies:any;
 constructor(private http:HttpClient) { }
 displayedColumns: String[]=['id','title','posterURL'];
 dataSource = new MatTableDataSource<MovieElement>();

 ngOnInit(): void {
   this.http.get('https://api.sampleapis.com/movies/family').subscribe(data => {
     var dataTransformada = Object.entries(data);
     this.processMoviesResponse(data);
     console.log(this.movies);
   })
 }
 processMoviesResponse(resp: any){
   const dataMovie: MovieElement[] = [];
     let listMovie = resp;
     console.log("Ah ingresado a la lista de peliculas");
     listMovie.forEach((element:MovieElement) => {
       dataMovie.push(element);
     });

     this.dataSource = new MatTableDataSource<MovieElement>(dataMovie)
     console.log(dataMovie)
   
 }

}
export interface MovieElement {
  id: number;
  title: string;
  posterURL: string;
}