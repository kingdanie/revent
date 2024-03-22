import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showNavLinks: boolean = false;

  toggleNavLinks(): void {
    this.showNavLinks = !this.showNavLinks;
  }

}
