import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(res => {
      console.log('Discover movies: ', res);
    });
  }

}
