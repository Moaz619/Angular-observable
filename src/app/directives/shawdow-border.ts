import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShawdowBorder]',
})
export class ShawdowBorder {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    const el = this.element.nativeElement;
    el.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.43)';
    el.style.borderRadius = '12px';
    el.style.transform = 'scale(1.03)';
    el.style.transition = 'all 0.3s ease-in-out';
  }

  @HostListener('mouseleave') onMouseLeave() {
    const el = this.element.nativeElement;
    el.style.boxShadow = 'none';
    el.style.borderRadius = '12px'; 
    el.style.transform = 'scale(1)';
  }
}
