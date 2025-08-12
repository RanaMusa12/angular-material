import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  standalone: false,
  templateUrl: './sidenav-list.html',
  styleUrl: './sidenav-list.css',
})
export class SidenavList {
  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit();
  }
}
