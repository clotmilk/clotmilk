import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageError]',
  exportAs: 'ImageError'
})
export class ImageErrorDirective {
  @Input() public fallbackImage: string;

  @HostListener('error', ['$event.target'])
  public errorImage(event: HTMLImageElement): void {
    event.src = this.fallbackImage;
  }
}
