import { Directive, ElementRef, inject, NgZone, output } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Directive({
  selector: '[elementVisible]',
  standalone: true,
})
export class ElementVisibilityDirective {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  private zone = inject(NgZone);

  elementVisible = output();

  constructor() {
    this.zone.runOutsideAngular(() => {
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
          this.zone.run(() => {
            this.elementVisible.emit();
          });
        });
    });
  }
}
