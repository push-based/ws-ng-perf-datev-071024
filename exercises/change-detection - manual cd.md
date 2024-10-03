# Manual Change Detection Exercise

In this exercise we will focus on basic runtime optimizations in angular applications by using our knowledge about
the `ChangeDetection` system in angular.

## 1. Fix `MovieListPageComponent`

Draft: Open `movie-list-page.component.ts`, inject `ChangeDetectorRef`. Use `markForCheck` after setting the `movies` value.


<details>
  <summary>cdRef#markForCheck: MovieListPageComponent</summary>

```ts

// movie-list-page.component.ts

import { ChangeDetectorRef } from '@angular/core';

private cdRef = inject(ChangeDetectorRef); // 👈️👈️👈️👈️

constructor() {
  this.activatedRoute.params.subscribe((params) => {
    if (params.category) {
      this.paginate((page) =>
        this.movieService.getMovieList(params.category, page),
      ).subscribe((movies) => {
        this.movies = movies;
        this.cdRef.markForCheck(); // 👈️👈️👈️👈️
      });
    } else {
      this.paginate((page) =>
        this.movieService.getMoviesByGenre(params.id, page),
      ).subscribe((movies) => {
        this.movies = movies;
        this.cdRef.markForCheck(); // 👈️👈️👈️👈️
      });
    }
  });
}


```

</details>

## 2. Fix `TiltDirective`

Draft: Open `movie-list-page.component.ts`, inject `ChangeDetectorRef`. Use `markForCheck` after setting the `movies` value.

<details>
  <summary>markForCheck: TiltDirective</summary>

```ts

// tilt.directive.ts

export class TiltDirective {

  private cdRef = inject(ChangeDetectorRef); // 👈️👈️👈️👈️

  constructor(private elementRef: ElementRef<HTMLElement>) {
    const rotate$ = fromEvent<MouseEvent>(
      this.elementRef.nativeElement,
      'mouseenter',
    ).pipe(map((event) => this.getRotationDegree(event)));

    const reset$ = fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(
      map(() => this.getDefaultRotation()),
    );

    merge(rotate$, reset$).subscribe((rotate) => {
      this.rotate = rotate;
      this.cdRef.markForCheck(); // 👈️👈️👈️👈️
    });
  }
}

```

</details>
