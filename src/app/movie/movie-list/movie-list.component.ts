import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { RxFor } from '@rx-angular/template/for';

import { DirtyCheckComponent } from '../../shared/dirty-check.component';
import { TMDBMovieModel } from '../../shared/model/movie.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    FastSvgComponent,
    RouterLink,
    DirtyCheckComponent,
    RxFor,
  ],
  template: `
    <movie-card
      *rxFor="let movie of movies; trackBy: 'id'; let i = index"
      [index]="i"
      [routerLink]="['/movie', movie.id]"
      [loading]="favoritesLoading().has(movie.id)"
      [favorite]="favoriteMovieIds().has(movie.id)"
      (favoriteChange)="favoriteToggled.emit(movie)"
      [movie]="movie"
    />
    @if (empty()) {
      <div class="no-movies">
        <fast-svg name="sad" size="50" />
        There are no movies to show
      </div>
    }
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
      gap: 4rem 2rem;
      place-content: space-between space-evenly;
      align-items: start;
      position: relative;
    }
  `,
})
export class MovieListComponent {
  movies = input.required<TMDBMovieModel[]>();
  empty = computed(() => this.movies().length === 0);
  favoriteMovieIds = input<Set<string>>(new Set<string>([]));
  favoritesLoading = input(new Set<string>());

  favoriteToggled = output<TMDBMovieModel>();
}
