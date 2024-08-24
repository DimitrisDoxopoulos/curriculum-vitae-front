import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eye-svg',
  templateUrl: './eye-svg.component.html',
  styleUrls: ['./eye-svg.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EyeSvgComponent {
  @Output() toggle = new EventEmitter<void>();
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.toggle.emit();
  }
}
