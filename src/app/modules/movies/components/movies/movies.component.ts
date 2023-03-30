import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
   title = "Lista de películas";
   movies:any;
  constructor(private http:HttpClient) { }
  displayedColumns: String[]=['id','title','posterURL'];
  dataSource = new MatTableDataSource<MovieElement>();

  ngOnInit(): void {
    this.http.get('https://api.sampleapis.com/movies/horror').subscribe(data => {
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