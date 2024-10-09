import { Directive, ElementRef, input, signal } from '@angular/core';
import { fromEvent, map, merge } from 'rxjs';

@Directive({
  selector: '[tilt]',
  standalone: true,
  host: {
    '[style.transform]': 'rotate()',
  },
})
export class TiltDirective {
  tiltDegree = input(5);

  rotate = signal('rotate(0deg)');

  middle = 0;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].borderBoxSize[0].inlineSize;
      this.middle =
        this.elementRef.nativeElement.getBoundingClientRect().left + width / 2;
    });

    resizeObserver.observe(this.elementRef.nativeElement);

    const rotate$ = fromEvent<MouseEvent>(
      this.elementRef.nativeElement,
      'mouseenter',
    ).pipe(map((event) => this.getRotationDegree(event)));

    const reset$ = fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(
      map(() => this.getDefaultRotation()),
    );

    merge(rotate$, reset$).subscribe((rotate) => {
      this.rotate.set(rotate);
    });
  }

  getRotationDegree(event: MouseEvent) {
    const pos = this.determineDirection(event.pageX);
    return `rotate(${pos === 0 ? `${this.tiltDegree()}deg` : `${-this.tiltDegree()}deg`})`;
  }

  getDefaultRotation() {
    return 'rotate(0deg)';
  }

  /**
   *
   * returns 0 if entered from left, 1 if entered from right
   */
  determineDirection(pos: number): 0 | 1 {
    return pos > this.middle ? 1 : 0;
  }
}
