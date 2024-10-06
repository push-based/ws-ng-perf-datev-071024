import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Directive({
  selector: '[elementVisible]',
  standalone: true,
})
export class ElementVisibilityDirective {
  private platformId = inject(PLATFORM_ID);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  elementVisible = output();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(document, 'scroll')
        .pipe(
          filter(() => !!document.scrollingElement),
          map(() => {
            const { scrollTop, clientHeight } = document.scrollingElement!;
            return (
              scrollTop + clientHeight + 100 >=
              this.elementRef.nativeElement.offsetTop
            );
          }),
          filter(Boolean),
        )
        .subscribe(() => {
          this.elementVisible.emit();
        });
    }
  }
}
