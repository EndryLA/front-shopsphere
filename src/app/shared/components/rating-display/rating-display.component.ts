import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-display',
  standalone: true,
  imports: [],
  templateUrl: './rating-display.component.html',
  styleUrl: './rating-display.component.scss'
})
export class RatingDisplayComponent {

  @Input() rating: number = 0;
  stars: ('full' | 'half' | 'empty')[] = [];

  ngOnChanges(): void {
    const full = Math.floor(this.rating);
    const half = this.rating % 1 >= 0.25 && this.rating % 1 <= 0.75;
    const empty = 5 - full - (half ? 1 : 0);

    this.stars = [
      ...Array(full).fill('full'),
      ...(half ? ['half'] : []),
      ...Array(empty).fill('empty'),
    ];
  }

  getIconPath(type: 'full' | 'half' | 'empty'): string {
    return `/assets/icons/${type}-star.svg`;
  }

}
