import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: any[] = [];
  currentPage = 1;
  imageBaseUrl = environment.imageUrl;

  constructor(private movieService: MovieService, private loadingCntrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {
      this.movies.push(...res.results);
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
